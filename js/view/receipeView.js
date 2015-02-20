//RecipeView Object constructor
var RecipeView = function (container,model) {
 
	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responded to interaction)
	this.recipeList = container.find("#recipeList");
	this.numberOfGuests = container.find("#nbPpl");
	this.editDinnerBtn  = container.find(".editDinnerBtn");
	model.addObserver(this);


    this.update = function(param){

	        var nbGuests = model.getNumberOfGuests();
	        this.numberOfGuests.html(nbGuests);

			var menu = model.getFullMenu();

			this.recipeList.empty();
			// Generating the dishes list html

			for (var i = 0; i < menu.length; i++) {
				dish = menu[i];
				var recipeHtml = '<li class="row">';
					recipeHtml += '<div class="col-md-2">';
					recipeHtml += '<img class="dishImg" src="images/' + dish.image + '" alt="' +dish.name + '">';
					recipeHtml += '</div>';

					recipeHtml += '<div class="col-md-4">';
					recipeHtml += '<h3>' + dish.name + '</h3>';
					recipeHtml += '<p></p>'
					recipeHtml += '</div>';

					recipeHtml += '<div class="col-md-6">';
					recipeHtml += '<h3>Preparation</h3>';
					recipeHtml += '<p>'+dish.description+'</p>';
					recipeHtml += '</div>';
					recipeHtml += '</li>';

				this.recipeList.append(recipeHtml);				
			};
	}
	this.update();
}
 
