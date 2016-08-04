$(document).ready(function(){
		// this is the base url for all our api calls
	var apiBaseUrl = 'http://api.themoviedb.org/3/';
	// This is the base URL for all images
	// after the / comes the width, E.g., imageBaseUrl + 'w300' + poster_path
	var imageBaseUrl = 'http://image.tmdb.org/t/p/';
		// the query string, including the api key
	var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
	var npUrl = apiBaseUrl + 'movie/now_playing' + apiKey;
	var keywordSearch = '/search/keyword';
	var multiSearch = '/search/multi';
	var movieSearch = apiBaseUrl + 'search/movie' + apiKey;
	console.log(movieSearch);

	$.getJSON(npUrl, function(nowPlayingData){
		console.log(nowPlayingData);
		var npHTML = '';
		var postersPerRow = 4;
		var posterCounter = 0;

		for(var i = 0; i < nowPlayingData.results.length; i++){
			if(posterCounter == 0){
				npHTML += '<div class="row">';
			}
			if(posterCounter % postersPerRow == 0){
				npHTML += '</div><div class="row">';				
			}
			npHTML += '<div class="col">';
				npHTML += '<span>' + nowPlayingData.results[i].title + '</span>';
				var posterUrl = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
				npHTML += '<img src="' + posterUrl + '">';

			npHTML += '</div>';
			if(posterCounter == nowPlayingData.results.length){
				npHTML += '</div>';
			}
			posterCounter++;
		}
		$('.poster-grid').html(npHTML);
	})

	$('.search-form').submit(function(){
		event.preventDefault();
		var userInput = $('#user-input').val();
		var search = movieSearch + "&query=" + userInput;

		$.getJSON(search, function(searchMovieData){
			console.log(searchMovieData);
			var searchHTML = '';
			var postersPerRow = 4;
			var posterCounter = 0;
			for(var i = 0; i < searchMovieData.results.length; i++){
				if(posterCounter == 0){
					searchHTML += '<div class="row">';
				}
				if(posterCounter % postersPerRow == 0){
					searchHTML += '</div><div class="row">';				
				}
				searchHTML += '<div class="col">';
					searchHTML += '<span>' + searchMovieData.results[i].title + '</span>';
					var posterUrl = imageBaseUrl + 'w300' + searchMovieData.results[i].poster_path;
					searchHTML += '<img src="' + posterUrl + '">';

				searchHTML += '</div>';
				if(posterCounter == searchMovieData.results.length){
					searchHTML += '</div>';
				}
				posterCounter++;
			}
			$('.poster-grid').html(searchHTML);
		})	

	});

});


