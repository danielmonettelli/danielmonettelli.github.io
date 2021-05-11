---
title: Harmonic Interfaces with MonettelliUIKIT in Xamarin.Forms Vol 1
author: Daniel Angel Monettelli L.
date: 2020-05-29 20:55:00 -0500
categories: [XamarinForms, UIKIT, XAML]
tags: [xamarinforms, uikit, xaml, ui, ux]
image:
  src: https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/harmonic_interfaces_with_monettelliuikit.png
  alt: Harmonic Interfaces with MonettelliUIKIT in Xamarin.Forms Vol 1
math: true
---

<p style='font-size: 20px;
  color: light-grey; margin: 0px 0px 20px; font-weight: bold; font-style: italic;'>When creating interfaces in Xamarin.Forms, most developers (and myself included) use the physical device or the emulator to give the appearance of the design that is being replicated, and what about the rest of the devices that exist around the world ?</p>

From this question this publication is born, in my beginnings as a developer of Xamarin Native and Xamarin.Forms I focused on the C # language, as I was learning, I realized that the appearance of interfaces are also a fundamental complement in applications, therefore, I continue studying various UI/UX courses, and therefore, my comfort zone I extend it more and more. To date, I love creating beautiful applications, harmonizing each device (phones, tablets, desktops, etc.).

---

## ¿What are Harmonic interfaces?

Harmonic Interfaces is the balance of a group of controls with the dimensions of the devices that exist today.

**Xamarin.Forms** and its powerful **Hot Reload**, allow you to visualize in real time the process of the interfaces in XAML and C #, with this great tool, I did my practices to perfect my interfaces, and to present my results in this publication.

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/harmonic_interface_in_action.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/harmonic_interface_in_action.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Harmonic Interface in action.</p>

---

## The harmonic layout

Xamarin.Forms has different layouts, each with a purpose, of all of them, the one indicated for me is  <a href="https://askxammy.com/working-with-gridlayout-in-xamarin-forms/" target="_blank">GridLayout</a>, because with **RowDefinitions** and **ColumnDefinitions** I can cleanly manage my controls, however what stands out is proportional mode, and that is where we will focus on this post.

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/gridlayout_structure.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/gridlayout_structure.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>GridLayout Structure</p>

---

## Harmonic proportions

The **proportional mode** is in relation to the dimensions of the device and the content involved in the interface, that is, if a certain row and/or column proportion is added to a control, it is adapted to each device.

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/harmonic_proportions_in_action.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/harmonic_proportions_in_action.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Harmonic Proportions in action</p>

---

## ¿How to use proportions in GridLayout?

For this, it is necessary to use a design tool***(in my case Adobe XD)***, adding semi-transparent blocks of different colors***(both for rows and columns)*** to all the spaces of your design, in order to cover the positions that the controls, remember that each design has its difficulty.

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/using_proportions_in_adobe_xd.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/using_proportions_in_adobe_xd.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Using Proportions in Adobe XD</p>

The <a href="https://github.com/jucaripo" target="_blank">Ing. Juan Carlos Ricalde Poveda</a>***(UI/UX Expert)***, recommends that the artboard(Adobe XD or another tool) be done with the smallest screen size(preferably Android Phones), this helps extend and not reduce the space taken up by the controls.

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/device_sizes_use_case.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/device_sizes_use_case.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Device Sizes use case</p>

In the **"Prototype"** section, we create the flow of the designs(if there are two or more interfaces).

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/adobe_xd_prototype_section.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/adobe_xd_prototype_section.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Adobe XD "Prototype" section</p>

In the **"Share"** section, in the settings part, select the **"Development"** mode, once the link is created, open in the default browser.

---
> **Note:** To have a harmonic ratio, divide the row and/or column distance of a control by the total distance of the design itself.

---

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/adobe_xd_share_section.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/adobe_xd_share_section.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Adobe XD “Share” section</p>

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/calculation_of_proportions_in_the_link_made_for_adobe_xd.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/calculation_of_proportions_in_the_link_made_for_adobe_xd.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Calculation of proportions in the link made for Adobe XD</p>

