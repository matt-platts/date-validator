// Date validator
// by Matt Platts (mattplatts@gmail.com)
// Validates that a date is valid and not the 31st of february for example....

function validateDate(dateText){

    // first a regex check for dd/mm/yyyy or dd-mm-yyyy (both are supported)
    var re = /\d{2}(\/|-)\d{2}(\/|-)\d{4}/;
    if (!dateText.match(re)){ return false; }
	
    var components = dateText.split(/[\/-]/);

    var d = parseInt(components[0], 10);
    var m = parseInt(components[1], 10);
    var y = parseInt(components[2], 10);
    var date = new Date(y+"/"+m+"/"+d);
    m--; // because months are indexed from 0 not 1

  return date.getFullYear() == y && date.getMonth() == m && date.getDate() == d;
}
