---
title: Creating a clean Style Library for Xamarin.Forms
author: Daniel Angel Monettelli L.
date: 2019-09-27 11:33:00 -0500
categories: [XamarinForms, UIKIT, XAML]
tags: [xamarinforms, uikit, xaml, ui, ux]
image:
  src: https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/creating-a-clean-style-library-for-xamarin-forms.png
  alt: Creating a clean Style Library for Xamarin.Forms
math: true
---

<p style='font-size: 20px;
  color: light-grey; margin: 0px 0px 20px; font-weight: bold; font-style: italic;'>A brief introduction of how this publication originated, seeing several Xamarin.Forms projects with different ways of using styles, I said to myself, why not make a Library that is universal for any type of application?, Then I started researching Microsoft documentation, blogs, etc., and thus this great project was born.</p>

Before explaining step by step the components that make up this Style Library, we will add two primary extensions focused on the order and readability of XAML.

---

## XAML Styler

<a href="https://marketplace.visualstudio.com/items?itemName=TeamXavalon.XAMLStyler" target="_blank">XAML Styler</a> is an extension compatible with Visual Studio 2017 and 2019, its purpose is to organize the XAML code.

Next, I show you my configuration for XAML Styler.

1.- We install the plugin, then we go to TOOLS / Options / XAML Styler and leave it just like the following images.

<a href="https://miro.medium.com/max/746/0*4fWxHFPKT1Ygn7Yh.png" data-fancybox><img src="https://miro.medium.com/max/746/0*4fWxHFPKT1Ygn7Yh.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>XAML Styler Part 1</p>

<a href="https://miro.medium.com/max/747/0*Gj5eOmcyIZfhF_AS.png" data-fancybox><img src="https://miro.medium.com/max/747/0*Gj5eOmcyIZfhF_AS.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>XAML Styler Part 2</p>

2.-… to then obtain this result in our XAML code.

<a href="https://miro.medium.com/max/1364/0*kdbsOY-nK6wVTAQ3.gif" data-fancybox><img src="https://miro.medium.com/max/1364/0*kdbsOY-nK6wVTAQ3.gif" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>XAML Styler in action</p>

---

## Color picker

<a href="https://marketplace.visualstudio.com/items?itemName=ShemeerNS.ColorPicker" target="_blank">Color picker</a> is another extension compatible with Visual Studio 2017 and 2019, its purpose is to highlight hexadecimal colors, RGB, etc., it is very useful to realize what type of color we use in an XAML style or control.

To have it included in our Visual Studio work area we will make the following configurations:

1.- Install the extension, then go to TOOLS, click on “Color Picker”, and attach it to the right side of Visual Studio.

<a href="https://miro.medium.com/max/1364/0*eH1mBUzPenAZV7rw.gif" data-fancybox><img src="https://miro.medium.com/max/1364/0*eH1mBUzPenAZV7rw.gif" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Color Picker in action</p>

Now that we have these two great extensions, we will begin to understand the Style Library.

---

## Styles Architecture in Xamarin.Forms

Before talking about style architecture, we have to see what interfaces have in common, we can see that there are images, icons, texts and the spaces that separate it.

<a href="https://miro.medium.com/max/1366/0*OyeYyjevSRFG_fD8.png" data-fancybox><img src="https://miro.medium.com/max/1366/0*OyeYyjevSRFG_fD8.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>“Pokedex” design by <a href="https://dribbble.com/DanielMots" target="_blank">Daniel Motta</a></p>

From there, this style architecture emerges, the following image shows the flow of the Style Library:

<a href="https://miro.medium.com/max/1400/0*3MYqNigTDY3PWI6c.png" data-fancybox><img src="https://miro.medium.com/max/1400/0*3MYqNigTDY3PWI6c.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Style Architecture by <a href="https://www.linkedin.com/in/danielmonetelli/" target="_blank">Daniel Monettelli</a></p>

Does it seem complicated to understand ?, do not worry, then I explain step by step said Workflow.

---

## 1.- Font Icons

The <a href="https://montemagno.com/using-font-icons-in-xamarin-forms-goodbye-images-hello-fonts/" target="_blank">Font Icons</a> are enriched icons SVG font, exactly as you read it , let alone implement your project type icons png, jpg, etc, now you will work with sources, and how do I get Font Icons ?, there are two ways to acquire :

1.- On websites that offer free and paid Font Icons, a popular one is <a href="https://materialdesignicons.com/" target="_blank">MaterialDesignIcons</a>.

<a href="https://miro.medium.com/max/1364/0*-lQ-AKwmuUYqAakU.gif" data-fancybox><img src="https://miro.medium.com/max/1364/0*-lQ-AKwmuUYqAakU.gif" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>materialdesignicons-webfont.ttf</p>

2.- The other way is to create your own icon source, ooohhhhhhh !!!!, we will use two tools,  <a href="https://www.adobe.com/la/products/xd.html" target="_blank"> AdobeXD</a> and <a href="https://icomoon.io/" target="_blank">IconMoon</a>:

a) In AdobeXD, batch select the icons and export it to SVG.

