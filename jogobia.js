function btn (){
    function FazerBolo (escolha){
        
    
        
        if ( escolha == "1") {
             window.location.href="parabénsbia.html";
        }
        else {
           window.location.href="gameover.html";
        }
    }
    var  escolha = prompt ("digite a opção correta;");
    FazerBolo (escolha );
    }