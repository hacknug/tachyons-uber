# Tachyons-Uber

[![Greenkeeper badge](https://badges.greenkeeper.io/hacknug/tachyons-uber.svg)](https://greenkeeper.io/)
Tachyons-Uber is an uber-sized version of the original Tachyons that simplifies the process of building a custom version of the library. Unlike the _original_ Tachyons-Custom repository, this one uses SASS maps to create the different classes. Declaring a new breakpoint in the `$breakpoints` map would automatically create the suffixed classes for the whole system.

Keep in mind that because of this (and because this versions also includes some modules the original one doesn't) the file size of `tachyons.css` will probably significantly bigger. The idea is that you remove everything you don't need from the setup maps on `_variables.scss` to make it lighter without any hassle. Before using the final CSS on production you should try to stripe everything unused using `UnCSS`.

## Differences with the original Tachyons
This version includes a few extra modules the original version doesn't. Some of them have been written by me, other by other developers. Here's the list of them:
- tachyons-svg: https://github.com/lowmess/tachyons-svg
- tachyons-columns: https://github.com/lowmess/tachyons-columns
- tachyons-background-overlays: https://github.com/lowmess/tachyons-background-overlays

Besides this, I've also removed/added some other things. I'l try to write about them in this section. Like the `_flexbox.scss` which isn't part of the system as of now until I decide how to split in different parts.

## Using Gulp
### Default Task
- `gulp`  
  Running the default task automatically watches your project folders for any changes and runs the accompanying task. For example, if you've elected to run tasks on your JavaScript, anytime you change a JavaScript file gulp will automatically run those tasks, including a browser refresh if you've included BrowserSync.

### CSS
- `gulp styles`  
  Running the gulp styles task will run your selected CSS tasks once.

## Future Development
Expect this library to keep changing during the course of the next days/weeks as I re-structure the modules and directories. I'm planning on making the `_variables.scss` a little cleaner and easier to work with since I feel like it's too cluttered right now.

If you feel like this could work for you but still think there's something missing, feel free to reach out or open an issue on this repo. Looking forward to see how this can make it easier to build custom systems for all kinds of websites.
