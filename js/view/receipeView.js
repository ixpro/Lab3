//RecipeView Object constructor
var RecipeView = function (container,model) {
 
	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responded to interaction)
	this.recipeList = container.find("#recipeList");
	  this.numberOfGuests = container.find("#nbPpl");
	  this.numberOfGuests.html( model.getNumberOfGuests());
	var menu = model.getFullMenu();

	// Generating the dishes list html
	$.each( menu, function( index, dish ) {

		 //  <li class="row">	
			// <div class="col-md-2">
			// 	<img class="dishImg" src="images/meatballs.jpg" alt="Meatballs" >
			// </div>
			// <div class="col-md-4">
			// 	<h3>Lasagne</h3>
			// 	<p></p>
			// </div>
			// <div class="col-md-6">
			// 	<h3>Preparation</h3>
			// 	<p></p>						
			// </div>
		 //  </li>

		recipeHtml = '<li class="row">';
		recipeHtml += '<div class="col-md-2">';
		recipeHtml += '<img class="dishImg" src="images/' + dish.image + '" alt="' +dish.name + '">';
		recipeHtml += '</div>';

		recipeHtml += '<div class="col-md-4">';
		recipeHtml += '<h3>' + dish.name + '</h3>';
		recipeHtml += '<p>'+dish.description+'</p>'
		recipeHtml += '</div>';

		recipeHtml += '<div class="col-md-6">';
		recipeHtml += '<h3>Preparation</h3>';
		recipeHtml += '<p>**** No information available in the model *****</p>';
		recipeHtml += '</div>';
		recipeHtml += '</li>';

		$("#recipeList").append(recipeHtml);
	});
	
}
 
