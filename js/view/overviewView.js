//OverviewView Object constructor
var OverviewView = function(container,model) {

    this.dishList = container.find("#overviewList ul");


    this.editDinnerBtn = container.find(".editDinnerBtn");
    this.printRecipeBtn = container.find(".printRecipeBtn");

    this.numberOfGuests = container.find("#nbPpl");
    model.addObserver(this);


    this.update = function(param){

          this.dishList.empty();
          var nbGuests = model.getNumberOfGuests();
          this.numberOfGuests.html(nbGuests);

          var menu = model.getFullMenu();
          var menuListHtml = "";

          $.each( menu, function( index, dish ) {

        		dishHtml = "";
        		dishHtml += '<li>';
        		dishHtml += '<img src="images/'+ dish.image+'" alt="' + dish.name + '" >';
        		dishHtml += '<div class="dishName">'+ dish.name +'</div>';
        		dishHtml += '<div class="dishPrice">'+ model.getDishPrice(dish) *nbGuests +' SEK</div></li>';

        		$('#overviewList ul').append(dishHtml);
        	});

          	var totalPrice =  '<li id="totalCell">';
                totalPrice += '<div id="totalLbl">Total:</div>';
                totalPrice += '<div id="totalPrice">' + (model.getTotalMenuPrice() * nbGuests ).toString() + 'SEK</div>';
                totalPrice += '</li>';

          	this.dishList.append(totalPrice);
    }

    this.update();


}