b) In IconMoon, convert them to a custom font.

c) With “ <a href="https://andreinitescu.github.io/IconFont2Code/" target="_blank">IconFontToCode</a>”, you will transform the source into code, which you will use in your Xamarin.Forms project.

<a href="https://miro.medium.com/max/1364/0*GNL7BUaaqiwGtcvJ.gif" data-fancybox><img src="https://miro.medium.com/max/1364/0*GNL7BUaaqiwGtcvJ.gif" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>“<a href="https://www.adobe.com/la/products/xd.html" target="_blank">AdobeXD</a>” and “<a href="https://icomoon.io/" target="_blank">IconMoon</a>” in action</p>

… then we copy the two sources to the Android and iOS projects.

<a href="https://miro.medium.com/max/1364/0*rIT0bsq3KdE-U4u8.gif" data-fancybox><img src="https://miro.medium.com/max/1364/0*rIT0bsq3KdE-U4u8.gif" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Font Icons on Android and iOS</p>

In the .NET Standard project, create a folder called “Styles”, and two classes called “IconFont.cs” (a nexa materialdesignicons-webfont.ttf ) and “CustomIconFont.cs” ( appendix CustomIconFont.ttf ), then copy the code generated by ”<a href="https://andreinitescu.github.io/IconFont2Code/" target="_blank">IconFontToCode</a>”…

<a href="https://miro.medium.com/max/1366/0*ahJqjwoNjF8bYLfP.png" data-fancybox><img src="https://miro.medium.com/max/1366/0*ahJqjwoNjF8bYLfP.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Static Classes of Font Icons</p>

---

## 2.- Resource Dictionary in XAML

---

### 2.1.- Texts.xaml

This ResourceDictionary establishes the sources of the application through OnPlatform, and with their respective variants called Bold, ItalicBold, italic, etc.

First we add the TTF or OTF source, <a href="https://xamarinhelp.com/custom-fonts-xamarin-forms/" target="_blank">Adam Pedley’s post</a> clearly explains how to do it.

---
> ***EYE:The x: key must start with the variant followed by the name of the font family, this helps to differentiate from other sources, Example: BoldFont_ProductSans ”.***

---

<a href="https://miro.medium.com/max/714/0*OUPDtt1mkGu8hlxp.png" data-fancybox><img src="https://miro.medium.com/max/714/0*OUPDtt1mkGu8hlxp.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Fonts using OnPlatform</p>

Font size is an important issue, and thanks to <a href="https://material.io/design/typography/the-type-system.html#type-scale" target="_blank">Material Design</a> we can categorize them as shown in the left image.

---
> ***EYE: The x: key begins with TxtSize followed by the abbreviation of the “Scale Category” and the “Size” of this, example “TxtSizeH2_60” (see the full Image).***

---

<a href="https://miro.medium.com/max/1345/0*TCeRktvlEMDz-dED.png" data-fancybox><img src="https://miro.medium.com/max/1345/0*TCeRktvlEMDz-dED.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Scale Category by Material Design</p>

As for the “TargetType” of the styles, we will use controls that have text, example: Button, Label, etc.

The abbreviation is easy to understand, and thanks to the XAML intellisense we will create styles in record time, in the following image you can distinguish the parts that integrate a text style.

---
> ***CASE: When we have two styles with similar FontSize but with different TextColor or FontFamily, the abbreviation ends in a number that indicates the priority, this case can be seen in the image.***

---

<a href="https://miro.medium.com/max/1275/0*444xDawNvY0QN7nz.png" data-fancybox><img src="https://miro.medium.com/max/1275/0*444xDawNvY0QN7nz.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Text Style structure</p>

---

### 2.2.- Icons.xaml

This ResourceDictionary establishes the IconFonts through OnPlatform, its structure can be seen in the following image.

<a href="https://miro.medium.com/max/1400/0*-eopUjp788f8Qz1Q.png" data-fancybox><img src="https://miro.medium.com/max/1400/0*-eopUjp788f8Qz1Q.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Icon fonts by OnPlatform</p>

To use the IconFonts, the labeling “FontImageSource” must be created, and since we are using Shell we must separate the resources from Tabs, Flyout and Interfaces ( views that will use these resources ).

<a href="https://miro.medium.com/max/1400/0*hH1VhCt-ioejIvcf.png" data-fancybox><img src="https://miro.medium.com/max/1400/0*hH1VhCt-ioejIvcf.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>FontImageSource in Tabs, Flyout and Interfaces</p>

---

### 2.3.- Spaces.xaml

This ResourceDictionary implements Thickness, and thanks to OnPlatform we establish the amplitude of the Layouts, following the parameters of Material Design.

We regularly use GridLayout, StackLayout and Frame, therefore, the styles will be exclusive to them.

---
> ***EYE: The layouts and controls mentioned have default spaces, for which, assign a group of basic styles and whose properties are of value 0 (See the image “Spaces BASE”).***

---

<a href="https://miro.medium.com/max/1400/0*lmSWsbMqkmPHR1iw.png" data-fancybox><img src="https://miro.medium.com/max/1400/0*lmSWsbMqkmPHR1iw.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Structure in Spaces.xaml</p>

