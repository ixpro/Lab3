//DishInfoView Object constructor
var DishInfoView = function(container,model) {
 
	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responded to interaction)
	this.model = model;
	this.numberOfGuests = container.find(".pplNbr");
	this.numberOfGuests.val(this.model.getNumberOfGuests());
	this.plusButton 	= container.find(".plusButton");
	this.minusButton 	= container.find(".minusButton");
	this.dishInfoDescr 	= container.find("#dishInfoDescr");

	this.menuList    	= container.find(".menuList");
	this.confirmDinnerBtn = container.find(".confirmDinnerBtn");
	this.confirmDishBtn   = container.find("#confirmDishBtn");
	this.preparation     = container.find("#preparation p");

	this.model.addObserver(this);

	this.update = function(param){

			var selectedDish = model.getSelectedDish();

			if(!selectedDish) return;

			var nbGuests = this.model.getNumberOfGuests();
			this.numberOfGuests.val(nbGuests);
			container.find("#ingridients h3 span").html(nbGuests);

			this.dishInfoDescr.empty();
			// generating dish Description html
			dishHtml =  "<h2>" +selectedDish.name+ "</h2>";
			dishHtml += '<img class="dishInfoImg" src="images/' + selectedDish.image +'" alt="'+ selectedDish.name +'" >' ;
			dishHtml += '<p></p>';

			this.preparation.html(selectedDish.description);

			//prepending to the dishInfoDescr container
			this.dishInfoDescr.prepend(dishHtml);
	

			//========== Updating the menu List (at left)

			var fullMenu = model.getFullMenu();
			// <tr>
			// 	<td class="pending">Pending</td>
			// 	<td class="aRight pending">0.00</td>
			// </tr>

			// generating the list of items in the menu
			var menuBodyHtml = "";
			for (var i = 0; i < fullMenu.length; i++) {

				var dish = fullMenu[i];
				menuBodyHtml += "<tr>";
				menuBodyHtml += "<td>" + fullMenu[i].name + "</td>";
				menuBodyHtml += '<td class="aRigh">' + model.getDishPrice(dish) * nbGuests  + "</td>";
				menuBodyHtml += "</tr>";
			};

			this.menuList.find("tbody").empty();
			this.menuList.find("tbody").html(menuBodyHtml);

			// generating the total
			var menuTotalHtml = "";
			menuTotalHtml += "<tr>";

			menuTotalHtml += "<td>SEK</td>";
			menuTotalHtml += "<td>";
			menuTotalHtml += model.getTotalMenuPrice() * nbGuests ;
			menuTotalHtml += "</td>";
			menuTotalHtml += "</tr>";

			this.menuList.find("tfoot").empty();
			this.menuList.find("tfoot").html(menuTotalHtml);		

			//generating the ingridients html
			$('#ingridientsTable tbody').empty();
			$('#ingridTotalSum').empty();
			$.each( selectedDish.ingredients, function( index, ingredient ) {
				ingridHtml = "<tr>";
				ingridHtml += '<td class="aCenter">'+ ingredient.quantity * nbGuests + ' ' + ingredient.unit + '</td>';
				ingridHtml += '<td class="aLeft">' +ingredient.name + '</td>';
				ingridHtml += '<td class="aLeft">SEK</td>';
				ingridHtml += '<td class="aRight">' + ingredient.price * nbGuests + '</td></tr>';
				$('#ingridientsTable tbody').append(ingridHtml);
			});

			$('#ingridTotalSum').append(model.getSelectedDishPrice() * nbGuests);
	}

	this.update();
}
 