---
title: Building a ChatGPT in .NET MAUI Part 2
author: danielmonettelli
date: 2023-03-31 11:10:00 -0500
categories: [.NET MAUI, Maui Challenges]
tags: [netmaui, openai, ui/ux, border, data templates]
image:
  path: 8_2_cover_publication.png
  width: 1200
  height: 630
  alt: Building a ChatGPT in .NET MAUI Part 2
---

<p style='font-size: 20px;
  color: light-grey; margin: 0px 0px 20px; font-weight: bold; font-style: italic;'>In this second part of my post, the focus is on the application's user interface and its interaction with the ViewModel.</p>

> **INFO:** It is important to me that you have full confidence in the authenticity of my posts. Therefore, I want to inform you that this publication had the help of GPT-3.5. However, I always use my criteria to make sure the post is clear and easy to understand. In case I use this tool or any other again in the future, I will let you know in advance to ensure transparency at all times.
{: .prompt-info }
> **WARNING:** This post emphasizes the importance of using the application ethically and responsibly, which has been developed on the .NET MAUI platform and is based on OpenAI technology. While I do not consider myself a moral authority, I do recognize that I have made mistakes in the past and that I will continue to learn and evolve as a human being in the future. This same philosophy applies to the technological field, where both users and developers must be aware of the possible ethical and social implications of their actions. It is crucial to consider the impact of technology on society and work together to ensure its appropriate and responsible use. For this, it is necessary to adopt ethical and responsible standards, such as transparency, equity and responsibility. Transparency implies adequate and clear disclosure of the processes and results of the use of technology. Equity, for its part, requires that applications be accessible and fair to all people, regardless of their origin, gender, race or beliefs. And responsibility implies assuming the consequences of our actions and decisions, as well as the social responsibility of guaranteeing that technology does not cause harm to society. In summary, the ethical and responsible use of technology is essential to move towards a more just and equitable society. We need both users and developers to embrace ethical and responsible standards, and work together to ensure that technology is used for the common good.
{: .prompt-warning }

I want to emphasize that all the information presented in this publication is due to the valuable talk given by <a href="https://twitter.com/darkicebeam" target="_blank">Luis Beltran, PhD</a>, who gave us taught how to build a ChatGPT in .NET MAUI with the OpenAI APIs. I appreciate his contribution and hope this post can help other developers implement this technology in their own .NET applications.

---

## Parts of ConversationView

The ConversationView view is made up of three distinct sections: the top section, the middle section, and the bottom section. The top section includes the brand image and title of the app, along with buttons to generate text and images. The middle section presents the conversation between the user and the chatbot, presented in a CollectionView. And finally, the lower section includes a field to enter text and buttons to send or capture audio by voice.

![8-2-parts-of-conversationview](8_2_parts_of_conversationview.png)
_Parts of Conversationview_

---

## Lottie animation when message list is empty

When the app's message list is empty, a Lottie animation is automatically activated to enhance the user experience and add a touch of personality to the app's interface. This animation plays continuously and draws the user's attention, indicating that they can send a query to the chatbot at any time. Once the user sends a message or receives a response from the chatbot, the animation stops automatically, allowing the user to focus on the conversation with the chatbot. In this way, animation is an effective tool to attract the user's attention and guide them towards the use of the chatbot.

![8-2-lottie-animation-when-message-list-is-empty](8_2_lottie_animation_when_message_list_is_empty.png)
_Lottie animation when message list is empty_

{% include embed/youtube.html id='yMCbGVo38YE' %}

---

## Interaction of the UI with the ViewModel

The way the chatbot provides information depends not only on the queries that users enter in the text input field, but also on the buttons at the top that change the chatbot's response, either through text or images. Behind the scenes, the ViewModel is in charge of managing the application logic and communicating with the OpenAI service. Below is an image that summarizes how information flows between the UI and the ViewModel.

![8-2-command-flow-and-methods-in-write-and-image-mode](8_2_command_flow_and_methods_in_write_and_image_mode.png)
_Command flow and methods in write and image mode_

{% include embed/youtube.html id='ZtuSfWNcQ_g' %}

### For the AskQuestion method

1. The `CurrentCommand` instance is set to its initial state, which is `AskQuestion`. In addition, `OpacityModeMessage` is set to 1 and `OpacityModeImage` is set to 0.5, and a toast is displayed _(brief, temporary message)_ indicating that it is in write mode.

2. A new instance of `AsyncRelayCommand` is created which calls the `AskQuestionAsync` method.

3. When the `AskQuestionAsync` method is called, sets the `IsTextActive` flag to `true` and the `IsImageActive` flag to `false`.

4. The `QueryManagerAsync` method is called with the `_openAIService.AskQuestion` function as an argument.

5. In `QueryManagerAsync`, the user's message is added to the message list, the `isUserMessage` flag is set to `true`, and the `_openAIService.AskQuestion` function is called with the user's query as an argument.

