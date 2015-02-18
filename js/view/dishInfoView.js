//DishInfoView Object constructor
var DishInfoView = function(container,model) {
 
	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responded to interaction)
	this.numberOfGuests = container.find("#pplNbr");
	this.numberOfGuests.val(model.getNumberOfGuests());
	
	this.dishInfoDescr = container.find("#dishInfoDescr");

	var selectedDish = model.getSelectedDish();

		// <h2>Lasagne</h2>
		// <img class="dishInfoImg" src="images/lasagne.jpg" alt="Lasagne" >
		// <p></p>

	// generating dish Description html
	dishHtml =  "<h2>" +selectedDish.name+ "</h2>";
	dishHtml += '<img class="dishInfoImg" src="images/' + selectedDish.image +'" alt="'+ selectedDish.name +'" >' ;
	dishHtml += '<p>' + selectedDish.description + '</p>';

	//prepending to the dishInfoDescr container
	this.dishInfoDescr.prepend(dishHtml);

	  	// <tr>
	  	// 	<td class="aCenter">2 tbsp</td>
	  	// 	<td class="aLeft">olive oil</td>
	  	// 	<td class="aLeft">SEK</td>
	  	// 	<td class="aRight">0.20</td>
	  	// </tr>
	
	
	//generating the ingridients html		
	$.each( selectedDish.ingredients, function( index, ingredient ) {

		ingridHtml = "<tr>";
		ingridHtml += '<td class="aCenter">'+ ingredient.quantity + ' ' + ingredient.unit + '</td>';
		ingridHtml += '<td class="aLeft">' +ingredient.name + '</td>';
		ingridHtml += '<td class="aLeft">SEK</td>';
		ingridHtml += '<td class="aRight">' + ingredient.price+ '</td></tr>';
		$('#ingridientsTable tbody').append(ingridHtml);
	});

	$('#ingridTotalSum').append(model.getSelectedDishPrice());


	
}
 