---

## 3.- Themes

This ResourceDictionary implements “Color”, a group of colors that will qualify the interfaces of Xamarin.Forms.

---
> ***EYE: The colors of the themes I classify as follows:***<br>
> ***Color Range: It is the range of colors that the interfaces will have, the range is by level of prominence.***<br>
> ***Backgroundcolors: They are the background colors of an interface.***<br>
> ***Entry Colors: Typical colors for the Entry control.***<br>
> ***Border Colors: Border colors for controls such as Button, frame etc.***<br>
> ***Remark Colors: Colors for the Button type Label control.***<br>
> ***Surface Colors: Surface colors for Frames.***<br>
> ***Shell Colors: Colors for Tabs and Flyout.***

---

<a href="https://miro.medium.com/max/1137/0*V61Z2srgr6a_MJbY.png" data-fancybox><img src="https://miro.medium.com/max/1137/0*V61Z2srgr6a_MJbY.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>White and Dark Theme</p>

The help of Zeplin is very important to organize resources to the themes, only the way you use it depends, in the following gif you can see how I import colors from Zeplin to Visual Studio.

<a href="https://miro.medium.com/max/1364/0*fBJr_-ODISGuIDI_.gif" data-fancybox><img src="https://miro.medium.com/max/1364/0*fBJr_-ODISGuIDI_.gif" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Zeplin in action</p>

---

## 4.- General.xaml

This ResourceDictionary merges Texts.xaml, Icons.xaml and Spaces.xaml through MergedDictionaries, thanks to <a href="https://xamarinhelp.com/merged-dictionaries-xamarin-forms/" target="_blank">Adam Pedley</a>, it is possible to separate several XAML files, and create this great style architecture.

<a href="https://miro.medium.com/max/1170/0*ObjQGOrMDS08aZFB.png" data-fancybox><img src="https://miro.medium.com/max/1170/0*ObjQGOrMDS08aZFB.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Use of MergedDictionaries in General.xaml</p>

---

## 5.- App.xaml

The XAML App class, is the nexus of the architecture of styles and the Views of Xamarin.Forms, therefore, to link them, it is necessary to add a dictionary of resources, in this case, the source is WhiteTheme.xaml.

<a href="https://miro.medium.com/max/1077/0*YS5-ZJoNrJtAl_YS.png" data-fancybox><img src="https://miro.medium.com/max/1077/0*YS5-ZJoNrJtAl_YS.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Designated theme in App.xaml</p>

---

## 6.- AppShelll.xaml

AppShell seeks to reduce the complexity of creating mobile applications by providing fundamental application architecture features. As a complete visual hierarchy, common browsing experience, URI-based routing and integrated search management ***( David Ortinau, Principal Program Manager of Microsoft )***.

<a href="https://miro.medium.com/max/1400/0*PAvKvDaxoZeLKAu2.png" data-fancybox><img src="https://miro.medium.com/max/1400/0*PAvKvDaxoZeLKAu2.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Shell architecture</p>

In the following image we can see the structure of Shell in broad strokes.

<a href="https://miro.medium.com/max/1400/0*XTvBPV-mUaF3W8Fq.png" data-fancybox><img src="https://miro.medium.com/max/1400/0*XTvBPV-mUaF3W8Fq.png" /></a>

---

## 7.- Views

They are XAML files whose base class is a ContentPage, in it we can add layouts, controls, etc.

Binding also plays an important role, the following image shows the MainService.cs class, whose “Image_Category” property, is a font icon, and with “ImageColor_Category”, allows the color to be different in each instance, in XAML we add a Label and we include this logic.

<a href="https://miro.medium.com/max/1256/0*UXOHw-1MrRR59IGg.png" data-fancybox><img src="https://miro.medium.com/max/1256/0*UXOHw-1MrRR59IGg.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Logic of a list of icons</p>

… With DynamicResource it will make possible the change of Themes.

<a href="https://miro.medium.com/max/1109/0*4lUagof9I9LFwlv5.png" data-fancybox><img src="https://miro.medium.com/max/1109/0*4lUagof9I9LFwlv5.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Using DynamicResource</p>

---

## 8.- Final result

The application speaks for itself, remember that the only way to do a great job is to love what you do … ***( Steve Jobs )***

GitHub: https://github.com/danielmonettelli/XF_FoodApp

<a href="https://miro.medium.com/max/1366/0*LwttuqqoZN9qun2s.gif" data-fancybox><img src="https://miro.medium.com/max/1366/0*LwttuqqoZN9qun2s.gif" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Xamarin.Forms application made with the Style Library</p>

---

## Conclusions

As one learns, one realizes that order is very important in every way, and in programming with greater reason, that is why I take the time to create such a publication, this Xamarin Styles Architecture.Forms will serve to To ignore common properties that we use, it is feasible for Shell, easy implementation of colors to Themes thanks to Zeplin, use of Font Icons to improve the performance of the application, clean management of resources in each interface of the application, etc.

I hope it helps, any questions you have regarding the Architecture of Styles write to me and I will gladly answer all your questions.
