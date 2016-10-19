#MOVIE APP IN ANGULARJS

Incorporates use of the movie database api.  This is still a work in progresss but, nonetheless, a good example of practice with a fun api. Current features include being able to search for any movie or title that you want with the app populating the top twenty search results based on the keyword(s) entered. There is the more info feature that allows you to to see a little more info about the movies as well as their ratings.

Built using:
* Angular/Javascript
* HTML/CSS
* Bootstrap

##Functionality and Processes
This is a fairly simple app with a lot of potential for functionality.  Ideas for future additions include allowing for the user to search for movies specifically by actor or genre as well as utilizing the individual movie search feature to gather more information about each movie to display in the corresponding modal. I'll start by showing my variable structure.  I realize that my API key is visible but I've been told I trust people too much so I'll just rely on the honor system that you won't misuse it.
```javascript
	var apiBaseUrl = 'http://api.themoviedb.org/3/';
	var imageBaseUrl = 'http://image.tmdb.org/t/p/';
	var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
	var npUrl = apiBaseUrl + 'movie/now_playing' + apiKey;
	var keywordSearch = apiBaseUrl + '/search/keyword' + apiKey;
	var multiSearch = apiBaseUrl + '/search/multi' + apiKey;
	var movieSearch = apiBaseUrl + 'search/movie' + apiKey;
```
This helps increase the readability of the code and cuts down on overall characters typed when writing out GET requests over and over again (there's only two currently in this app but this is best practice).
When the page first populates, the first GET request is run using the npUrl. All the variables for the urls follow the same concatenation structure the apiBaseUrl + /search/(insert what you want to search) + the apiKey. This one finds the now playing data so that the current top twenty movies in the box office will always show up when a user comes to the page.
```javascript
	$http({
		method: 'GET',
		url: npUrl
	}).then(
		function successFunction(movieData){
			console.log(movieData)
			$scope.movieArray = movieData.data.results;
		},function failureFunction(movieData){
		console.log(movieData);
	});
```
Here we see our get request and our .then method which is our promise.  this handles the either event if we are to get successful response from the api or failed response from the api.  This is important for one: debugging and testing purposes, and two: as promise, it allows the processes on the page to not be halted while waiting for a response(although in this page there's not anything that would be interfered with, it's just good to know this kind of stuff).

A similar function is used for when the user conducts a search for their movie title or part of a title: 
```javascript
	$scope.getNewMovieStuff = function(){
		var searchUrl = movieSearch + '&query=' + $scope.userChoice;
		$http({
			method: 'GET',
			url: searchUrl
		}).then(
			function successFunction(movieData){
				console.log(movieData)
				$scope.movieArray = movieData.data.results;
			},function failureFunction(movieData){
				console.log(movieData);
		});


	}
```
here we target what the user entered in the text field using ng-model as attributed used in angular that is placed on the input element in index.html file. Angular's data binding allows us to have access to this via the scope dependancy, one of the main advantages to angular.  Here are url has a query concatenated onto the end of it that includes the user's input.  The get request runs, the promise runs and moviedata (whatever data is returned from the api) is made available to the DOM (browser window) via scope. In this case. specifically the results property of the data that is returns as this helps clean up what we have to target and populate in the HTML.




to be continued...