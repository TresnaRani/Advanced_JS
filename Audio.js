


for(var i=0; i<3 ; i++){

    document.querySelectorAll(".muButton")[i].addEventListener("click",function(){


        var text =this.innerHTML;
        console.log(text);

        switch(text)
        {
            case "a":
                var audio = new Audio("https://youtu.be/gbw7usi9rs8.mp3");
                audio.play();
                break;
                
                case "b":
                    var audio = new Audio("https://gaana.com/album/pathaan-hindi.mp3");
                    audio.play();
                    break;

                    
                    case "c":
                        var audio = new Audio("https://gaana.com/album/pathaan-hindi.mp3");
                        audio.play();
                        break;
        

        }


    });
}