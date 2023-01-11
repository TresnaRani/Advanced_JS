
const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function (e) {
  if (e.repeat) {
    alert("do not repeat");
  }
});

/*

textarea.addEventListener("keypress",function(){

    console.log("Keypress")
})


textarea.addEventListener("keyup",function(){

    console.log("Keyup")
})

textarea.addEventListener("keydown",function(){

    console.log("Keydown")
})
*/

