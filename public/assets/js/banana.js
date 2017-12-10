$ (function() {

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBanana = {
			name: $('#ca').val().trim(),
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBanana
		}).then(function(){
			console.log("Added new Banana");
			location.reload();
		});
	});
});