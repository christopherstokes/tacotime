$('#addTacoButton').on("click", function() {
	$('#addTacoForm').toggle();
});

$('#inAddress').on("click", function() {
	$('#addressIn').toggle();
});



function getLocation() {
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log(position.coords.latitude + " , " + position.coords.longitude);
		});
	} else {
		/* geolocation IS NOT available */
	}

}
