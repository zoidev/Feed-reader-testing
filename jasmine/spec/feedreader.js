/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //a test that loops through each feed in the allFeeds object 
        //and ensures it has a URL defined and that the URL is not empty.
        it('every feed has url defined and that the URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });               
        });
        // a test that loops through each feed
        // in the allFeeds object and ensures it has a name defined
        // and that the name is not empty
        it('every feed has name defined and that the name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });                
        });
    });
    describe('The menu', function() {
        //ensures the menu element is hidden by default
        it('the menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        //ensure that the menu display when clicked and desappers when clicked again.
        it('visibility when menu icon is clicked', function(){
            //first click opens the menu
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //second click hides the menu
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });
    });
    describe('Initial Entries', function(){
        //ensures when the loadFeed
        //function is called and completes its work, there is at least
        // a single .entry element within the .feed container
        let entriesLen;
        beforeEach(function(done){
            loadFeed(0, function() {
                entriesLen = $('.feed .entry').length;
                done();
            });
        });
        it('after loadFeed() completes,there is at least a single entry element', function(done){
            //ensures that at least one entry exists
            expect(entriesLen).toBeGreaterThan(0);
            done();
        });
    });    
    describe('New Feed Selection', function(){
        // ensures when a new feed is loaded
        // by the loadFeed function that the content actually changes.
        let oldFeed;
        let newFeed;
        beforeEach(function(done){
            //loads first feed
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
                //loads second feed
	            loadFeed(1, function() {
		             newFeed = $('.feed').html();
		             done();
	         	});          
            });
        });
         it('new feed changes the content', function(done){
            //comparison condition that should be true 
            expect(oldFeed !== newFeed).toBe(true);
            done();
         }); 
    });
}());
