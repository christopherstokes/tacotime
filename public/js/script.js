$('#addTacoButton').on("click", function() {
	$('#addTacoForm').toggle();
});

function getLocation() {
  navigator.geolocation.getCurrentPosition(show_map);	
}
