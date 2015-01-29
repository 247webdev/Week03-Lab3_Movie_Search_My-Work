$(document).ready(function(){
	$('ul').hide();
//		var searchParams = "http://www.omdbapi.com/?s=" + mTitle;
	// var movieDataWAJAX = function(params) {
	//     $.ajax({
	//         url: "http://www.omdbapi.com/?t=" + mTitle,
	//         type: "POST",
	//         dataType: "json",
	//         async: false,
	//         success: function (data) {
	//             console.log(data);
	//         }
	//     });
	// }
	var movieData = function(params){
		$.getJSON( "http://www.omdbapi.com/?s=" + params, function (data) {
		console.log(data);
			if( data.Response === "False" ){
				$('h3').text('Sorry, no results for that search.').css('color', 'red');
			} else if( data.Search.length > 0 ){
				console.log("length is enought");
				for(var i=0; i<data.Search.length; i++ ){
					// console.log(data.Search[i].Title + "\n");
					$('ul').show().append('<li>' + data.Search[i].Title + '</li>' );
		    	}
			} else {
				console.log("no results");
				$('h3').text('Sorry, no results for that search.');
			}
	    });
	};

	$('form').on('submit', function(e) {
		e.preventDefault();
		var mTitle		= $('#mTitle').val();
		// var mYear		= $('#mYear').val();
		// var mPlot		= $('#plotStyle').val(); //mPlot;
		// var dataFormat	= "json";
		$('ul').empty();
		movieData(mTitle);
	});

	$('li').on('focusin', 'li', function(){
		console.log("gained focus");
	});

});