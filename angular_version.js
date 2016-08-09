var movieApp = angular.module('movieApp', ['ngMaterial']);
movieApp.controller('movieAppController', function($scope, $http, $mdDialog){

	var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman';
	$scope.imagePath = 'http://image.tmdb.org/t/p/w300/';

	var apiBaseUrl = 'http://api.themoviedb.org/3/';
	var imageBaseUrl = 'http://image.tmdb.org/t/p/';
	var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
	var npUrl = apiBaseUrl + 'movie/now_playing' + apiKey;
	var keywordSearch = apiBaseUrl + '/search/keyword' + apiKey;
	var multiSearch = apiBaseUrl + '/search/multi' + apiKey;
	var movieSearch = apiBaseUrl + 'search/movie' + apiKey;





	$http({
		method: 'GET',
		url: npUrl
	}).then(
		function successFunction(movieData){
			$scope.movieArray = movieData.data.results;
		},function failureFunction(movieData){
			console.log(movieData);
	});

	$scope.getNewMovieStuff = function(){
		var searchUrl = movieSearch + '&query=' + $scope.userChoice;
		$http({
			method: 'GET',
			url: searchUrl
		}).then(
			function successFunction(movieData){
				$scope.movieArray = movieData.data.results;
			},function failureFunction(movieData){
				console.log(movieData);
		});


	}

})