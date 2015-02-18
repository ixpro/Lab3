$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	

	if( $('#selectView').length )
	{
	    //And create the needed controllers and views
		var selectView = new SelectView($("#selectView"), model);
	};

	if( $('#dishInfoView').length )
	{
	    //And create the needed controllers and views
		var dishInfoView = new DishInfoView($("#dishInfoView"), model);
	}

	if( $('#overviewView').length )
	{
	    //And create the needed controllers and views
		var overviewView = new OverviewView($("#overviewView"), model);
	}

	if( $('#recipeView').length )
	{
	    //And create the needed controllers and views
		var recipeView = new RecipeView($("#recipeView"), model);
	}	

});