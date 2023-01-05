
var count = 0;

document.querySelector("textarea").addEventListener("keypress",function(event){

    count++;
    var text = event.key;

    document.querySelector("p").innerHTML = "  You have pressed  " + text +"  and"+ "total press" + count 
;


})


