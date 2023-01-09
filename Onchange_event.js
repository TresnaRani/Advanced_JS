

const input = document.querySelector("input[name=name]");
input.addEventListener("change",changeHandler);

function changeHandler(e){

    //console.log("changed")
    //console.log(e.type)
   // console.log(e.target)
    console.log(e.target.className);
    console.log(e.target.value);


}