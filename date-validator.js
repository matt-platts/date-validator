// Date validator
// by Matt Platts (mattplatts@gmail.com)
// validates that a date is valid and not the 31st of february for example....

function validateDate(dateText){

    var comp = dateText.split(/[\/-]/);

    var d = parseInt(comp[0], 10);
    var m = parseInt(comp[1], 10);
    var y = parseInt(comp[2], 10);
    var date = new Date(y+"/"+m+"/"+d);
    m--;

  return date.getFullYear() == y && date.getMonth() == m && date.getDate() == d;
}