In the Xamarin.Forms XAML, add **Grid** to encapsulate the different controls that your interface will have, together with the harmonic proportions that have been calculated, then with **Grid.Colum** and **Grid.Row**, we position the controls, if it occupies more than one space you can use **Grid.ColumSpan** or **Grid.RowSpan**, AND WUALÁ !, you already have a harmonic interface.

---
> **Note:** Some controls will necessarily use ***"Auto"*** since their dimensions do not have to be changed, ahem (Label, Entry, etc).

---

```xml
 <Grid>

            <Grid.RowDefinitions>
                <RowDefinition Height=".175*" />
                <RowDefinition Height=".175*" />
                <RowDefinition Height="Auto" />
            </Grid.RowDefinitions>

            <Grid.ColumnDefinitions>
                <ColumnDefinition Width=".075*" />
                <ColumnDefinition Width=".85*" />
                <ColumnDefinition Width=".075*" />
            </Grid.ColumnDefinitions>


             <Image
                Grid.Row="0"
                Grid.RowSpan="2"
                Grid.Column="0"
                Grid.ColumnSpan="3"
                Aspect="AspectFill"
                Source="ItalianFood.png" />

             <Label
                Grid.Row="2"
                Grid.Column="0"
                Grid.ColumnSpan="2"
                Text="Hello Monettelli UIKIT"
                Style="{StaticResource TxtHeadLine4_1}" />

        </Grid>
```

**Margin** and **Padding** you will rarely see involved, because it generates **"Absolute Distances"**, the following code is a clear example.

```xml
    <Grid>

            <Grid.RowDefinitions>
                <RowDefinition Height=".35*" />
                <RowDefinition Height=".65*" />
            </Grid.RowDefinitions>

            <Grid.ColumnDefinitions>
                <ColumnDefinition Width=".075*" />
                <ColumnDefinition Width=".85*" />
                <ColumnDefinition Width=".075*" />
            </Grid.ColumnDefinitions>


             <Image
                Grid.Row="0"
                Grid.Column="1"
                Aspect="AspectFill"
                Source="ItalianFood.png" />

        </Grid>
```

---

## MonettelliUIKIT, Shell and MVVM on stage

<a href="https://marketplace.visualstudio.com/items?itemName=DanielMonettelli.monettelli-forms-templates" target="_blank">MonettelliUIKIT</a> implements the **"Clean UI Style Architecture"**, which reduces the time of developing beautiful interfaces and maintaining them, then I explain the process step by step.

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/monettelliuikit.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/monettelliuikit.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'><a href="https://marketplace.visualstudio.com/items?itemName=DanielMonettelli.monettelli-forms-templates" target="_blank">MonettelliUIKIT</a></p>

---

### a) Use of embedded Fonts and SVG's

In my publication <a href="https://danielmonettelli.github.io/posts/creating-a-clean-style-library-for-xamarin-forms/" target="_blank">Creating a clean Style Library for Xamarin.Forms</a> I write about how to customize FontIcons and add fonts themselves, now with <a href="https://devblogs.microsoft.com/xamarin/embedded-fonts-xamarin-forms/" target="_blank">Embedded Fonts</a>, it simplifies the use of such fonts, the next versions of **MonettelliUIKIT** will have this feature, considerably reducing the code and at the same time making us productive.

---
***"Embedded Fonts" in AssemblyInfo.cs:***

```csharp
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

[assembly: XamlCompilation(XamlCompilationOptions.Compile)]


#region FontIcons Embedded
[assembly: ExportFont("monettelliuikitfonticons.ttf", Alias = "MonettelliFontIcons")]
#endregion

#region FontFamily Embedded
[assembly: ExportFont("SourceSansPro-Bold.ttf", Alias = "SourceSansPro_Bold")]
[assembly: ExportFont("OpenSans-ExtraBold.ttf", Alias = "OpenSans_ExtraBold")]
[assembly: ExportFont("OpenSans-Bold.ttf", Alias = "OpenSans_Bold")]
[assembly: ExportFont("OpenSans-SemiBold.ttf", Alias = "OpenSans_SemiBold")]
[assembly: ExportFont("OpenSans-Regular.ttf", Alias = "OpenSans_Regular")]
#endregion
```

