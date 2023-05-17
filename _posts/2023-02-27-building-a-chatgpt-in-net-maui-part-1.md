---
title: Building a ChatGPT in .NET MAUI Part 1
author: danielmonettelli
date: 2023-02-27 10:35:00 -0500
categories: [.NET MAUI, Maui Challenges]
tags: [netmaui, openai, httpclient]
image:
  path: 8_1_cover_publication.png
  width: 1200
  height: 630
  alt: Building a ChatGPT in .NET MAUI Part 1
---

<p style='font-size: 20px;
  color: light-grey; margin: 0px 0px 20px; font-weight: bold; font-style: italic;'>In this first part of my post, I will focus on how to use the OpenAI APIs through HTTP POST requests, both to get text responses (completions) and to generate images with OpenAI technology.</p>

> **INFO:** It is important to me that you have full confidence in the authenticity of my posts. Therefore, I want to inform you that this publication had the help of GPT-3. However, I always use my criteria to make sure the post is clear and easy to understand. In case I use this tool or any other again in the future, I will let you know in advance to ensure transparency at all times.
{: .prompt-info }
> **WARNING:** This post emphasizes the importance of using the application ethically and responsibly, which has been developed on the .NET MAUI platform and is based on OpenAI technology. While I do not consider myself a moral authority, I do recognize that I have made mistakes in the past and that I will continue to learn and evolve as a human being in the future. This same philosophy applies to the technological field, where both users and developers must be aware of the possible ethical and social implications of their actions. It is crucial to consider the impact of technology on society and work together to ensure its appropriate and responsible use. For this, it is necessary to adopt ethical and responsible standards, such as transparency, equity and responsibility. Transparency implies adequate and clear disclosure of the processes and results of the use of technology. Equity, for its part, requires that applications be accessible and fair to all people, regardless of their origin, gender, race or beliefs. And responsibility implies assuming the consequences of our actions and decisions, as well as the social responsibility of guaranteeing that technology does not cause harm to society. In summary, the ethical and responsible use of technology is essential to move towards a more just and equitable society. We need both users and developers to embrace ethical and responsible standards, and work together to ensure that technology is used for the common good.
{: .prompt-warning }

I want to emphasize that all the information presented in this publication is due to the valuable talk given by <a href="https://twitter.com/darkicebeam" target="_blank">Luis Beltran, PhD</a>, who gave us taught how to build a ChatGPT in .NET MAUI with the OpenAI APIs. I appreciate his contribution and hope this post can help other developers implement this technology in their own .NET applications.

---

## Essential parameters for business logic with OpenAI APIs

Before making HTTP POST requests, it is essential to establish an appropriate business logic. It is not necessary to use all the parameters provided by the OpenAI APIs, but rather those that are relevant to the logic of the application. Next I will show you some images that illustrate how to apply this idea in the generation of text _(completions)_ and images _(image generation)_.

![8-1-selection-of-parameters-in-completions](8_1_selection_of_parameters_in_completions.png)
_Selection of parameters in completions_

![8-1-selection-of-parameters-in-image-generation](8_1_selection_of_parameters_in_image_generation.png)
_Selection of parameters in image generation_

---

## HTTP POST Request and Response in OpenAI API - Schema

The following images detail the process of generating text _(completions)_ and images _(image generation)_ through the OpenAI APIs.

> **TIP:** For a better understanding, read each part and interact with the images.
{: .prompt-tip }

1. To start the process, the user must make a query that triggers an HTTP POST request. It is important to note that such a request must include an authorization header and specify the content type, as well as serialize an object of the `CompletionRequest.cs`_(text mode)_ or `GenerationRequest.cs`_(image mode)_ class. With the necessary parameters in a JSON format. Once the request has been prepared, it will be sent to the OpenAI API for processing.

2. In case the API response is successful, a response body will be returned in the `choices`_(text mode)_ or `data`_(image mode)_ field. This response body is deserialized into an object of the `CompletionResponse.cs`_(text mode)_ or `GenerationResponse.cs`_(image mode)_ class, thus allowing the user to receive the response in the application.

![8-1-openai-api-request-and-response-flow-with-parameters-in-mode-write](8_1_openai_api_request_and_response_flow_with_parameters_in_mode_write.png)
_OpenAI API request and response flow with parameters in text mode_

![8-1-openai-api-request-and-response-flow-with-parameters-in-mode-image](8_1_openai_api_request_and_response_flow_with_parameters_in_mode_image.png)
_OpenAI API request and response flow with parameters in image mode_

---

## HTTP POST Request and Response in OpenAI API - Service Layer

Now I will show you in a practical way how the HTTP POST request and response flows work with the OpenAI APIs to generate text and images in the service layer of the application. Join me as we explore the code needed to accomplish these requests:

> **TIP:** For clearer understanding, I suggest you read a part and then check the code. Be sure to pause each process.
{: .prompt-tip }

### Constructor

In the constructor of the OpenAIService class, a connection to the OpenAI API is established by creating an `HttpClient` object, which will be used to send HTTP requests to the API.

1. The base address of the API is set in the `BaseAddress` property of the HttpClient object.
2. An authorization header is added to an HTTP request to the OpenAI API using the access token and the `"Bearer"` authorization scheme. This scheme is commonly used in API authorization to send the access token to the protected server, allowing to authenticate and authorize the request for access to the requested resource.
3. An `Accept` header is added indicating that the client expects to receive a response in JSON format.

