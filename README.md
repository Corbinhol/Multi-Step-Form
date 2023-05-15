

## Multi-Step Form – Corbin Holcombe

  

This Form will have multiple steps through the purchase process. The user selects various options to decide how to pay for the service and what add-ons they would like to add. The user has 3 Plans they can choose from, and 3 add-ons. The user can also decide to pick whether they want to pay monthly or yearly. I will also add tax information at the end as well. Each section will be hidden until you click the “Next Step” button. Once you click the continue button it will show the next screen, and hide the current one. If you click the “Go Back” button it will return to the previous screen (if there is one). Once it reaches the end, the “Next Step” button will change to a “Confirm” button finishing up and sending the data to a server. I plan on working on this over the next few days, in my free time.

**Languages I used to develop this:**

 - HTML
 - CSS
 - Javascript

  

I used [Vite](https://vitejs.dev/) to set up the project. I also used [Modern-Normalize](https://github.com/sindresorhus/modern-normalize) in the setup of this project.

  

As a basis, I used [Frontend Mentor’s Multi Step Form](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). This provided me with the assets and Options. I really wanted to just practice my CSS, HTML, and Javascript.

  
  **Feel Free to check out the site at https://multi-step-form-teal-one.vercel.app/**

----------

  

**Part 1 – Setting up the project – *5 Minutes***

Setting up the project was extremely quick and easy thanks to *Vite*. I was able to set up a basic project within seconds. I did however change a few things including setting up a */src/* folder to hold all my images, javascript files, and stylesheets. Because of this, I had to change a few positions that *Vite* sets up when you build.

After I set everything up, I initialized the git.

**Part 2 – Writing The HTML – *1 Hour***

Writing the HTML took some time, even though the text was already supplied by *Frontend Mentor*, I still had to divide everything into various divs and sections. Many of these texts will be changed as you select various options, so I needed to give a lot of p tags their own ids.

**Part 3 - Writing The CSS - *4 Hours***

I took my time writing the CSS, taking breaks in between so I didn’t burn myself out too much. I went with the mobile-first method. However, I only did phone and desktop versions, excluding smaller screens. I regret it a little, but I didn’t want to waste too much time. Besides that, I didn’t have too many problems. To switch between each step, I created a class labeled “display-none” which I gave to each step surrounded by a container, excluding the selected one. I also had a class labeled “display-hidden” which I would give to various elements that I wanted to hide but not affect the document. Something I wish I did was write a script ahead of time that set the step I was working on. Because manually changing the selected step in the HTML Document was a little time-consuming.

**Part 4 - Writing the JS - *3 Hours***

This one only took so long because I took my time with it.

To be quite honest, JS is my favorite part of web development since it’s the part that I’m most familiar with. For me, JS makes a lot of sense. Because of that, I took my time to make sure that A) I had a lot of fun with it, and B) it was done correctly. Besides the occasional bug, Writing JS for this site was fairly straightforward and smooth going. I did do a ton of setup work with CSS so, most of it was just giving each element the correct classes for whatever was needed. Like giving the “go back” button the “display-hidden” class that I wrote when it's on the last page. One thing that was annoying was the way that Vite handles updating the page every time you save. It uses a script to inject your code into the site, which caused a ton of problems. Like for example when refreshing the page, the Year/Month Toggle wouldn’t revert back to default, but the variable would, or my add-on buttons wouldn’t remove their classes but the variables for each button would reset. It seems that the JS would reset, but the affected elements wouldn’t. Which was unfortunate.

  

Things I can do to improve my code:
- Add more form validation to the first page, so it verifies each field to ensure that they are the correct field.
- Clean up my variables. There were instances where I would re-establish variables several times. Like when I had one that decided whether or not the prices were followed by “/mo” or “/yr” When I probably could’ve had a single, global variable that stored that and was changed at the start and I could call it when I needed it.
    
-   I only really set it up to work on mobile phones, and 1080p desktops, and it's very evident that I didn’t do much for the screens in between.
    

  
  
  
  
  

What I need to improve on:

-   I really need to improve my responsive web pages. This one wasn’t much of an example, since I didn’t push myself much on making a super responsive one. But I really should work on it.
    
-   I really should learn to take my time analyzing the given documents, especially the example pictures, and figuring out a plan. Often times I would return to my HTML document to add specific elements that I missed (Like the “2 months free” annotation on the plan selection screen) or I would forget to add ids to various elements.
    
-   Using GIT is super important in a professional landscape, and I need to get used to making smaller commits and giving brief but informative descriptions.
    

  

What I did well on:

-   I did really well remembering to use REM and EM on font sizes, I think accessibility is super important and I've been working hard on ensuring I have all of that down.
    
-   I did well on my javascript, which wasn’t super surprising to me as that's what I was more used to, but all in all, I'm still proud of myself.
    
-   Commenting on my work, and adding documentation.
    
-   Keeping my code readable.
    
-   Pacing myself so I didn’t get burned out.

