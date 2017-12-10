$(function() {

	$(".change-eaten").on("click", function(event) {
			var id = $(this).data("id");
			var changeDevoured = $(this).data("newDevoured");

			var newDevouredState = {
				devoured: changeDevoured
			};

			$.ajax("/api/burgers" + id, {
				type: "PUT",
				data: changeDevoured
			}).then(function(){
				console.log("changed devoured to", newDevoured);
				location.reload();
			});
	});

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