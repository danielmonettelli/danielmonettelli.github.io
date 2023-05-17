---
title: Xamarin.Forms UI/UX Challenges - Micuna Food - Part3
author: danielmonettelli
date: 2021-05-11 15:00:00 -0500
categories: [Xamarin.Forms, Xamarin.Forms Challenges]
tags: [xamarinforms, monettelliuikit, xaml, adobexd, ui, ux, imagefromxamarinui, xamarincommunitytoolkit, xamarinessentials, visualstatemanager]
image:
  path: 5_3_cover_publication.png
  width: 1200
  height: 630
  alt: Xamarin.Forms UI/UX Challenges - Micuna Food - Part3
---

<p style='font-size: 20px;
  color: light-grey; margin: 0px 0px 20px; font-weight: bold; font-style: italic;'>In this third part of the Challenge I will go beyond design, I will add functionality to the share icon making use of two of the most popular Xamarin.Forms libraries, which are Xamarin Community Toolkit and Xamarin.Essentials.</p>

This publication is part of the <a href="https://www.luisbeltran.mx/2020/11/16/segundo-calendario-de-adviento-de-xamarin-en-espanol/" target="_blank">Second Xamarin Advent Calendar in Spanish</a> organized by <a href="https://twitter.com/darkicebeam" target="_blank">Dr. Luis Beltrán</a>, and of the third <a href="https://aspnetcoremaster.com/calendario-adviento-csharp-2020.html" target="_blank">C# Advent Calendar in Spanish</a> organized by <a href="https://twitter.com/jbenjamincc" target="_blank">Ing. Benjamín Camacho</a>, thank you very much for being part of these great initiatives.

---

## Screenshot and Toast Multiplatform

![5-3-screenshot-and-toast-multiplatform](5_3_screenshot_and_toast_multiplatform.png)
_Screenshot and Toast Multiplatform Design_

Previously, the FoodDetailPage had the share button, that’s what the designer did, but if we think as users, the first thing that comes to mind would be ¿What am I going to share?, in the wake of that dilemma, **it will start with a screenshot button to remove false perceptions**.

Digging deeper into the code, in the Icons.xaml file located in the Styles folder, we will customize the screenshot icon with its respective properties, including its size and color.

```xml
<!--#region FontImageSource INTERFACES-->
<FontImageSource
    x:Key="icon_screenshot_solid"
    FontFamily="MonettelliFontIcons"
    Glyph="{x:Static FontAwesome:MonettelliFontIcons.icon_screenshot_solid}"
    Size="26"
    Color="{DynamicResource colPrim}" />
<!--#endregion-->
```
{: file='Styles/Icons.xaml'}

**To change one icon to another in the same button, I use Visual State Manager**, these icons are linked in the Source property of the TargetType “Image”, it is worth mentioning, that it is necessary to add an x:Key to use it in a control or layout similar to the TargetType.

```xml
<!--#region Visual States Manager-->
<Style
    x:Key="vsm_fontIconChanged"
    TargetType="Image">
    <Setter Property="VisualStateManager.VisualStateGroups">
        <VisualStateGroupList>
            <VisualStateGroup x:Name="CommonStates">

                <VisualState x:Name="Normal">
                    <VisualState.Setters>
                        <Setter Property="Source" Value="{StaticResource icon_screenshot_solid}" />
                    </VisualState.Setters>
                </VisualState>

                <VisualState x:Name="Selected">
                    <VisualState.Setters>
                        <Setter Property="Source" Value="{StaticResource icon_share_solid}" />
                    </VisualState.Setters>
                </VisualState>

            </VisualStateGroup>
        </VisualStateGroupList>
    </Setter>
</Style>
<!--#endregion-->
```
{: file='Views/Home/Styles.xaml'}

In FoodDetailPage.xaml, **I implement a non-visible CachedImage control, responsible for storing the image capture**, and with x:Name “imageForScreenshot”, we will work on the code behind said xaml file.

```xml
<!--  Image for Screenshot  -->
<ffimageloading:CachedImage
    x:Name="imageForScreenshot"
    Grid.Row="3"
    Grid.Column="2"
    Grid.ColumnSpan="5"
    IsVisible="false" />
```
{: file='Views/Home/FoodDetailPage.xaml'}

### In Mode Xamarin.Essentials.Screenshot

Using GestureRecognizers, I create an event called ScreenshotAndShareFile_Tapped, and through the if statement, I indicate, that if the Source property of imageForScreenshot is null, execute the following process:

The **screenshot variable** is responsible for capturing the screen based on the dimensions of the physical device or emulator (Height and Width).

The **stream variable** will obtain the data flow of the screenshot through the OpenReadAsync() method.

