# Submission Plan for additional features # 
# by: Kali Linn - kali@kali.nyc #

### [Deployed App](https://screentest-d8a5d.web.app/)  || [GitHub Repo](https://github.com/SlowGen/screentest) ###

** localStorage based persistence **
---

Because Redux is already implemented, adding localStorage is a simple as including axios and adding that step to the reducer. The saved state is merely a step by step set of instructions for drawing on the canvas, retrieving this state would result in an identical drawing as the original saved state.

** undo/redo **
---

In order to impletment undo/redo, I would create an additional state set that would essentially be a history of actions since the last save (the "save" point could either be from the onset, or an additional feature.) This would need a "completed event" trigger so as not to include intermediary data (like mid-drag position, or mid-slide on the range slider) and only include tangible changes. A completed event would be added to the history and the tool to go forward and backward would simply traverse this history without making changes to the history state in order to "redo". When a new change is made, the forward history is then removed and the new changes are added. Any moves along the histroy timeline would also need to trigger state updates for the shapes being rendered.

** save to image **
---

This feature required more research on my part than the others, since I have had no experience with saving images from a canvas. I was wonderfully surprised that it relied on a simple call to the canvas API with .toDataURL() and includes the flexiblilty of dictating image quality and file type. It would be important to maintain a clean canvas origin in order to avoid a security error. A button could be created that triggers the .toDataURL() call and then procedes with the default download behavior in the user's browser.

