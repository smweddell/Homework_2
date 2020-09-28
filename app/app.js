//This is my crontoller for my app
//e, evt is short for event

function showText(data){
    $(".content").html(data);
    $(".loader").css("display", "none");
}

function initlisteners(){
    //this is using e to find id
    $("#home").click(function(e){
        let btnId = this.id;
        $(".loader").css("display", "block");
        MODEL.gethome(showText);
    });

    $("#about").click(function(e){
        let btnId = this.id;
        $(".loader").css("display", "block");
        MODEL.getabout(showText);
    });

    $("#products").click(function(e){
        let btnId = this.id;
        $(".loader").css("display", "block");
        MODEL.getproducts(showText);
    });

    $("#contact").click(function(e){
        let btnId = this.id;
        $(".loader").css("display", "block");
        MODEL.getcontact(showText);
    });
}

$(document).ready(function() {
    initlisteners();
});