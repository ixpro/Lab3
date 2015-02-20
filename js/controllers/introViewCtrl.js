//SelectView Object constructor
var IntroViewCtrl = function (view, model) {

	this.view = view;
	this.model = model;

	//binding the click event of the confirmDinnerBtn to change the view
	view.createBtn.click(function(){
			// updating the number of guests parameter in the model
	 		showView("selectView");
	 });


}

