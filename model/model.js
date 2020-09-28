{/* <link href="css/styles.css" rel="stylesheet" /> */}

var MODEL = (function(){
    var _showAlert = function(buttonName){
        alert("My button is " + buttonName);
    };

    var _gethome = function(callback){
        let text = "<h1>Binary Coding</h1>"+"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut iusto, at dignissimos in optio facere a vero harum voluptates voluptatibus ratione quidem tenetur ipsum maxime perferendis consectetur placeat? Sunt.</p>"+"<img src='images/binary.jpg'>";

        return callback(text);
    }

    var _getabout = function(callback){
        let text = "<h1>Techno Circle</h1>"+"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut iusto, at dignissimos in optio facere a vero harum voluptates voluptatibus ratione quidem tenetur ipsum maxime perferendis consectetur placeat? Sunt.</p>"+"<img src='images/techno.jpg'>";

        return callback(text);
    }

    var _getproducts = function(callback){
        let text = "<h1>Beautiful Forest</h1>"+"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut iusto, at dignissimos in optio facere a vero harum voluptates voluptatibus ratione quidem tenetur ipsum maxime perferendis consectetur placeat? Sunt.</p>"+"<img src='images/beautiful_forestry.jpg'>";

        return callback(text);
    }

    var _getcontact = function(callback){
        let text = "<h1>Contact Design</h1>"+"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut iusto, at dignissimos in optio facere a vero harum voluptates voluptatibus ratione quidem tenetur ipsum maxime perferendis consectetur placeat? Sunt.</p>"+"<img src='images/design.jpg'>";

        return callback(text);
    }

    return{
        showAlert: _showAlert,
        gethome: _gethome,
        getabout: _getabout,
        getproducts: _getproducts,
        getcontact: _getcontact,
    };
})();