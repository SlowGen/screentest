# 🔴 🟦 Shapes Coding Challenge 🟨 🟢 #
🌟 Built by SlowGen 🌟

##  Description ##

The goal of this challenge is to create an app that allows users to draw basic shapes on a canvas, select and deselect each shape or group of shapes, and then edit them in real time in the provided editor. Users can edit the size and color of each shape, as well as drag them around the canvas.

## Instructions for Use ##

On the left, click either "Add Circle" or "Add Rectangle" to add a new shape to the canvas.
The shape will appear on the canvas in the center panel. Multiple shapes may be added and will generate in various locations on the canvas. 

Click any one shape to select or deselect, or shift-click to select multiple shapes. To deselect all shapes, simply click on a blank area of the canvas. Selected shapes will be indicated with a yellow ring as well as have their properties displayed in the right panel in a "shape card" format.


Click-dragging with no shapes selected will move the shape you are currently hovered over.
Click-dragging with one or more selected shapes will move all selected shapes.
Moving the mouse around the canvas without click-dragging will allow you to hover over any shape. When a hover is active, the shape will gain a diffuse blue border.

Shapes may be edited in the right panel by using the range selectors for size and the color selector for fill. Shapes may be deleted from the canvas by clicking the trash can button.

## Installation Requirements ##

This application requires Node.js and npm (or yarn) to be installed.

## Installation Instructions ##

1. Clone this repository and `cd` into the directory.
2. `npm install`
3. `npm start` to launch in development mode (least performant) on `http://localhost:3000`
4. `npm run build` to build for production (most performant)
5. To view a deployed version, visit [here](https://screentest-d8a5d.web.app/)

## Notes ##

This project was built using React / Redux. 
### ⭐ See my other work on my [website](http://kali.nyc) ###
### ⭐ Visit my [LinkedIn](http://www.linkedin.com/in/kali-nfn) ###
### ⭐ Email me at kali@kali.nyc ###