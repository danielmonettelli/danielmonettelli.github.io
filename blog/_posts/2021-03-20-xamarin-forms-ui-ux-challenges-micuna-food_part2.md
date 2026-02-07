---
title: Xamarin.Forms UI/UX Challenges - Micuna Food - Part2
author: danielmonettelli
date: 2021-03-20 21:50:00 -0500
categories: [Xamarin.Forms, Xamarin.Forms Challenges]
tags: [xamarinforms, monettelliuikit, xaml, adobexd, ui, ux, xamarincommunitytoolkit, materialdesign, pancakeview]
image:
  path: 5_2_cover_publication.png
  width: 1200
  height: 630
  alt: Xamarin.Forms UI/UX Challenges - Micuna Food - Part2
---

<p style='font-size: 20px;
  color: light-grey; margin: 0px 0px 20px; font-weight: bold; font-style: italic;'>In this second part of the Challenge, the protagonist is the nuget package "Xamarin Community Toolkit", an all-in-one that provides abstractions that we commonly use.</p>

This publication is part of the <a href="https://www.luisbeltran.mx/2020/11/16/segundo-calendario-de-adviento-de-xamarin-en-espanol/" target="_blank">Second Xamarin Advent Calendar in Spanish</a> organized by <a href="https://twitter.com/darkicebeam" target="_blank">Dr. Luis Beltrán</a>, and of the third <a href="https://aspnetcoremaster.com/calendario-adviento-csharp-2020.html" target="_blank">C# Advent Calendar in Spanish</a> organized by <a href="https://twitter.com/jbenjamincc" target="_blank">Ing. Benjamín Camacho</a>, thank you very much for being part of these great initiatives.

---

## Inspirational Design

Continuing with the design of <a href="https://dribbble.com/ghulaam-rasool" target="_blank">Ghulam Rasool</a>, the following detail interface has two upper icons, one to go back and one to share, followed by the delicious image of the food, with its respective title and description, finally, the price of the food is accompanied by a button, which allows adding to the shopping cart, **simple and clean at the same time**.

![5-2-design](5_2_design.png)
_Design created by Ghulam Rasool - Experienced Product Designer_

---

## Navigating from HomePage to FoodDetailPage

![5-2-navigating-from-homepage-to-fooddetailpage](5_2_navigating_from_homepage_to_fooddetailpage.png)
_Navigating from HomePage to FoodDetailPage Design_

The navigation flow from page to page applies UX, when the user clicks on an item he has to observe what he did exactly, for this, a waiting time is necessary and then continue with the next page.

The following example***(Code-Behind of HomePage)*** shows the **CollectionView_SelectedItem** event created from the **SelectionChanged** property of **CollectionView**, the **selectedItem** variable is made up of the event parameter, whose **CurrentSelection** property is responsible for finding the selected items, then an expression is added conditional***(if)*** arguing that if there is a selection of an item, proceed with a **Delay( ) of 350ms**, and then go to the **FoodDetailPage** page, the item details are seen through the conversion **"selectedItem as FoodsViewModel"**, finally, said selection is canceled.

```csharp
public partial class HomePage : ContentPage
{

    // ...

    private async void CollectionView_SelectedItem(object sender, SelectionChangedEventArgs e)
    {
        var selectedItem = e.CurrentSelection.FirstOrDefault();
        if (selectedItem != null)
        {
            await Task.Delay(350);
            await Navigation.PushAsync(new FoodDetailPage(selectedItem as FoodsViewModel));
        }
        collectionView_MicunaFood.SelectedItem = null;
    }
}
```

The **Code-Behind of FoodDetailPage** has a similar logic to the previous one, the **ReturnPreviousPage_Tapped"** event created from **GestureRecognizers**, is responsible for returning to the **HomePage**, this **triggers a 300ms animation*****(for the icon, see in the XAML)***, then complete the **50ms wait** to return to the initial page.

```csharp
public partial class FoodDetailPage : ContentPage
{

    // ...

    private async void ReturnPreviousPage_Tapped(object sender, EventArgs e)
    {
        await Task.Delay(350);
        await Navigation.PopAsync(true);
    }
}
```

**FoodDetailViewModel** is in charge of structuring the details of **FoodDetailPage**, we can see that **HomeViewModel( )** is initialized in the constructor, because the list is there, the **selectedItem** variable filters the Foods list, and through LINQ the **selectedFoodsViewModel** is paired with the model property, finally, the **FoodsViewModel( )** is initialized by adding the result of the **selectedItem**.

