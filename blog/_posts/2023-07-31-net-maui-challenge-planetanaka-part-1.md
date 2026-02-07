---
title: .NET MAUI UI/UX Challenge - Planetanaka - Part 1
author: danielmonettelli
date: 2023-07-31 16:30:00 -0500
categories: [.NET MAUI, Maui Challenges]
tags: [netmaui, animations]
image:
  path: 9_1_cover_publication.png
  width: 1200
  height: 630
  alt: .NET MAUI UI/UX Challenge - Planetanaka - Part 1
---

<p style='font-size: 20px;
  color: light-grey; margin: 0px 0px 20px; font-weight: bold; font-style: italic;'>In this post, I'll focus on basic and intermediate animations that can be incorporated into .NET MAUI projects. </p>

> **INFO:** The authenticity of my publications is my most sincere commitment. I always start by putting my ideas into my own words and occasionally use GPT-3.5 to improve the content. In this way, I seek to ensure maximum clarity in my writings. If I use GPT-3.5 or another similar tool again in the future, I will share it openly to maintain transparency at all times.
{: .prompt-info }

This publication is my humble contribution of knowledge to enrich our beloved community. My deepest thanks to <a href="https://twitter.com/mattgoldman" target="_blank">Matt Goldman</a>, the organizer of the amazing .NET MAUI UI July event, for giving me this wonderful opportunity. to participate and share. Together, we can build an exciting future in the world of technology and leave a lasting mark on collective progress.

---

## Animations in Planetakuna

The Planetanaka app has a wide variety of animations, ranging from basic to intermediate. It is important to note that creating animations in .NET MAUI is a simple and versatile process, since we can implement them both in the code-behind of the view layer and within the viewmodels, and the latter is precisely the way in which I worked said application.

{% include embed/youtube.html id='L6wGSI-DanM' %}

---

## Animations in WelcomePage

![9-1-parts-of-welcomepage](9_1_parts_of_welcomepage.png)
_Parts of WelcomePage_

The image above shows the different parts that make up the WelcomePage. On this page, the animation is centered around the image control y whose x:Name is planetEarth. Next, I will focus on explaining the behavior of this animation in detail.

In order for the image control to be able to interact with the animations that will be embedded in the viewmodel, it is essential to create a bridge and make sure to match the properties in both the view and the viewmodel.

```csharp
public partial class WelcomePage : ContentPage
{
   private readonly WelcomeViewModel vm = new();

    public WelcomePage()
    {
        InitializeComponent();

        vm.PlanetEarth = planetEarth;
    }
}
```
{: file='Planetanaka/Views/WelcomePage.xaml.cs'}

The OnPlanetEarthChanged() partial method animates the PlanetEarth property when its value changes. The animation causes the image to rotate smoothly from 0 degrees to 180 degrees in the first 0.5 degrees using a cubic input acceleration function (CubicIn). Then, in the next 0.5, it rotates from 180 degrees to 360 degrees with a CubicOut acceleration function. This animation repeats infinitely in 8 second cycles, creating an attractive visual effect in the application.
The OnPlanetEarthChanged() partial method animates the PlanetEarth property when its value changes. The animation causes the image to rotate smoothly from 0 degrees to 180 degrees in the first 0.5 degrees using a cubic input acceleration function (CubicIn). Then, in the next 0.5, it rotates from 180 degrees to 360 degrees with a CubicOut acceleration function. This animation repeats infinitely in 8 second cycles, creating an attractive visual effect in the application.

```csharp
[ObservableProperty]
private Image planetEarth;

partial void OnPlanetEarthChanged(Image value)
{
    try
    {
        if (value is not null)
        {
            new Animation
            {
                { 0, 0.5, new Animation(v => PlanetEarth.Rotation = v, 0, 180, Easing.CubicIn) },
                { 0.5, 1, new Animation(v => PlanetEarth.Rotation = v, 180, 360, Easing.CubicOut) }
            }.Commit(PlanetEarth, "PlanetEarthAnimation", length: 8000, repeat: () => true);
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine
            ($"An error has occurred in OnPlanetEarthChanged(): " +
            $"{ex.Message}");
    }
}
```
{: file='Planetanaka/ViewModel/WelcomeViewModel.cs'}

Calling the StartExplorationAsync() command stops any animation on the 'PlanetEarth' image control and then navigates to the 'PlanetsLookoutPage' page asynchronously.

```csharp
[RelayCommand]
private async Task StartExplorationAsync()
{
    PlanetEarth.AbortAnimation("PlanetEarthAnimation");
    await Shell.Current.GoToAsync("PlanetsLookoutPage", true);
}
```
{: file='Planetanaka/ViewModel/WelcomeViewModel.cs'}

---

## Animations in PlanetsLookoutPage

![9-1-parts-of-planetslookoutpage](9_1_parts_of_planetslookoutpage.png)
_Parts of PlanetsLookoutPage_

The image above shows all the different parts that make up the PlanetsLookoutPage. When you select a planet, the animation is reflected in the image control, along with the planet's title and description on the back, creating a captivating visual effect.

As in the previous viewmodel, a bridge has been created for the respective properties that will be animated.

The OnSelectedPlanetChanging method is an event that is fired when the selection of a planet in the application changes. The goal is to animate the transition between the previously selected planet and the new planet.

The method is divided into three parts, depending on whether there is an old value (previously selected planet) or not. If there is an old value, two animations are started: "MixAnimationsBefore" and "MixAnimationsAfter". If there is no old value, a "MixAnimationsInitial" animation is started.

