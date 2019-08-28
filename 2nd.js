var myvar;
var contatore = 0;
var secondi = 0;
var minuti = 0;

function crono(){

contatore = 0;
secondi = 0;
minuti = 0;

myvar = setInterval(function(){
  if(minuti < 10){
    if(secondi < 10){
      document.getElementById("tempo").innerHTML = "0"+minuti+":0"+secondi+":"+contatore;
    }else{
      document.getElementById("tempo").innerHTML = "0"+minuti+":"+secondi+":"+contatore;
    }
  }else{
    if(secondi < 10){
      document.getElementById("tempo").innerHTML = minuti+":0"+secondi+":"+contatore;
    }else{
      document.getElementById("tempo").innerHTML = minuti+":"+secondi+":"+contatore;
    }
  }
  contatore++;
  if(contatore == 99){
    contatore = 0;
    secondi = secondi + 1;
  }
  if(contatore >= 98 && secondi >= 59) {
    contatore = 0;
    secondi = 0;
    minuti = minuti + 1;
  }},10);
}

function ripristino(){
  clearInterval(myvar);
}
