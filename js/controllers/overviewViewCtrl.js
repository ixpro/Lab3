//SelectView Object constructor
var OverviewViewCtrl = function (view,model) {

	this.view = view;
	this.model = model;

	view.editDinnerBtn.click(function(){
			// updating the number of guests parameter in the model
			showView("selectView");
	 });

	 view.printRecipeBtn.click(function(){
			// updating the number of guests parameter in the model
			showView("recipeView");
	 });

}