In the "MixAnimationsBefore" animation, different values are used to perform transformations on three visual elements: an image (ImgBigPlanet) of the planet, and two labels (LblNamePlanet and LblDescriptionPlanet). The image rotates 720 degrees minus a v value multiplied by 720, while the scale decreases its size from 1 to 1 minus the v value. Labels also decrease their opacity from 1 to 1 minus the v value. This animation uses a "CubicIn" effect for gradual acceleration at start.

When "MixAnimationsBefore" finishes, the planet image is updated with a new image using a provided URL, and the label texts are also updated with information about the newly selected planet.

Then the second animation "MixAnimationsAfter" starts. This animation is similar to "MixAnimationsBefore", but uses a "CubicOut" effect for a gradual slowdown at the end of the animation.

In case there is no old value, "MixAnimationsInitial" is executed. This animation is similar to "MixAnimationsBefore", but is used to display the first planet selected, without requiring changes to the planet's rotation and scale.

```csharp
partial void OnSelectedPlanetChanging(Planet oldValue, Planet newValue)
{
    try
    {
        if (oldValue is not null)
        {
            new Animation
            {
                { 0, 0.5, new Animation(v =>
                  {
                      ImgBigPlanet.Rotation = 720 - v * 720;
                      ImgBigPlanet.Scale = 1 - v;
                      LblNamePlanet.Opacity = 1 - v;
                      LblDescriptionPlanet.Opacity = 1 - v;
                  }, 0, 1, Easing.CubicIn, finished: ()=>
                  {
                      ImgBigPlanet.Source = ImageSource.FromUri(new Uri($"https://raw.githubusercontent.com/danielmonettelli/MyResources/main/Planetakuna_Resources/{newValue.Image_Planet}@10x.png"));
                      LblNamePlanet.Text= newValue.Name_Planet;
                      LblDescriptionPlanet.Text = newValue.Description_Planet;
                  })
                }
            }.Commit(ImgBigPlanet, "MixAnimationsBefore", length: 2500);
            new Animation
            {
                { 0.5, 1, new Animation(v =>
                  {
                      ImgBigPlanet.Rotation = v * 720;
                      ImgBigPlanet.Scale = v;
                      LblNamePlanet.Opacity = v;
                      LblDescriptionPlanet.Opacity = v;
                  }, 0, 1, Easing.CubicOut)
                },
            }.Commit(ImgBigPlanet, "MixAnimationsAfter", length: 2500);
        }
        else
        {
            new Animation
            {
                { 0, 0.5, new Animation(v =>
                  {
                      ImgBigPlanet.Rotation = v * 720;
                      ImgBigPlanet.Scale = v;
                      LblNamePlanet.Opacity = v;
                      LblDescriptionPlanet.Opacity = v;
                  }, 0, 1, Easing.CubicOut, finished: ()=>
                  {
                      ImgBigPlanet.Source = ImageSource.FromUri(new Uri($"https://raw.githubusercontent.com/danielmonettelli/MyResources/main/Planetakuna_Resources/{newValue.Image_Planet}@10x.png"));
                      LblNamePlanet.Text= newValue.Name_Planet;
                      LblDescriptionPlanet.Text = newValue.Description_Planet;
                  })
                }
            }.Commit(ImgBigPlanet, "MixAnimationsInitial", length: 3000);
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine
            ($"An error has occurred in OnSelectedPlanetChanging(): " +
            $"{ex.Message}");
    }
}
```
{: file='Planetanaka/ViewModel/PlanetViewModel.cs'}

---

## Repository

The project is open source and you can see it by clicking on the following image. Don't hesitate to take a look!

[![8-x-github-repository](https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/main/assets/images/9_x_github_repository.png)](https://github.com/danielmonettelli/netmaui-planetanaka-app-challenge){:target="_blank"}

---

## Resources

- <a href="https://learn.microsoft.com/en-us/dotnet/maui/user-interface/animation/basic" target="_blank">Basic Animation - Official .NET MAUI Documentation</a>.
- <a href="https://learn.microsoft.com/en-us/dotnet/maui/user-interface/animation/easing" target="_blank">Easing Functions - Official .NET MAUI Documentation </a>.
- <a href="https://learn.microsoft.com/en-us/dotnet/maui/user-interface/animation/custom" target="_blank">Custom Animation - Official .NET MAUI Documentation</a>.
- <a href="https://github.com/mdc-maui/mdc-maui" target="_blank">MDC-MAUI - Material design components library</a>.
- <a href="https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/border?view=net-maui-7.0" target="_blank">Border - Official Documentation from .NET MAUI</a>.
- <a href="https://www.youtube.com/watch?v=oQluWTag-e4" target="_blank">MVVM is easier than ever before with Source Generators, .NET 7, & the MVVM Toolkit - . NET Conf 2022</a>.

---

## Publication in Spanish

- <a href="https://blogdedanielmonettelli.github.io/posts/net-maui-challenge-planetanaka-parte-1/" target="_blank">.NET MAUI UI/UX Challenge - Planetanaka - Parte 1</a>.

---

## Conclusions

Like subtle brushstrokes of digital art, animations occupy a prominent place in the universe of user interface (UI) and user experience (UX) design in apps. However, being lovers of aesthetics, we know that 'less is more' and that its use should not be deployed indiscriminately throughout the interface. The secret to captivating without overwhelming lies in the exquisite balance in the duration of each animation, allowing the user to revel in each interaction with refined harmony and patience.

Feel free to give me your opinion and with the help of my repository, draw your own conclusions. If you have any constructive questions or suggestions, I would very much like to read them. Thanks for your time.
