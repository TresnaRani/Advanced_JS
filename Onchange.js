

  /*const programs = document.querySelectorAll("input[name=program]");

 //console.log(programs);


 Array.from(programs).map((program) => {

    program.addEventListener("change",programHandler);


 });

 function programHandler(e){

    if(e.target.checked){
        console.log("checked");

    }
 } */

 const deparment = document.querySelector("#department")
 //console.log(deparment)

 deparment.addEventListener('change',handleDepartment)

 function handleDepartment(e){

    console.log("selected")



 }