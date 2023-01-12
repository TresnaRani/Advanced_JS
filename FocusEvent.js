

const input = document.querySelector("input")

input.addEventListener("blur",function(e){
    //console.log(e.target.value);
    input.value = e.target.value.toUpperCase();
   // input.style.backgroundColor = "yellow";
    //input.style.padding = "0"
});

input.addEventListener("focus",function(){
    //console.log("focus");

    input.style.backgroundColor = "red";
    input.style.padding = "2rem"
});

/*input.addEventListener("focusin",function(){
    console.log("focusin");
});

input.addEventListener("focusout",function(){
    console.log("focusout");
});
*/