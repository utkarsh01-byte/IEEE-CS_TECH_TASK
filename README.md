Companion AI https://companion.uprock.pro/  - Landing Page clone
I built this website with React and complex scroll-based animations.

 Check out the live site: https://ieeetask-seven.vercel.app/

What I used: 

React: My core framework for building the UI.

Framer Motion: This did all the heavy lifting for the scroll transformations and the "pop-in" navigation effects.

CSS Modules: Used these to keep my styles scoped so I didn't have to worry about class names clashing across sections.

Vite: For a fast development environment.

Key Sections I Developed: 

The Hero Section:
The first thing you see is a layered image reveal. I used useTransform and clipPath to make different images "wipe" over each other as you scroll down. I also added some dynamic text that fades out just before the next section arrives.

The Solution Section:
It starts as a small card in the middle of the screen and expands to fill the entire width as you scroll.

Also for better understanding , named all the components , files and classNames in a well defined meaningful names.

How it's organized:
src/components: Where the logic for the Hero and Solution sections lives.

src/videos: Local assets for the hand interaction and background vibes.

App.jsx: The "brain" of the app that manages the global scroll progress and navbar visibility logic.

Want to run it locally?
Clone it: git clone https://github.com/utkarsh01-byte/IEEE-CS_TECH_TASK.git

Installation : npm install

Start the dev server: npm run dev