Finally, the **FromStream() method** is the linchpin for create an image from the specified stream variable, all of this is stored in the Source property of imageForScreenshot.

```csharp
private async void ScreenshotAndShareFile_Tapped(object sender, EventArgs e)
{
    if (imageForScreenshot.Source == null)
    {
        // Mode Xamarin.Essentials.Screenshot
        var screenshot = await Screenshot.CaptureAsync();
        var stream = await screenshot.OpenReadAsync();
        imageForScreenshot.Source = ImageSource.FromStream(() => stream);

        // Visual State Manager here...

        // Toast Multiplatform here...
    }
    else
    {
        // File Share here...
    }
}
```
{: file='Views/Home/FoodDetailPage.xaml.cs'}

### In Mode ImageFromXamarinUI

**This library is so versatile**, because we can **create specific screenshots at the interface level**, and it can be applied to different use cases. Very grateful to Dima Dimov for creating this amazing nuget package.

The following code fragment we can see that the x:Name called **layoutMainParent is the parent GridLayout**, therefore, **my screenshot will be everything that encapsulates said layout**.

```xml
<ContentPage.Content>

    <ScrollView>

        <Grid x:Name="layoutMainParent">

        <!--  Rest of the code here...  -->

        </Grid>

    </ScrollView>

</ContentPage.Content>
```
{: file='Views/Home/FoodDetailPage.xaml'}

Continuing in the ScreenshotAndShareFile_Tapped event, the **stream variable** is in charge of **adding the data flow**, **but now it will depend on the dimensions of the layoutMainParent**, the parameter of the CaptureImageAsync() method assumes the background color, finally, the image is created with the same logic than Xamarin.Essentials.Screenshot.

```csharp
private async void ScreenshotAndShareFile_Tapped(object sender, EventArgs e)
{
    if (imageForScreenshot.Source == null)
    {
        // Mode ImageFromXamarinUI
        var stream = await layoutMainParent.CaptureImageAsync(Color.White);
        imageForScreenshot.Source = ImageSource.FromStream(() => stream);

        // Visual State Manager here...

        // Toast Multiplatform here...
    }
    else
    {
        // File Share here...
    }
}
```
{: file='Views/Home/FoodDetailPage.xaml.cs'}

**When the button is touched, it changes to the “Selected” state (share icon)**, this process is done by the GoToState() method of VisualStateManager.

Now I enter the Xamarin Community Toolkit grounds, and I am excited that they add **Toast Multiplatform**, with a few lines of code we can indicate the message and the duration of the notification, all thanks to the DisplayToastAsync() method.

```xml
<StackLayout
    Grid.Row="1"
    Grid.Column="6"
    Grid.ColumnSpan="2"
    xct:TouchEffect.NativeAnimation="True"
    xct:TouchEffect.AnimationDuration="300">
    <StackLayout.GestureRecognizers>
        <TapGestureRecognizer Tapped="ScreenshotAndShareFile_Tapped" />
    </StackLayout.GestureRecognizers>

    <Image
        x:Name="stateFontIcon"
        Style="{StaticResource vsm_fontIconChanged}"
        HorizontalOptions="Center"
        VerticalOptions="CenterAndExpand" />
</StackLayout>
```
{: file='Views/Home/FoodDetailPage.xaml'}

```csharp
private async void ScreenshotAndShareFile_Tapped(object sender, EventArgs e)
{
    if (imageForScreenshot.Source == null)
    {
        // Mode ImageFromXamarinUI here...

        // Mode Xamarin.Essentials.Screenshot here...

        VisualStateManager.GoToState(stateFontIcon, "Selected");

        await this.DisplayToastAsync(message: "Successful screenshot", durationMilliseconds: 2000);
    }
    else
    {
        // File Share here...
    }
}
```
{: file='Views/Home/FoodDetailPage.xaml.cs'}

---

## Share File

![5-3-share-file](5_3_share_file.png)
_Share File Design_

Xamarin.Essentials has another great API called **Share**, which allows you to send different types of files to the installed applications of the physical device or emulator.

Now that we have our image capture and the share button, we proceed with the file submission flow:

The **fileName** is in charge of naming the image.

The **fullPath** combines fileName with the CacheDirectory property, that gets the location where temporary data can be stored, and also helps to send the file faster.

The **byteArray variable** stores the weight of the image in bytes, it should be noted, that CachedImage has two methods to obtain png and jpg images (in this case I use the GetImageAsPngAsync() method), thank you very much Daniel Luberda for creating this fantastic library.

To encapsulate byteArray in fullPath it is done with the **WriteAllBytes() method**, with this, we already have a fully packed file.

