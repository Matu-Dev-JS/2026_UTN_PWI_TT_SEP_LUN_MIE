let settings = {
    lang: 'es',
    zoom: 100,
    theme: 'dark'
}

function setSetting (value){
    settings = value
    render()
}

const langBtnHTML = document.getElementById("lang-btn")
langBtnHTML.addEventListener(
    'click',
    function (){
        if(settings.lang === 'es'){
            changeLangTo('us')
        }
        else if(settings.lang === 'us'){
            changeLangTo('es')
        }
    }
)

const spanHTML = document.getElementById('text')

function render (){
    
    if(settings.lang === 'es'){
        spanHTML.innerText = 'Hola mundo'
        langBtnHTML.innerText = 'Cambiar a ingles'
    }
    else if (settings.lang === 'us'){
        spanHTML.innerText = 'Hello world'
        langBtnHTML.innerText = 'Cambiar a español'
    }
}

render()



/* 
LOS ESTADOS SON INMUTABLES
Conceptualmente quien debe ser el UNICO encargado de la modificacion del valor de tu estado es setSetting (setter)
*/
function changeLangTo(lang){

    let settings_temp = {...settings}
    settings_temp.lang = lang
    setSetting(settings_temp)
}