---

On the other hand, **SVG's are already embedded**, thanks to the Nuget package called <a href="https://www.xamboy.com/2018/03/29/sharing-svg-icons-across-platforms-in-xamarin-forms/" target="_blank">Xamarin.FFImageLoading.Svg.Forms</a>.

```xml
 <ffSvg:SvgCachedImage
                Grid.Row="0"
                BackgroundColor="#F5CEB8"
                Source="resource://XF_Demo.SVGImages.svg_bg_food.svg" />
```

---

### b) MVVM Pattern

In the following image we can see the flow of the **MVVM Pattern**.

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/MVVM_Pattern.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/MVVM_Pattern.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>MVVM Pattern by <a href="https://app.pluralsight.com/library/courses/applying-mvvm-xamarin-forms-applications/table-of-contents" target="_blank">Gill Cleeren</a></p>

1.- The **"Models"** folder is part of the business logic, the models are made up of **Full Property** and inherit **INotifyPropertyChanged**, the other class houses the data repository.

---
***Model Structure:***

```csharp
public class Exercise : INotifyPropertyChanged
{

        private Guid _id_Exercise;
        private string _name_Exercise;

        public Guid Id_Exercise
        {
            get => _id_Exercise;
            set
            {
                _id_Exercise = value;
                RaisePropertyChanged(nameof(Id_Exercise));
            }
         }

        public string Name_Exercise
        {
            get => _name_Exercise;
            set
            {
                _name_Exercise = value;
                RaisePropertyChanged(nameof(Name_Exercise));
            }
         }


        public event PropertyChangedEventHandler PropertyChanged;

        public void RaisePropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
 }
```

---

***Structure of the Model Repository:***

```csharp
 public static class ExerciseRepository
 {
        static ExerciseRepository()
        {
            if (Exercises == null)
            {
                Exercises = new List<Exercise>
                {
                    new Exercise
                    {
                        Id_Exercise = Guid.Parse("{70822596-265D-49E3-8CCC-CD996093E601}"),
                        Name_Exercise = "Diet Recommendation",
                        Image_Exercise = "resource://XF__EmbeddedSVG.SVGImages.svg_hamburger.svg",
                        Duration_Exercise = "15-55 MIN Course",
                        Description_Exercise = "Learn how to Create Your Clients(or your)perfect diet and nutrition plan based on their goals, preferences and lifestyle"
                    }
                };
            }
        }

        public static List<Exercise> Exercises { get; set; }
 }
```

---

2.- The **"Services"** folder has two services, a **flexible navigation** class, and a **Data Services** class, each inheriting its respective **Interface**.

---

***Navigation Service:***

```csharp
public class NavigationService : INavigationService
  {
        private Dictionary<string, Type> pages { get; } = new Dictionary<string, Type>();

        public Page MainPage => Application.Current.MainPage;

        public void Configure(string key, Type pageType) => pages[key] = pageType;

        public void GoBack() => MainPage.Navigation.PopAsync();

        public void NavigateTo(string pageKey, object parameter = null)
        {
            if (pages.TryGetValue(pageKey, out Type pageType))
            {
                var page = (Page)Activator.CreateInstance(pageType);
                page.SetNavigationArgs(parameter);

                MainPage.Navigation.PushAsync(page);

                (page.BindingContext as MyBaseViewModel).Initialize(parameter);
            }
            else
            {
                throw new ArgumentException($"This page doesn't exist: {pageKey}.", nameof(pageKey));
            }
        }
    }

    public static class NavigationExtensions
    {
        private static ConditionalWeakTable<Page, object> arguments = new ConditionalWeakTable<Page, object>();

        public static object GetNavigationArgs(this Page page)
        {
            object argument;
            arguments.TryGetValue(page, out argument);

            return argument;
        }

        public static void SetNavigationArgs(this Page page, object args)
            => arguments.Add(page, args);
    }
```

---

***Data Services:***

