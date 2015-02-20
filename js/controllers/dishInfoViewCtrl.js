//DishInfoViewCtrl Object constructor
var DishInfoViewCtrl = function (view,model) {

	// this.view = view;
	// this.model = model;

	// binding the click event of plusButton to the SelectViewCtrl
	view.plusButton.click(function(){
			// updating the number of guests parameter in the model
	 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 });
	 
	view.minusButton.click(function(){
			// updating the number of guests parameter in the model
			model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	 });

	view.confirmDinnerBtn.click(function(){
			// showing the overview
			showView("overviewView");
			model.notifyObservers();
	 });


	view.confirmDishBtn.click(function(){
			// adding selected dish to the model
			model.addSelectedDishToMenu();
			showView("selectView");
	 });
}