6. Add the bot's response to the message list, set the `isUserMessage` flag to `false` and scroll to the bottom of the message list.

{% include embed/youtube.html id='fBYBOybi7dc' %}

### For the CreateImage method

1. When the user switches to image mode via the corresponding button, the `CreateImage` method is called. Within this method, the `OpacityModeMessage` is set to 0.5 and the `OpacityModeImage` is set to 1, and a toast is displayed indicating that the image mode has been activated.

2. The `CurrentCommand` property is then assigned a new asynchronous command (`AsyncRelayCommand`) which, when triggered, will execute the `CreateImageAsync` method.

3. When the `CreateImageAsync` method is called, it sets the `IsTextActive` flag to `false` and the `IsImageActive` flag to `true`.

4. The `QueryManagerAsync` method is called with the `_openAIService.CreateImage` function as an argument.

5. In `QueryManagerAsync`, the user message is added to the message list, the `isUserMessage` flag is set to `true`, and the `_openAIService.CreateImage` function is called with the user's query as an argument.

6. Add the bot's response to the message list, set the `isUserMessage` flag to `false`, and scroll the view to the bottom of the message list.

{% include embed/youtube.html id='N9dLwE2z0dc' %}

---

## Data templates in ConversationView

The distinction between messages sent by the user and messages sent by the chatbot is done by using two different templates in the UI. The user message template _(`UserMessageItemTemplate`)_ is used to display messages sent by the user, while the chatbot message template _(`BotMessageItemTemplate`)_ is used to display messages sent by the chatbot. This allows a better visual organization of the conversation and makes it easier for the user to understand the messages he receives.

![8-2-templates-in-conversationview](8_2_templates_in_conversationview.png)
_Templates in Conversationview_

---

## Selection of themes

When the application branding is clicked, the `SelectTheme` method is triggered. This method, which is an asynchronous method, allows you to change the app's theme and animate the conversation view to make the transition smoother.

First, the method gets the current theme of the application and sets the new theme as the opposite of the current _(dark or light)_. Then, set the new theme as the app theme.

An animation is then run in the conversation view using the `ScaleTo` method. For 250 milliseconds, the view shrinks to 95% of its original size, then expands to 105% of its original size for another 250 milliseconds, and finally returns to the original size for another 250 milliseconds. The animation uses the `CubicOut` speedup function to slow down the animation at the end.

```csharp
[RelayCommand]
private async Task SelectTheme()
{
    AppTheme currentTheme = Application.Current.RequestedTheme;
    AppTheme newTheme = currentTheme == AppTheme.Dark ? AppTheme.Light : AppTheme.Dark;
    Application.Current.UserAppTheme = newTheme;
    await ConversationView.ScaleTo(0.95, 250, Easing.CubicOut);
    await ConversationView.ScaleTo(1.05, 250, Easing.CubicIn);
    await ConversationView.ScaleTo(1, 250, Easing.CubicOut);
}
```
{: file='ChatGPT.ViewModels.ConversationViewModel.cs'}

{% include embed/youtube.html id='FA2_ql7q4Uk' %}

---

## Repository

The project is open source and you can see it by clicking on the following image. Don't hesitate to take a look!

[![8-x-github-repository](https://raw.githubusercontent.com/blogdedanielmonettelli/blogdedanielmonettelli.github.io/main/assets/img/images/8_x_github_repository.png)](https://github.com/danielmonettelli/dotnetmaui-chatgpt-oss){:target="_blank"}

---

## Resources

- <a href="https://askxammy.com/working-with-gridlayout-in-xamarin-forms/" target="_blank">Working with GridLayout in Xamarin Forms - Written by Leomaris Reyes </a>.
- <a href="https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/datatemplate?view=net-maui-7.0" target="_blank">Data Templates - Official Documentation from .NET MAUI</a>.
- <a href="https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/border?view=net-maui-7.0" target="_blank">Border - Official Documentation from .NET MAUI</a>.
- <a href="https://www.youtube.com/watch?v=oQluWTag-e4" target="_blank">MVVM is easier than ever with Source Generators, .NET 7 and the MVVM Toolkit - .NET Conf 2022</a>.

---

## Publication in Spanish

- <a href="https://blogdedanielmonettelli.github.io/posts/construyendo-un-chatgpt-en-net-maui-parte-2/" target="_blank">Construyendo un ChatGPT en .NET MAUI Parte 2</a>.

---

## Conclusions

In short, to build the chatbot UI in .NET MAUI we have shown the three different sections that make up the ConversationView, as well as the user message template _(UserMessageItemTemplate)_ and the chatbot message template _(BotMessageItemTemplate )_. In addition, a Lottie animation has been introduced that is displayed when the message list is empty, which helps to improve the user experience.

Feel free to give me your opinion and with the help of my repository, draw your own conclusions. If you have any constructive questions or suggestions, I would very much like to read them. Thanks for your time.
