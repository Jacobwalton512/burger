$(document).ready(function(){


$("#submit").on("click", function(){
    event.preventDefault();

    var newBurger= {
        burger_name: $("#input").val().trim(),
        devoured: false
    };

    console.log(newBurger);
})
















})