---
title: Migrating Mitawi to .NET MAUI
author: danielmonettelli
date: 2022-12-29 14:35:00 -0500
categories: [.NET MAUI, Challenges]
tags: [netmaui, xamarinforms, monettelliuikit, xaml, adobexd, ui, ux, mauincommunitytoolkit, xamarincommunitytoolkit, materialdesign, border]
image:
  path: 7_1_cover_publication.png
  width: 1200
  height: 630
  alt: Migrating Mitawi to .NET MAUI
---

<p style='font-size: 20px;
  color: light-grey; margin: 0px 0px 20px; font-weight: bold; font-style: italic;'>In this post I share my experience of migrating my Mitawi app to .NET MAUI and discover promising opportunities to improve the efficiency of my mobile projects.</p>

Mitawi is an open source weather forecast application that provides accurate and up-to-date daily and weekly weather forecasts for locations around the world. Recently, it was ported to .NET MAUI to improve its performance and ease of use. With Mitawi, you can plan your outdoor activities with confidence, since you always have access to the weather forecast for the next few days.

Thanks to Mitawi, I've been able to do a comparison between Xamarin.Forms and .NET MAUI on four important aspects: architectures, performance, useful controls, and migration process. My intent is to share my observations and experiences on these issues to help other developers considering migrating to .NET MAUI.

---

## Architectures

.NET MAUI offers tighter integration with the .NET ecosystem and a cleaner, more modern architecture than Xamarin.Forms. This allows for better code reuse and easier application maintenance and updates. .NET MAUI is also based on the Microsoft mobile application framework, which means you can take advantage of all the tools and resources available in the .NET ecosystem.

![7-1-architectures](7_1_architectures.png)
_Architectures_

---

## Performance

After comparing the performance of .NET MAUI and Xamarin.Forms in the Mitawi application, I have to admit that I haven't noticed a significant difference in terms of speed and resource usage. This may be because I am still using .NET 6, and it is possible that by upgrading to .NET 7 I may see a further improvement in application performance. However, it is important to mention that .NET MAUI uses Microsoft's mobile application framework, which is optimized for performance and efficiency, and allows the use of AOT (Ahead-of-Time) compilation to improve run-time performance. performance. These features may prove useful in the long run and I look forward to taking advantage of them in the future.

> **NOTE:** It is important to note that performance may vary depending on the use case and implementation of the application, so it is recommended to carry out tests and measurements to evaluate the performance in each specific case.
{: .prompt-info }

{% include embed/youtube.html id='10hh-2zicMU' %}
{% include embed/youtube.html id='E10y-d-TysI' %}

---

## Useful controls

.NET MAUI offers some useful controls that are not available in Xamarin.Forms and that can simplify the development of the application's user interface. For example, .NET MAUI has a Border control that allows you to easily create custom borders. This control offers features such as drop shadows and gradients that can be useful for application user interface development and can save time and effort by not having to use other libraries to achieve the same result.

```xml
<!--#region Top layer lower 1-->
<Border
    x:Name="topLayerLower1"
    sk:Skeleton.Hide="True"
    sk:Skeleton.IsBusy="{Binding IsBusy}"
    BackgroundColor="{StaticResource col_thirt}"
    Style="{StaticResource vsm_orientation_topLayerLower1}">
    <Border.Shadow>
        <Shadow
            Brush="{StaticResource col_thirt}"
            Opacity="0.93"
            Radius="45"
            Offset="20,20" />
    </Border.Shadow>
    <Border.StrokeShape>
        <RoundRectangle CornerRadius="0,0,43,43" />
    </Border.StrokeShape>
</Border>
<!--#endregion-->
```
{: file='Views/HomePage.xaml'}

---

## Migration process

During the migration from Mitawi to .NET MAUI, I took steps to ensure that I have all the necessary tools and dependencies to work with this technology. Although it was somewhat relative, I was able to tailor the application to take advantage of unique features of .NET MAUI, such as the Border control. Also, I did extensive testing to minimize any possible errors after the migration. In short, the process was challenging but I managed to complete it successfully.

---

## Repository

The project is open source and you can see it by clicking on the following image. Don't hesitate to take a look!

[![7-x-github-repository](https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/main/assets/img/images/7_x_github_repository.png)](https://github.com/danielmonettelli/netmaui-mitawi-app-challenge){:target="_blank"}

---

## Resources

- <a href="https://askxammy.com/talk-net-conf-2022-recap/" target="_blank">[Talk] .NET Conf 2022 Recap - Speaker Leomaris Reyes</a>.
- <a href="https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/border?view=net-maui-7.0" target="_blank">Border - Official .NET MAUI documentation</a>.
- <a href="https://learn.microsoft.com/en-us/dotnet/communitytoolkit/maui/" target="_blank">.NET Multi-platform App UI (.NET MAUI) Community Toolkit documentation</a>.
- <a href="https://www.youtube.com/watch?v=EXmSmv5ifkk" target="_blank">Migrating & Upgrading Xamarin.Forms to .NET MAUI - Tutorial video made by James Montemagno</a>.
- <a href="https://www.youtube.com/watch?v=OP9g5dM0bgk" target="_blank">.NET Community Toolkit 8.0 - MVVM Goodness for .NET MAUI | .NET Conf: Focus on MAUI - Tutorial video made by Sergio Pedri</a>.

---

## Conclusions

When migrating Mitawi from Xamarin.Forms to .NET MAUI, I was able to see some of the benefits of this new cross-platform framework in four key areas: architectures, performance, useful controls, and the migration process.

- Regarding the architectures, .NET MAUI offers greater integration with the .NET ecosystem and a simpler and more flexible architecture.
- Although I have yet to see a significant performance improvement for Mitawi with .NET MAUI compared to Xamarin.Forms, I am optimistic that upgrading to .NET 7 may see a further improvement. .NET MAUI has promising features and I am willing to work hard to take full advantage of these tools and improve Mitawi's performance in the future.
- .NET MAUI has useful controls like the border control that can simplify user interface development and save time and effort.
- After completing the migration from Mitawi to .NET MAUI, I ran into some adaptability obstacles in the second interface of the application. I hope to fix them soon and continue to enjoy the benefits of .NET MAUI.

Please feel free to give me your opinion and with the help of my repository, draw your own conclusions. If you have any constructive questions or suggestions, I would very much like to read them. Thanks for your time.
