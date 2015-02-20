//SelectView Object constructor
var SelectView = function (container,model) {
 
		// Get all the relevant elements of the view (ones that show data
		// and/or ones that responded to interaction)
		this.numberOfGuests = container.find(".pplNbr");
		this.plusButton  	= container.find(".plusButton");
		this.minusButton 	= container.find(".minusButton");
		this.menuList    	= container.find(".menuList");

		this.filter    		= container.find("#filter");

		this.confirmDinnerBtn = container.find(".confirmDinnerBtn");

		this.dishFilter      = container.find("#filter");

		// this.model = model;

		this.dishList   = container.find("#dishList");
		this.allDishes  = model.getAllDishes();
		model.addObserver(this);

		this.filterDishesByType = function(){

			var dishType = this.dishFilter.find("option:selected").val();

			this.dishList.empty();

			if(dishType !== "all")
				this.allDishes = model.getAllDishesByType(dishType);
			else
				this.allDishes = model.getAllDishes();

			// Generating the dishes list html
			for (var i = 0; i < this.allDishes.length; i++) {

				dishHtml = "";
				dishHtml += '<li id="' + this.allDishes[i].id + '">';
				dishHtml += '<img src="images/'+ this.allDishes[i].image+'" alt="' + this.allDishes[i].name + '" >';
				dishHtml += '<div class="dishName">'+ this.allDishes[i].name +'</div></li>';
				//dishHtml += '<div class="dishDesc">'+ allDishes[i].type +'</div></li>';
				this.dishList.append(dishHtml);
			};
		}

		this.update = function(param){

			// ingnoring the update of selected dish
			if(param == "selectedDish") return;

			//=== updating the number of guests value
			var nbPpl = model.getNumberOfGuests();
			this.numberOfGuests.val(nbPpl);
			//======================

			//========== Updating the menu List (at left)

			var fullMenu = model.getFullMenu();

			// generating the list of items in the menu
			var menuBodyHtml = "";
			for (var i = 0; i < fullMenu.length; i++) {

				var dish = fullMenu[i];
				menuBodyHtml += "<tr>";
				menuBodyHtml += "<td>" + fullMenu[i].name + "</td>";
				menuBodyHtml += '<td class="aRigh">' + model.getDishPrice(dish) * nbPpl  + "</td>";
				menuBodyHtml += "</tr>";
			};

			this.menuList.find("tbody").empty();
			this.menuList.find("tbody").html(menuBodyHtml);

			// generating the total
			var menuTotalHtml = "";
			menuTotalHtml += "<tr>";

			menuTotalHtml += "<td>SEK</td>";
			menuTotalHtml += "<td>";
			menuTotalHtml += model.getTotalMenuPrice() * nbPpl ;
			menuTotalHtml += "</td>";
			menuTotalHtml += "</tr>";

			this.menuList.find("tfoot").empty();
			this.menuList.find("tfoot").html(menuTotalHtml);		

			//=====================================

			// if the list of dishes needs to be updated
			if(param!== "guestsNbr" && param!="menu")
			{
					// updating the list of dishes
					this.filterDishesByType("all");
			}
		}
		this.update();
}
 
