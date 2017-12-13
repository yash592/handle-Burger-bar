$(function() {

	$(".change-eaten").on("click", function(event) {
			var id = $(this).data("id");
			var changeDevoured = $(this).data("newDevoured");

			

			var newDevouredState = {
				devoured: changeDevoured
			};

			$.ajax("/api/burgers/" + id, {
				type: "PUT",
				data: newDevouredState
			}).then(function() {
				console.log("changed devoured to", newDevouredState);
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

//https://www.zedge.net/d2w/4/1874996/921856365/view/?mp3