```csharp
public class FoodDetailViewModel : BaseViewModel
{
    private readonly HomeViewModel homeViewModel;
    public FoodsViewModel SelectedFood { get; set; }
    public FoodDetailViewModel(FoodsViewModel selectedFoodsViewModel)
    {
        homeViewModel = new HomeViewModel();
        var selectedItem = homeViewModel.Foods.Where(f => f.Name_Food.Equals(selectedFoodsViewModel.Name_Food)).FirstOrDefault();
        SelectedFood = new FoodsViewModel(selectedItem);
    }
}
```

---

## Proportions in the Interface

Going deeper into the issue of proportions, it is important to **divide the elements of an interface into colored regions**, both for the rows and for the columns, to later obtain a global view of both, this helps to locate the elements in the XAML.

![5-2-proportions-on-base-fooddetailpage](5_2_proportions_on_base_fooddetailpage.png)
_Proportions on Base FoodDetailPage_

***Proportions in FoodDetailPage.xaml***

```xml
<ScrollView>
    <Grid>
        <Grid.RowDefinitions>
            <!--  0  -->
            <RowDefinition Height="13" />
            <!--  1  -->
            <RowDefinition Height="48" />
            <!--  2  -->
            <RowDefinition Height="13" />
            <!--  3  -->
            <RowDefinition>
            <!-- Mix Structure  -->
            </RowDefinition>
            <!--  4  -->
            <RowDefinition Height="32" />
            <!--  5  -->
            <RowDefinition Height="Auto" />
            <!--  6  -->
            <RowDefinition Height="16" />
            <!--  7  -->
            <RowDefinition Height="Auto" />
            <!--  8  -->
            <RowDefinition>
            <!-- Mix Structure  -->
            </RowDefinition>
            <!--  9  -->
            <RowDefinition Height="16" />
            <!--  10  -->
            <RowDefinition Height="Auto" />
            <!--  11  -->
            <RowDefinition Height="8" />
            <!--  12  -->
            <RowDefinition Height="Auto" />
            <!--  13  -->
            <RowDefinition Height="10" />
            <!--  14  -->
            <RowDefinition Height="25" />
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <!--  0  -->
            <ColumnDefinition Width="0.01*" />
            <!--  1  -->
            <ColumnDefinition Width="0.04*" />
            <!--  2  -->
            <ColumnDefinition Width="32" />
            <!--  3  -->
            <ColumnDefinition Width="0.23*" />
            <!--  4  -->
            <ColumnDefinition Width="0.126*" />
            <!--  5  -->
            <ColumnDefinition Width="161" />
            <!--  6  -->
            <ColumnDefinition Width="32" />
            <!--  7  -->
            <ColumnDefinition Width="0.04*" />
            <!--  8  -->
            <ColumnDefinition Width="0.01*" />
        </Grid.ColumnDefinitions>

        <!--  Top Icons  -->
        <!--  Image  -->
        <!--  Title and Description  -->
        <!--  Description and Price Value  -->
        <!--  Add to Cart Button  -->
    </Grid>
</ScrollView>
```

---

## Top Icons

![5-2-part1-top-icons](5_2_part1_top_icons.png)
_Top Icons Design_

Complying with the <a href="https://material.io/develop/web/supporting/touch-target" target="_blank">Material Design</a> parameters, **the icons were standardized with a Touch Target Area of ​​48*48px**, all thanks to <a href="https://andrei-misiukevich.medium.com/touch-effect-xamarin-forms-xamarin-community-toolkit-91fb6691f99e" target="_blank">TouchEffect</a>, a super useful and important effect from Xamarin Community Toolkit.

```xml
<!--  Top Icons  -->
<StackLayout
    Grid.Row="1"
    Grid.Column="1"
    Grid.ColumnSpan="2"
    xct:TouchEffect.NativeAnimation="True"
    xct:TouchEffect.AnimationDuration="300">
    <StackLayout.GestureRecognizers>
        <TapGestureRecognizer Tapped="ReturnPreviousPage_Tapped" />
    </StackLayout.GestureRecognizers>
    <Image
        Source="{StaticResource icon_left_arrow_line}"
        HorizontalOptions="Center"
        VerticalOptions="CenterAndExpand" />
</StackLayout>

<StackLayout
    Grid.Row="1"
    Grid.Column="6"
    Grid.ColumnSpan="2"
    xct:TouchEffect.NativeAnimation="True"
    xct:TouchEffect.AnimationDuration="300">
    <Image
        Source="{StaticResource icon_share_solid}"
        HorizontalOptions="Center"
        VerticalOptions="CenterAndExpand" />
</StackLayout>
```

---

## Proportional Image

![5-2-part2-proportional-image](5_2_part2_proportional_image.png)
_Proportional Image Design_