```csharp
public class ExerciseDataService : IModelDataService<Exercise>
 {
        public void Add(Exercise model)
        {
            throw new NotImplementedException();
        }

        public List<Exercise> GetAll()
        {
            return ExerciseRepository.Exercises;
        }

        public void Remove(Exercise model)
        {
            throw new NotImplementedException();
        }

        public void Update(Exercise model)
        {
            throw new NotImplementedException();
        }
 }
```

---

3.- As a **Singleton**, the **Services** are managed throughout the project***(mainly in the ViewModels)***.

---

***Singleton in App.xaml.cs:***

```csharp
public partial class App : Application
 {
        public static ExerciseDataService ExerciseDataService { get; } = new ExerciseDataService();
        public static SessionDataService SessionDataService { get; } = new SessionDataService();
        public static NavigationService NavigationService { get; } = new NavigationService();
        public App()
        {
            InitializeComponent();

            NavigationService.Configure(ViewNames.ExercisePage, typeof(ExercisePage));
            NavigationService.Configure(ViewNames.ExerciseDetailPage, typeof(ExerciseDetailPage));

            MainPage = new AppShell();
            //MainPage = new NavigationPage(new ExercisePage());
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
 }
```

---

4.- The **"Helpers"** folder, add an Enum Type called **"ThemeType"**, where you have the different **Themes**, the **ThemeHelper** class inherits said Enum, it should be noted that its use is through the method of a command that will be created in the **ViewModel**.

---

***ThemeType.cs:***

```csharp
 public enum ThemeType
 {
        Light,
        Dark
 }
```

---

***ThemeHelper.cs:***

```csharp
public static class ThemeHelper
{
        public static void ChangeTheme(ThemeType themeType)
        {
            if (Application.Current.Resources != null)
                Application.Current.Resources.Clear();


            switch (themeType)
            {
                case ThemeType.Light:
                    Application.Current.Resources = new LightTheme();
                    break;
                case ThemeType.Dark:
                    Application.Current.Resources = new DarkTheme();
                    break;
            }
        }
}
```

---

5.- The **"ViewModels"** folder has a **Base Class** for each **ViewModel**.

---

***MyBaseViewModel.cs:***

```csharp
 public class MyBaseViewModel : BaseViewModel
 {
        public virtual void Initialize(object parameter)
        {

        }
 }

```

---

***ViewModel Structure:***

```csharp
public class ExerciseViewModel : MyBaseViewModel
 {
        public ThemeType SelectedTheme;
        public ICommand ExerciseSelectedCommand { get; }
        public ICommand ThemeSelectedCommand { get; }

        private ObservableRangeCollection<Exercise> _exercises;

        public ObservableRangeCollection<Exercise> Exercises
        {
            get => _exercises;
            set
            {
                _exercises = value;
                OnPropertyChanged(nameof(Exercises));
            }
        }

        private Exercise _selectedExercise;

        public Exercise SelectedExercise
        {
            get { return _selectedExercise; }
            set { SetProperty(ref _selectedExercise, value); }
        }

        public ExerciseViewModel()
        {
            Exercises = new ObservableRangeCollection<Exercise>(App.ExerciseDataService.GetAll());

            ExerciseSelectedCommand = new Command(OnExerciseSelectedCommand);

            ThemeSelectedCommand = new Command(OnThemeSelectedCommand);
        }

        private void OnThemeSelectedCommand()
        {
            if(SelectedTheme == ThemeType.Light)
            {
                SelectedTheme = ThemeType.Dark;
            }
            else
            {
                SelectedTheme = ThemeType.Light;
            }

            ThemeHelper.ChangeTheme(SelectedTheme);
        }

        private void OnExerciseSelectedCommand()
        {
            if (SelectedExercise != null)
            {
                App.NavigationService.NavigateTo(ViewNames.ExerciseDetailPage, SelectedExercise);

                SelectedExercise = null;
            }
        }
 }
```

---

6.- The **"Utilities"** folder has two classes, a **ViewModelLocator*****(useful for unit tests)*** that facilitates the replacement of the **ViewModel** in each **View**, and a **ViewNames** that names each **View**.

---

***ViewModelLocator Structure:***

```csharp
 public static class ViewModelLocator
 {
        public static ExerciseViewModel ExerciseViewModel { get; set; }
            = new ExerciseViewModel();

        public static ExerciseDetailViewModel ExerciseDetailViewModel { get; set; }
            = new ExerciseDetailViewModel();
 }
```

