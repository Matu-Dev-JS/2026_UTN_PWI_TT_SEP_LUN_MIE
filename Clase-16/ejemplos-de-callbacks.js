
function caminar(cuadras, papelConAccion){
    console.log("Camino " + cuadras + ' cuadras')
    papelConAccion()
}

caminar(
    5, 
    function (){
        console.log("saltar 5 veces")
    }
)

caminar(
    10, 
    function (){
        console.log("baila!")
    }
)


/* 
llamarAlServidor(
    function(result, error){
        if(error){
            alertar()
        }
        renderRespuesta(result)
    }
)
*/