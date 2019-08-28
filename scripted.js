var array = [];
var controllo = false;
var ciclo = true;
var contatore = 0;



function generate(numbers, nbit) {

  for(j = 0; j < numbers; j++){
    var binario = 0;
    var decimale = 0;
    var esadecimale = 0;
    var stringabin = "";
    var dec = "";
    var hexa = "";
    array[j] = new Array(3);
    decimale = Math.floor(Math.random() * Math.pow(2,nbit));
    dec = decimale.toString();
    for(i = 0; i < nbit; i++){
      binario = decimale%2;
      decimale = Math.floor(decimale/2);
      stringabin = binario.toString() + stringabin;
    }
    decimale = parseInt(dec,10);
    for(i = 0; i < (nbit/4); i++){
      esadecimale = decimale%16;
      decimale = Math.floor(decimale/16);
      hexa = esadecimale.toString(16).toUpperCase() + hexa;
    }
    array[j][0] = dec;
    array[j][1] = stringabin;
    array[j][2] = hexa;
  }

}

function menu(conv,n,b){
  crono();
  var a = document.getElementById(conv).value;
  var num = parseInt(document.getElementById(n).value,10);
  var bit = parseInt(document.getElementById(b).value,10);

  generate(num,bit);

  switch(a){
    case "0":
      //binario to decimale
      game(1,0,num,0);
      break;
    case "1":
      //decimale to binario
      game(0,1,num,0);
      break;
    case "2":
      //binario to esadecimale
      game(1,2, num,0);
      break;
    case "3":
      //esadecimale to binario
      game(2,1, num,0);
      break;
  }

}

function game(ip,ic, max,r){

 // ip:indice print  ic: indice control
  if(r < max){
    document.getElementById("question").innerHTML = array[r][ip];
    document.getElementById("answer").onkeydown = function(e){if(e.keyCode == 13){
      controllo = true;
      game(ip,ic,max,r);
    }}
    document.getElementById("check").onclick = function() {
      controllo = true;
      game(ip,ic,max,r);
    };
    if(controllo){
      var pippo = document.getElementById("answer").value;
      if(pippo == array[r][ic]){
        r++;
        controllo = false;
        game(ip,ic,max,r);
      }
      controllo = false;
    }
    game(ip,ic,max,r);
  }
  ripristino();
  alert("Your Time!\n" + minuti +":"+ secondi+ ":" + contatore);

}

function checkname() {
  if(document.getElementById("name").value != ""){
    idname = document.getElementById("inputname").id;
    idmenu = document.getElementById("inputgame").id;
    document.getElementById("msgcheck").innerHTML = "";
    shidden(idname,idmenu);
  }else{
    document.getElementById("msgcheck").innerHTML = "Enter a valid name";
  }
}

function shidden(id1,id2){
  //document.getElementById(p1).innerHTML= document.getElementById(p2).innerHTML;
  document.getElementById(id1).style.display="none";
  document.getElementById(id2).style.display="block";
}