In the **RequestAsync() method** I generate a new instance of ShareFileRequest(), there we add the title and corresponding file, it should be noted that “image/png” is only to highlight that it is a png file, it is not necessary to add it.

And WHOLAA!!!, we can now send our image, all thanks to Xamarin.Essentials.Share.

```csharp
private async void ScreenshotAndShareFile_Tapped(object sender, EventArgs e)
{
    if (imageForScreenshot.Source == null)
    {
        // Mode ImageFromXamarinUI here...

        // Mode Xamarin.Essentials.Screenshot here...

        // Visual State Manager here...

        // Toast Multiplatform here...
    }
    else
    {
        string fileName = "MicunaFood - " + foodDetailViewModel.SelectedFood.Name_Food + ".png";
        string fullPath = Path.Combine(FileSystem.CacheDirectory, fileName);

        var byteArray = await imageForScreenshot.GetImageAsPngAsync();
        File.WriteAllBytes(fullPath, byteArray);

        await Share.RequestAsync(new ShareFileRequest
        {
            Title = "Data Transfer " + foodDetailViewModel.SelectedFood.Name_Food,
            File = new ShareFile(fullPath, "image/png")
        });
    }
}
```
{: file='Views/Home/FoodDetailPage.xaml.cs'}

---

## Send and Save File

![5-3-send-and-save-file](5_3_send_and_save_file.png)
_Send and Save File Design_

In the image above, you can see that the Android device sends the file through Microsoft Outlook application, while on the iPhone, it saves the screenshot, both ways are feasible.

The idea is for the user to share and save the different foods that MicunaFood offers for future purchases.

---

## Other Features

### Repository class

To improve the management of the MicunaFood data to the different ViewModels, they were migrated to the static class called repository.

### Performance Tip in FFImageLoading

The video by Daniel Luberda shows the importance of adding the **CacheType property** to improve images performance.

  <!-- 16:9 aspect ratio -->
  <div class="embed-responsive embed-responsive-16by9">
   <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Dca3ksv8esU?rel=0" frameborder="0" allowfullscreen></iframe>
  </div>
  <p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: 12px 0px 20px; font-weight: bold;'>Using the CacheType property in FFImageLoading</p>

---

## The Result

<video width="99%" controls="" autoplay="" name="media"><source src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/main/assets/img/images/5_3_result.mp4" type="video/mp4"></video>

---

## Get the Code

All the code is open source, you can see it by clicking the following image:

[![5-x-github-repository](https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/main/assets/img/images/5_x_github_repository.png)](https://github.com/danielmonettelli/XF_MicunaFood/tree/XF_MicunaFood_Part3){:target="_blank"}

---

## Resources

- <a href="https://monettelliuikit.github.io/" target="_blank">MonettelliUIKIT</a>.
- <a href="https://material.io/" target="_blank">Material Design</a>.
- <a href="https://docs.microsoft.com/en-us/xamarin/community-toolkit/" target="_blank">Xamarin Community Toolkit</a>.
- <a href="https://github.com/dimonovdd/ImageFromXamarinUI" target="_blank">ImageFromXamarinUI - Dima Dimov</a>.
- <a href="https://www.youtube.com/watch?v=O9D3NSYh1t0" target="_blank">Take Partial Screenshots of Your Xamarin.Forms App - Gerald Versluis Youtube Channel</a>.
- <a href="https://docs.microsoft.com/en-us/xamarin/essentials/screenshot?context=xamarin/xamarin-forms" target="_blank">Xamarin.Essentials: Screenshot</a>.
- <a href="https://docs.microsoft.com/en-us/xamarin/essentials/share?context=xamarin%2Fxamarin-forms&tabs=android" target="_blank">Xamarin.Essentials: Share</a>.
- <a href="https://docs.microsoft.com/en-us/xamarin/xamarin-forms/user-interface/visual-state-manager" target="_blank">Xamarin.Forms Visual State Manager</a>.
- <a href="https://dribbble.com/" target="_blank">Dribbble</a>.
- <a href="https://unsplash.com/" target="_blank">Unsplash</a>.
- <a href="https://www.pexels.com/es-es/" target="_blank">Pexels</a>.

---

## Conclusions

- I love **Xamarin.Essentials.Screenshot and ImageFromXamarinUI**, different features, same goal.
- In a single line of code you can add **Toast Multiplatform**, my respects to Xamarin.Community.Toolkit.
- This post demonstrates that **Xamarin.Essentials.Share** doesn’t just send text (like the example in the documentation), but any type of file.
- State changes can also be done in a single control, and **Visual State Manager** helps me achieve it.

Remember that you can give feedback and with the help of my repository draw your own conclusions, if you have any questions or constructive criticism write to me below this publication, thank you very much.
