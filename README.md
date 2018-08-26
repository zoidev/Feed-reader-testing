#FeedReader
This project is a web-based application that reads RSS feeds. Udacity provided the application and the first test suite and I implemented the rest suites which are described thoroughly below.

## Installing
- Clone the repository or download the zip folder of the project 
- Open the file ```index.html``` in your browser (Chrome is recommended)

###Instructions about the code implemetation 
- the app is based on the Google Feed Reader API, for more details you can check this source: https://developers.google.com/feed/v1/devguide

-  **Suite #1: RSS Feeds**
Ensures that allFeeds array is define and it's not empty using the matchers ``` toBeDefined()``` and ```.not.toBe()```. Also, ensures that every feed has an url and a name. This implemeted by using the ```forEach()``` method on the array *allFeeds* and testing with the same matchers as before.

- **Suite #2: The menu**
Sets the menu hidden by default and checks menu visibility after by 'click' event. The visibility of menu dependes on the class ```menu-hidden```, which using css moves the menu out of the screen. So, we check that the class ```menu-hidden``` exists by selecting the html body using jQuery selector and the method ```hasClass()```. The clicked-unclicked functionality is tested by searching for two click events (one that displays the menu and the seconf that hides it) using jQuery ```click()``` method and then again with the ```hasClass()``` method, first to be false and then true.

- **Suite #3: Initial Entries** 
A test for the async function ```loadFeed```, using the ```done()``` function that gives us a signal that the async function has finished its implementation, and the ```beforeEach()``` jasmine function that ensures that the async function has finished some task we need before each specification is tested. In this situation, we need to declare the length of the ```.entry``` and ```.feed``` elements together and then check that they are not empty using ```toBeGreaterThan()``` jasmine method.

- **Suite #4: New Feed Selection**
 In order to check that the content changes we have to check if two feeds  are the same. So, in the callback function of ```beforeEach``` the ```loadFeed()``` runs two times, but the second time is inside the first's callback function. ```done()``` is called after the second feed is loaded in order we are able to do the comparison. Finally, we use as the actual part of ```expect``` the expression ``` oldFeed !== newFeed``` to be ```true```.
 
 **NOTE:** All the js files should be linked to the html file, but ```jasmine``` should be inside the ```<head>``` and the other files in end of the ```<body>``` after the DOM has been loaded.