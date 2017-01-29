;(function() {
	"use strict";

	// $('#container p')
	// .add('button')
	// .css('background', "green")
	// .css('font-size', '20px')
	// .addClass('new-class');

	// $('#container')
	// .css("position", 'absolute')
	// .css('width', '400px')
	// .css('height', '400px')
	// .animate({
	// 	width: '300px',
	// 	height: '300px',
	// 	top: '50%',
	// 	left: '50%',
	// 	margitTop: '-150px',
	// 	margitLeft: '-150px'
	// }, 3500, function(){
	// 	$(this).animate({
	// 		width: '400px',
	// 		height: '400px'
	// 	}, 1000)
	// });

	// $('#my-form').on('submit', function(event) {
	// $('#my-form').submit(function(event) {
	// 	event.preventDefault();
	// 	console.log("submit clicked");

	// 	let text = $(this).children('[type=text]').val();

	// 	$('#container .first').text(text);
	// });

	// $('.first').on('click', function() {
	// 	$('#my-form').submit();
	// })

	// $.ajax({
	// 	url: "http://api.giphy.com/v1/gifs/trending",
	// 	method: "GET",
	// 	data: {
	// 		"api_key": "dc6zaTOxFJmzC",
	// 		"limit" : 5
	// 	},
	// 	success(res) {
	// 		let images = res.data.map(el => ({
	// 			id: el.id,
	// 			url: el.images.fixed_height_small.url
	// 		}));

	// 		images.forEach( el => {
	// 			$('#container')
	// 			.css({
	// 				display: "flex",
	// 				overflowX: "scroll"
	// 			})
	// 			.append(`<img src="${el.url}" data-img-id="${el.id}"/>`);
	// 		})
	// 	},
	// 	error() {
	// 		console.error("Some error on execution")
	// 	}
	// });

	// navigator.geolocation.getCurrentPosition(onAllow, onError);
	
	// function onAllow(data) {
	// 	let {latitude, longitude} = data.coords,
	// 	key = "e49d4fb223fb71e35c8baba2c641a5bf",
	// 	baseUrl = "https://api.darksky.net/forecast";

	// 	$.ajax({
	// 		url: `${baseUrl}/${key}/${latitude},${longitude}`,
	// 		dataType: "jsonp",
	// 		success(res) {
	// 			console.log(res);
	// 		},
	// 		error() {
	// 			console.error("Some error on execution")
	// 		}
	// 	});
	// }

	// function onError(data) {
	// 	$("#container").append(`<p style='color: red'>Unable to get location</p>`);
	// }


	$('#container').randomColor();
})();