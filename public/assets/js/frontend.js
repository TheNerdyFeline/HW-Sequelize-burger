$(document).ready(function() {
    var newOrder = {};
    $(document).on("click", "#addBurger", newBurger);

    $(document).on("click","#devour", devourBurger);

    function devourBurger() {
	var id = $("#id").attr("value");
	console.log("devouring");
	$.ajax({
	    method: "PUT",
	    url: "/" + id
	}).done(function() {
	    window.location.href = "/";
	});
    };

    
    function newBurger(e) {
	document.querySelectorAll("input, select").forEach(function(el){
	    newOrder[el.id] = el.value;
	});
	//newOrder = $("#burg").val().trim();
	$.post("/burgers", newOrder, function(response) {
	    console.log("new order");
	    window.location.href = "/";
	});
    }; 

});