```csharp
public class OpenAIService : IOpenAIService
{
    HttpClient client;

    public OpenAIService()
    {
        client = new HttpClient();
        // Part 1
        client.BaseAddress = new Uri(APIConstants.OpenAIUrl);

        // Part 2
        client.DefaultRequestHeaders.Authorization = new authorizationHeaderValue("Bearer", APIConstants.OpenAIToken);
        // Part 3
        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
    }
}
```
{: file='ChatGPT/Services/OpenAIService.cs(Constructor)'}

#### AskQuestion and CreateImage methods

These methods use the OpenAI APIs to generate text and images from a query string provided as a parameter.

1. First, create an object of class `CompletionRequest`_(for AskQuestion method)_ or `GenerationRequest`_(for CreateImage method)_ and set its `Prompt` property with the supplied query string as parameter.

2. The `JsonSerializer` class is then used to serialize the instance of `CompletionRequest`_(for the AskQuestion method)_ or `GenerationRequest`_(for the CreateImage method)_ to JSON format and is stored in the variable `body`.

3. Next, a new instance of the `StringContent` class is created, which is used to send data in JSON format via an HTTP request, where `body` is the text string containing the data in JSON format, `Encoding.UTF8` specifies the character encoding used and `"application/json"` specifies the type of content being sent.

4. The `PostAsync` method of the HttpClient class is called with the OpenAI API endpoint URL for outputting text or images and the `content` variable that contains the body of the POST request. This sends the HTTP POST request to the OpenAI API with the body in JSON format and returns a response.

5. If the response is successful, the content of the response is read and deserialized using the `ReadFromJsonAsync` method and stored in the `data` variable.

6. Next, access the `Choices`(for the AskQuestion method) or `Data`(for the CreateImage method) property of the `data` variable and use the FirstOrDefault() method to get the first `Text` object _(for the AskQuestion method)_ or `Url`_(for the CreateImage method)_ available. This object is returned as a result in each method.

7. If the response is not successful, the method returns a `default` value.

```csharp
public class OpenAIService : IOpenAIService
{
    HttpClient client;

    JsonSerializerOptions options = new() { PropertyNameCaseInsensitive = true };

    public async Task<string> AskQuestion(string query)
    {
        // Part 1
        var completion = new CompletionRequest()
        {
            Prompt = query
        };

        // Part 2 - Serialize parameters for the response
        var body = JsonSerializer.Serialize(completion);
        // Part 3
        var content = new StringContent(body, Encoding.UTF8, "application/json");

        // Part 4 - HTTP POST request with headers and parameters
        var response = await client.PostAsync(APIConstants.OpenAIEndpoint_Completions, content);

        if (response.IsSuccessStatusCode)
        {
            // Part 5 - Deserialize the response to a object of class
            var data = await response.Content.ReadFromJsonAsync<CompletionResponse>(options);
            // Part 6
            return data?.Choices?.FirstOrDefault().Text;
        }

        // Part 7
        return default;
    }
}
```
{: file='ChatGPT/Services/OpenAIService.cs(AskQuestion)'}

```csharp
public class OpenAIService : IOpenAIService
{
    HttpClient client;

    JsonSerializerOptions options = new() { PropertyNameCaseInsensitive = true };

    public async Task<string> CreateImage(string query)
    {
        // Part 1
        var generation = new GenerationRequest()
        {
            Prompt = query
        };

        // Part 2 - Serialize parameters for the response
        var body = JsonSerializer.Serialize(generation);
        // Part 3
        var content = new StringContent(body, Encoding.UTF8, "application/json");

        // Part 4 - HTTP POST request with headers and parameters
        var response = await client.PostAsync(APIConstants.OpenAIEndpoint_Generations, content);

        if (response.IsSuccessStatusCode)
        {
            // Part 5 - Deserialize the response to a object of class
            var data = await response.Content.ReadFromJsonAsync<GenerationResponse>(options);
            // Part 6
            return data.Data?.FirstOrDefault()?.Url;
        }

        // Part 7
        return default;
    }
}
```
{: file='ChatGPT/Services/OpenAIService.cs(CreateImage)'}

---

## Repository

The project is open source and you can see it by clicking on the following image. Don’t hesitate to take a look!

[![8-x-github-repository](https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/main/assets/img/images/8_x_github_repository.png)](https://github.com/danielmonettelli/dotnetmaui-chatgpt-oss){:target="_blank"}

---

## Resources

- <a href="https://www.youtube.com/watch?v=JE_SdgP-jJo" target="_blank">Chatting with ChatGPT in .NET MAUI - Tutorial video made by Luis Beltran, PhD</a>.
- <a href="https://platform.openai.com/docs/api-reference/completions" target="_blank">Completions - OpenAI official documentation</a>.
- <a href="https://platform.openai.com/docs/api-reference/images" target="_blank">Image generation - OpenAI official documentation</a>.

---

## Publication in Spanish

- <a href="https://blogdedanielmonettelli.github.io/posts/construyendo-un-chatgpt-en-net-maui-parte-1/" target="_blank">Construyendo un ChatGPT en .NET MAUI Parte 1</a>.

---

## Conclusions

One of the main ways to interact with OpenAI APIs is through HTTP requests, which allows rich content to be generated from input data. To implement these requests, it is essential to understand the principles of serialization and deserialization to take full advantage of the capabilities of any type of APIs. By adopting appropriate practices and using effective tools, successful and efficient solutions can be generated.

Please feel free to give me your opinion and with the help of my repository, draw your own conclusions. If you have any constructive questions or suggestions, I would very much like to read them. Thanks for your time.