As for images, <a href="https://askxammy.com/optimizing-handling-images-with-ffimageloading/" target="_blank">FFImageLoading</a> is my ally to optimize them.

```xml
<!--  Image  -->
<ffimageloading:CachedImage
    Grid.Row="3"
    Grid.Column="2"
    Grid.ColumnSpan="5"
    CacheDuration="30"
    DownsampleToViewSize="True"
    FadeAnimationForCachedImages="True"
    FadeAnimationEnabled="True"
    FadeAnimationDuration="100"
    Source="{Binding SelectedFood.Image_Food}" />
```

---

## Title and Description

![5-2-part3-title-and-description](5_2_part3_title_and_description.png)
_Title and Description Design_

Title and Description **located proportionally**.

```xml
<!--  Title and Description  -->
<Label
    Grid.Row="5"
    Grid.Column="2"
    Grid.ColumnSpan="5"
    Text="{Binding SelectedFood.Name_Food}"
    Style="{StaticResource TxtHeadLine5_1}" />
<Label
    Grid.Row="7"
    Grid.Column="2"
    Grid.ColumnSpan="5"
    MaxLines="100"
    Text="{Binding SelectedFood.Long_Description_Food}"
    Style="{StaticResource TxtBody1_1}" />
```

---

## Description and Price Value

![5-2-part4-description-and-price-value](5_2_part4_description_and_price_value.png)
_Description and Price Value Design_

Description and Price Value **located proportionally**.

```xml
<!--  Description and Price Value  -->
<Label
    Grid.Row="10"
    Grid.Column="2"
    Grid.ColumnSpan="2"
    Text="Total Price:"
    Style="{StaticResource TxtBody1_1}" />
<Label
    Grid.Row="12"
    Grid.Column="2"
    Grid.ColumnSpan="2"
    Text="{Binding SelectedFood.Price_Food, StringFormat='{0:C2}'}"
    Style="{StaticResource TxtBody1_2}" />
```

---

## Add to Cart Button

![5-2-part5-add-to-cart-button](5_2_part5_add_to_cart_button.png)
_"Add to Cart" Button Design_

The **Button** is made with **PancakeView**, that custom shape was obtained with the **"CornerRadius"** property in 4 parameters, and with <a href="https://andrei-misiukevich.medium.com/touch-effect-xamarin-forms-xamarin-community-toolkit-91fb6691f99e" target="_blank">TouchEffect</a> the essence that every Button should have was reinforced, the **"add icon"** was also encapsulated with **PancakeView**.

```xml
<!--  Add to Cart Button  -->
<yummy:PancakeView
    Grid.Row="9"
    Grid.RowSpan="5"
    Grid.Column="5"
    Grid.ColumnSpan="2"
    Padding="13,0"
    xct:TouchEffect.NativeAnimation="True"
    xct:TouchEffect.AnimationDuration="300"
    BackgroundColor="{DynamicResource colPrim}"
    CornerRadius="38,38,0,38">
    <StackLayout
        Orientation="Horizontal"
        VerticalOptions="CenterAndExpand"
        Spacing="7">
        <Label
            Text="Add to Cart"
            Style="{StaticResource TxtSubtitle1_3}"
            HorizontalOptions="EndAndExpand"
            VerticalOptions="Center" />
        <yummy:PancakeView
            BackgroundColor="{DynamicResource colQui}"
            HorizontalOptions="End"
            HeightRequest="48"
            WidthRequest="48"
            CornerRadius="24">
            <Image
                Source="{StaticResource icon_add_line}"
                VerticalOptions="CenterAndExpand" />
        </yummy:PancakeView>
    </StackLayout>
</yummy:PancakeView>
```

---

## Good UX Practices in Harmonic Interfaces

### Mix Structure

![5-2-good-ux-practices-in-harmonic-interfaces-mix-structure](5_2_good_ux_practices_in_harmonic_interfaces_mix_structure.png)
_Mix Structure Code_

This Structure is **the holy grail of Harmonic Interfaces**, we can manipulate specific aspects in **Tablets, Phones, Desktops, TV's, etc.**, and choose them on the different platforms that Xamarin.Forms supports***(UWP, Android, iOS, macOS, Samsung Tizen, etc.)***.

The following will name the parts that are not explicitly described in the **Mix Structure**:

- **Base.Property:** The ***Base*** can be a Layout, Control, RowDefinition or ColumnDefinition, and the ***Property*** is the property from which the Mix will be added. Example:

```xml
<RowDefinition>
    <RowDefinition.Height>
    <!--  Use of the "Mix" here  -->
    </RowDefinition.Height>
</RowDefinition>

<Image>
    <Image.HeightRequest>
    <!--  Use of the "Mix" here  -->
    </Image.HeightRequest>
</Image>
```

- **Property Argument:** It is the argument that the assigned property takes, in the following example the property argument is of type Double.
- **Property Value:** It is the value of the property, according to the given argument.

```xml
<Image>
    <Image.HeightRequest>
        <OnIdiom x:TypeArguments="x:Double">
            <OnIdiom.Phone>
                <OnPlatform x:TypeArguments="x:Double">
                    <On
                        Platform="iOS,Android"
                        Value="120" />
                </OnPlatform>
            </OnIdiom.Phone>

            <OnIdiom.Tablet>
                <OnPlatform x:TypeArguments="x:Double">
                    <On
                        Platform="iOS"
                        Value="540" />
                    <On
                        Platform="Android"
                        Value="470.5" />
                </OnPlatform>
            </OnIdiom.Tablet>
        </OnIdiom>
    </Image.HeightRequest>
</Image>
```

### Mix in Phones

![5-2-good-ux-practices-in-harmonic-interfaces-mix-phone](5_2_good_ux_practices_in_harmonic_interfaces_mix_phone.png)
_Mix in Phones in Action_

- **Without using Mix on Phones:** The image occupies almost the entire height of the device, is generated scrolled and a terrible global display of the user.
- ***With Mix on Phones:*** The image has a fixed height, optimal display for the user and therefore good UX.

### Mix in Tablets

![5-2-good-ux-practices-in-harmonic-interfaces-mix-tablet](5_2_good_ux_practices_in_harmonic_interfaces_mix_tablet.png)
_Mix in Tablets in Action_

- **Without using Mix on Tablets:** By having an image with a fixed altitude and a defined distance with the lower controls, it generates a large space, in this case, the visual point is centered on the image of the food, which is little appreciated.
- **With Mix on Tablets:** By generating proportions to the image and the distance with the lower controls, these adapt, eliminating said large space, the visual point of the image is good, and therefore there is a good UX.

---

## The Result

<video width="99%" controls="" autoplay="" name="media"><source src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/main/assets/img/images/5_2_result.mp4" type="video/mp4"></video>

---

## Get the Code

All the code is open source, you can see it by clicking the following image:

[![5-x-github-repository](https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/main/assets/images/5_x_github_repository.png)](https://github.com/danielmonettelli/XF_MicunaFood/tree/XF_MicunaFood_Part2){:target="_blank"}

---

## Resources

- <a href="https://monettelliuikit.github.io/" target="_blank">MonettelliUIKIT</a>.
- <a href="https://docs.microsoft.com/en-us/xamarin/community-toolkit/" target="_blank">Xamarin Community Toolkit</a>.
- <a href="https://material.io/" target="_blank">Material Design</a>.
- <a href="https://channel9.msdn.com/Shows/XamarinShow/XamarinForms-101-OnIdiom-Adjusting-UI-Based-on-Device-Type" target="_blank">OnIdiom (Adjusting UI Based on Device Type)</a>.
- <a href="https://channel9.msdn.com/Shows/XamarinShow/XamarinForms-101-OnPlatform-Adjusting-UI-Based-on-Operation-System" target="_blank">OnPlatform (Adjusting UI Based on Operating System)</a>.
- <a href="https://docs.microsoft.com/en-us/xamarin/xamarin-forms/platform/ios/page-safe-area-layout" target="_blank">Safe Area Layout Guide on iOS</a>.
- <a href="https://github.com/sthewissen/Xamarin.Forms.PancakeView#xamarinformspancakeview" target="_blank">Xamarin.Forms.PancakeView</a>.
- <a href="https://dribbble.com/" target="_blank">Dribbble</a>.
- <a href="https://unsplash.com/" target="_blank">Unsplash</a>.
- <a href="https://www.pexels.com/es-es/" target="_blank">Pexels</a>.

---

## Conclusions

- **Xamarin Community Toolkit** is our ally when it comes to creating **productive applications**, a **kit supported by community members under the guidance of the Xamarin team**, that makes it a **super reliable nuget package**.
- There are many ways to adapt our elements in an interface, **Mix** is ​​one of them, because it **encompasses devices and platforms that Xamarin.Forms supports**.
- Another thing that was seen are the **colored guides for the locations of elements**, this method helps to **place the different layouts and controls that exist in a XAML interface**.
- The use of **Material Design** is essential as part of **good UI/UX practices**.

Remember that you can give feedback and with the help of my repository draw your own conclusions, if you have any questions or constructive criticism write to me below this publication, thank you very much.
