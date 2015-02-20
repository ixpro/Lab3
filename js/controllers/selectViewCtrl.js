//SelectView Object constructor
var SelectViewCtrl = function (view,model) {

	this.view = view;
	this.model = model;

	// binding the click event of plusButton to the SelectViewCtrl
	view.plusButton.click(function(){
			// updating the number of guests parameter in the model
	 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 		view.update();
	 });
	 
	view.minusButton.click(function(){
			// updating the number of guests parameter in the model
			model.setNumberOfGuests(model.getNumberOfGuests() - 1);
			view.update();
	 });


	view.confirmDinnerBtn.click(function(){
			// updating the number of guests parameter in the model
			showView("overviewView");
			model.notifyObservers();
	 });


	view.filter.change(function() {
		view.filterDishesByType();
	});


	// binds the click to all li currently in the view and
	$( document ).on( "click", view.dishList.selector + " li", function(e) {
			var id = $(this).attr("id");
			model.setSelectedDish(id);
	        showView("dishInfoView");
	});
}

