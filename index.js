let hide = true

function sayHello(){
    if (hide == true){
        document.getElementById('kartinka').src = 'bg.png'
        hide = false
    }
    else{
        document.getElementById('kartinka').src = ''
        hide = true
    }
}