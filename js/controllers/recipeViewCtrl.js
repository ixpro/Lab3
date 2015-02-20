//SelectView Object constructor
var RecipeViewCtrl = function (view,model) {

	this.view = view;
	this.model = model;

	view.editDinnerBtn.click(function(){
			// updating the number of guests parameter in the model
			showView("selectView");
	 });
}

