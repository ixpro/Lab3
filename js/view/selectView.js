//SelectView Object constructor
var SelectView = function (container,model) {
 
	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responded to interaction)
	this.numberOfGuests = container.find("#pplNbr");
	this.numberOfGuests.val(model.getNumberOfGuests());

	this.dishList = container.find("#dishList");

	var allDishes = model.getAllDishes();

	// Generating the dishes list html
	for (var i = 0; i < allDishes.length; i++) {

		  // <li id="dishId">
		  // 	<a href="dishInfo.html"> <img src="images/meatballs.jpg" alt="Meatballs" > </a>
		  // 	<div class="dishName"></div>
		  // 	<div class="dishDesc"></div>
		  // </li>	

		dishHtml = "";
		dishHtml += ' <li id="' + allDishes[i].id + '">';
		dishHtml += '<a href="dishInfo.html"> <img src="images/'+ allDishes[i].image+'" alt="' + allDishes[i].name + '" > </a>';
		dishHtml += '<div class="dishName">'+ allDishes[i].name +'</div></li>';
		//dishHtml += '<div class="dishDesc">'+ allDishes[i].type +'</div></li>';

		this.dishList.append(dishHtml);
	};
	
}
 
