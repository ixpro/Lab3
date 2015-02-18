//OverviewView Object constructor
var OverviewView = function(container,model) {

  this.dishList = container.find("#dishList");

  this.numberOfGuests = container.find("#nbPpl");
  this.numberOfGuests.html( model.getNumberOfGuests());

  //  <li>
  // 	<img src="images/meatballs.jpg" alt="Meatballs">
  // 	<div class="dishName">Lasagne</div>
  // 	<div class="dishPrice">77.20 SEK</div>
  // </li>

  // <li id="totalCell">
  // 	<div id="totalLbl">Total:</div>
  // 	<div id="totalPrice">341.20 SEK</div>
  // </li>	


  var menu = model.getFullMenu();

  var menuListHtml = "";

  	$.each( menu, function( index, dish ) {

		dishHtml = "";
		dishHtml += '<li>';
		dishHtml += '<img src="images/'+ dish.image+'" alt="' + dish.name + '" >';
		dishHtml += '<div class="dishName">'+ dish.name +'</div>';
		dishHtml += '<div class="dishPrice">'+ model.getDishPrice(dish) +' SEK</div></li>';

		$('#dishList').append(dishHtml);
	});

  	var totalPrice =  '<li id="totalCell">';
        totalPrice += '<div id="totalLbl">Total:</div>';
        totalPrice += '<div id="totalPrice">' + model.getTotalMenuPrice().toString() + 'SEK</div>';
        totalPrice += '</li>';

  	this.dishList.append(totalPrice);

}