---

***ViewNames.cs:***

```csharp
public class ViewNames
{
        public const string ExercisePage = "ExercisePage";
        public const string ExerciseDetailPage = "ExerciseDetailPage";
}
```

---

7.- In the **C# code-behind file** of the **View**, through the **BindingContext** property, we link the **ViewModelLocator**.

---

***ViewModelLocator in the C# code-behind file:***

```csharp
public partial class ExercisePage : ContentPage
{
        public ExercisePage()
        {
            InitializeComponent();

            BindingContext = ViewModelLocator.ExerciseViewModel;
        }
}
```

---

### c) XAML Harmonic

Now that you have a clear vision of what interface harmony is all about, let's apply what we have learned in the following design.

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/exercise_app_concept.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/exercise_app_concept.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Exercise App Concept by <a href="https://dribbble.com/dew_drops" target="_blank">Shahidul Islam Shishir</a></p>

Making a feedback, we analyze the design(s) in Adobe XD, we add multi-colored blocks to the rows and columns, we prototype and create the link that will help to see the distances of these blocks, and then calculate the proportions of each design.

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/harmonic_proportions_in_the_concept_of_exercise_application.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/harmonic_proportions_in_the_concept_of_exercise_application.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>"Harmonic Proportions" in the Concept of Exercise Application</p>

Using the **GridLayout**, we complement these proportions in **Row(Colum)Definitions**, and with the help of the design, we position the controls, then through **StaticResource/DynamicResource**, we incorporate the styles assigned in **Styles.xaml**.

---

***Complete Structure of a Style with OnIdiom:***

```xml
 <Style
        x:Key="TxtHeadLine4_1"
        TargetType="Label">
        <Setter Property="TextColor" Value="{DynamicResource colSec}" />
        <Setter Property="FontSize">
            <OnIdiom
                x:TypeArguments="x:Double"
                Watch="{StaticResource TxtSizeCap_12}"
                Phone="{StaticResource TxtSizeH4_34}"
                Desktop="{StaticResource TxtSizeH3_48}"
                Tablet="{StaticResource TxtSizeH3_48}"
                TV="{StaticResource TxtSizeH3_48}" />
        </Setter>
        <Setter Property="FontFamily" Value="OpenSans_ExtraBold" />
    </Style>
```

---

### d) Shell in action

<a href="https://monettelliuikit.github.io" target="_blank">MonettelliUIKIT</a> comes with **Shell**, and with **AppShell.xaml** you can add **Views**, easily modify colors, labels, images, etc. It practically makes life easier for the developer.

---

### e) Final Score

If you have applied each step, the result will be similar to this one.

<a href="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/harmony_of_interfaces_made_in_xamarin_forms.png" data-fancybox><img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/master/assets/img/images/harmony_of_interfaces_made_in_xamarin_forms.png" /></a>
<p style='text-align: center;  font-size: .8rem;
  color: light-grey; margin: -12px 0px 20px; font-weight: bold;'>Harmony of interfaces made in Xamarin.Forms</p>

---

## Conclusions

The use of harmonic proportions is one of many methods to stylize interfaces, make them flexible, and above all, provide a good user experience on each device.

**MonettelliUIKIT** is a great ally of the UI/UX in Xamarin.Forms and I hope it is also in the new **.NET MAUI**.

---

## Publication in Spanish

<a href="https://xamarinlatino.com/interfaces-arm%C3%B3nicas-con-monettelliuikit-en-xamarin-forms-vol-1-fb2dc05ef372" target="_blank">Interfaces Armónicas con MonettelliUIKIT en Xamarin.Forms Vol 1</a>

---

## Resources

---

### Github Repository

<a href="https://github.com/danielmonettelli/XF_HarmonicInterfaces" target="_blank">danielmonettelli/XF_HarmonicInterfaces</a>

---

### Sketch App Sources

<a href="https://www.sketchappsources.com/free-source/4067-excercise-app-concept-sketch-freebie-resource.html" target="_blank">Exercise App Concept Sketch Resource</a>
