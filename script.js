
function começar(){
    milesimos = setInterval( function() {
        let cronometrom = document.getElementById("milesimos").innerHTML
        let somam = parseInt(cronometrom) + 1
        if (somam >= 100){
            somam = 0
        } 
            document.getElementById("milesimos").innerHTML = somam
    }, 10)
    segundos = setInterval(function(){
        let cronometros = document.getElementById("segundos").innerHTML
        let somas = parseInt(cronometros) + 1
        if (somas >= 60){
            somas = 0
        }
        document.getElementById("segundos").innerHTML = somas + "  :"
    }, 1000)
    minutos = setInterval(function(){
        let cronometromm = document.getElementById("minutos").innerHTML
        let somamm = parseInt(cronometromm) + 1
        document.getElementById("minutos").innerHTML = somamm + "  :"
    }, 60000)
}

function parar(){
    clearInterval(milesimos)
    clearInterval(segundos)
    clearInterval(minutos)
}
function recomecar(){
    clearInterval(milesimos)
    clearInterval(segundos)
    clearInterval(minutos)
    document.getElementById("milesimos").innerHTML = "00 "
    document.getElementById("segundos").innerHTML = "00: "
    document.getElementById("minutos").innerHTML = " 00: "
}
