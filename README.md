# TexarCSS
![texarlogo](https://github.com/Mikku44/TexarCSS/assets/104062911/471a83a3-4ee1-4b17-828d-110040dd329b)


TexarCSS is a dynamic and powerful CSS library designed to bring text animations to HTML with the simplicity and elegance reminiscent of TailwindCSS.

## Intallation 

### with CDN

```
 <script src="https://unpkg.com/texarcss@1.0.2/texarcss.js"></script>
  <script>
      
        applyAnimations();
  </script>
```

### with NPM
```
   npm i texarcss
```
then you need to import **applyAnimations** in your project
```
  import { applyAnimations } from 'texarcss'

```
in the page you must call **applyAnimations()** to let it work

## Getting Started
### Key Properties
TexarCSS uses a utility-first approach similar to TailwindCSS, making it easy to apply animations using predefined classes. Below are the key properties available in TexarCSS:

1.animate-\[animation-name\] 

2.duration-\[ms\]

3.separate

4.infinite-\[times\]

5.color-\[color\]


#### Property Details
**1. animate-\[animation-name\]**
   
This property specifies the type of animation to apply to a text element. Replace <animation-name> with the desired animation from the list of available animations.

Available Animations:
   - **fade** _required **color-\[\]**_

     ![texarCss - Google Chrome 2567-06-10 01-17-19](https://github.com/Mikku44/TexarCSS/assets/104062911/44f13fc5-4b3b-4647-98d9-d335cb8b57d0)

   - **shiny**
     
     ![texarCss - Google Chrome 2567-06-10 01-14-42](https://github.com/Mikku44/TexarCSS/assets/104062911/b247b612-6aba-4c33-8760-519bcc93282e)

   - **random**

     ![texarCss - Google Chrome 2567-06-10 01-19-38](https://github.com/Mikku44/TexarCSS/assets/104062911/0138cfcd-78b4-4607-b093-07269cc76e60)

   - **type**
   - **scale**
   - **wave**
   - **blur**



### Example
```
 <p class="animate-[fade] color-[red]">This text will fade in.</p>
 <p class="animate-[random] separate">This text will fade in.</p>
 <p class="animate-[shiny] duration-[2000]  infinite-[10]">This text will fade in.</p>
  <p class="animate-[type] duration-[2000] separate color-[transparent]  infinite-[10]">This text will fade in.</p> 
```


**2. duration-\[ms\]**

This property sets the duration of the animation in milliseconds. Replace <ms> with the desired duration value.
by default _1000ms_ or _1second_

### Example

```
 <p class="animate-[fade]  duration-[2500] color-[red]">This text will fade in.</p>
 <p class="animate-[random]  duration-[4500] separate">This text will fade in.</p>
 <p class="animate-[shiny] duration-[2000] infinite-[10]">This text will fade in.</p>
  <h1 class="animate-[wave] duration-[700] separate" style="color:rgb(233, 166, 22);">
        TexarCSS
    </h1>
    <h1 class="animate-[scale] duration-[700] separate" style="color:rgb(233, 166, 22);">
        TexarCSS
    </h1>
```

**3.separate**

This property indicates that each character of the text should be animated separately.


### Example


```
 <p class="animate-[fade]  duration-[2500] color-[red] separate">This text will fade in.</p>
 <p class="animate-[random]  duration-[4500] color-[red] separate">This text will fade in.</p>
 <p class="animate-[shiny] duration-[2000] color-[red] infinite-[10] separate">This text will fade in.</p> 

```

**4.infinite-[times]**

This property sets the number of times the animation should repeat. 
Replace **<times>** with the number of repetitions 

or **remove** infinite for an endless loop.

by default **Infinity**


### Example


```
 <p class="animate-[fade]  duration-[2500] color-[red] separate">This text will fade in.</p>
 <p class="animate-[random]  duration-[4500] infinite-[1] separate">This text will fade in.</p>
 <p class="animate-[shiny] duration-[2000] infinite-[10] separate">This text will fade in.</p> 
```

**5.color-[color]**

This property changes the color of the text during the animation. Replace [color] with the desired color value.


### Example


```
 <p class="animate-[fade]  duration-[2500] separate color-[blue]">This text will fade in.</p>
 <p class="animate-[random]  duration-[4500] infinite-[1] color-[#000000] separate">This text will fade in.</p>
 <p class="animate-[shiny] duration-[2000] infinite-[10] color-[transparent] separate">This text will fade in.</p> 
```

### Full CODE

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>texarCss</title>
    <script src="texarcss.js"></script>
 <script>
      
        applyAnimations();
  </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        body {
            font-family: "Bebas Neue", sans-serif;
            background: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: calc(100vmin - 20px);
        }

        h1 {
            font-size: 56px;
        }
    </style>

</head>

<body>

    <h1 class="animate-[random] duration-[2000] separate  color-[black]" style="color:rgb(233, 166, 22);">
        TexarCSS
    </h1>
    <h1 class="animate-[shiny] duration-[2000] separate  color-[black]" style="color:rgb(233, 166, 22);">
        TexarCSS
    </h1>
    <h1 class="animate-[fade] duration-[2000] separate  color-[black]" style="color:rgb(233, 166, 22);">
        TexarCSS
    </h1>


</body>

</html>

```

