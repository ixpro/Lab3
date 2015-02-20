function showView(viewId)
{
	$(".view").not("#"+viewId).hide();
	$("#"+viewId).show();
}


$(function() {

	//We instantiate our model
	var model = new DinnerModel();
	
	introView      	 = new IntroView($("#introView"), model);
	introViewCtrl  	 = new IntroViewCtrl(introView, model);

	selectView       = new SelectView($("#selectView"), model);
	selectViewCtrl 	 = new SelectViewCtrl(selectView, model);

	dishInfoView     = new DishInfoView($("#dishInfoView"), model);
	dishInfoViewCtrl = new DishInfoViewCtrl(dishInfoView, model);

	overviewView     = new OverviewView($("#overviewView"), model);
	overviewViewCtrl = new OverviewViewCtrl(overviewView, model);

	recipeView 		 = new RecipeView($("#recipeView"), model);
	recipeViewCtrl   = new RecipeViewCtrl(recipeView, model);

	showView("introView");
});