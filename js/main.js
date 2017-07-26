$(document).ready(function() {
	$('body').on('submit', '#searchForm', function(e){
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	})
});

//Get movies from OMDB API

function getMovies(searchText){
	$.ajax({
		method:'GET',
		url: 'http://www.omdbapi.com/?s='+searchText+'&apikey=dd77a175'
	}).done(function(data){
		let movies = data.Search;
		let output = '';
		$.each(movies, function(index, movie){
			output += `
			<li>
				<a href="#">
					<img src= "${movie.Poster}">
					<h2>${movie.Title}</h2>
					<p>Release Year: ${movie.Year}</p>
				</a>
			</li>

			`;
		});
		$('#movies').html(output).listview('refresh');
	});
}