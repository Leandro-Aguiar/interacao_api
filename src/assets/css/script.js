var idx = 0;

function carrossel(){
    idx++;

    if(idx > document.querySelectorAll("#img-carrousel img").length-1){
        idx = 0;
        
    }
    
    console.log(idx);
    
    $(document.getElementById("img-carrousel")).css('-webkit-transform',  "translateX(" + -idx*688 + "px)");
    
}

setInterval(carrossel, 4000);




  const dots = document.getElementsByClassName("dot");
  
  
  

function promocao1() {
    
    
       if ($(carousel1).css('display') == 'none') {
           $(carousel1).show();
           $(carousel2).hide();
           $(carousel3).hide();
       } else {
           $(carousel1).show();
           $(carousel2).hide();
           $(carousel3).hide();
       }     
 }

function promocao2() {
    
    if ($(carousel2).css('display') == 'none') {
        $(carousel2).show();
        $(carousel1).hide();
        $(carousel3).hide();
    } else {
        $(carousel2).show();
        $(carousel1).hide();
        $(carousel3).hide();
    }     
}

function promocao3(){
    
    if ($(carousel3).css('display') == 'none') {
        $(carousel3).show();
        $(carousel1).hide();
        $(carousel2).hide();
    } else {
        $(carousel3).show();
        $(carousel1).hide();
        $(carousel2).hide();
    }     
}


function bote(){
    
    
    if ($(depo1).css('display') == 'block') {
        $(depo1).hide();
        $(depo3).show();
        return
    } 

    if ($(depo2).css('display') == 'block') {
        $(depo2).hide();
        $(depo1).show();
        return
    } 

    if ($(depo3).css('display') == 'block') {
        $(depo3).hide();
        $(depo2).show();
        return
    } 
}

function botd() {
    

    
    if ($(depo1).css('display') == 'block') {
        $(depo1).hide();
        $(depo2).show();
        return
    }

    if ($(depo2).css('display') == 'block') {
        $(depo2).hide();
        $(depo3).show();
        return
    }

    if ($(depo3).css('display') == 'block') {
        $(depo3).hide();
        $(depo1).show();
        return
    }




}

function mostrarlogin(){
    var m1 = document.getElementById('menucel');
    var t1 = document.getElementById('teste1');
    var b1 = document.getElementById('busca1');
    var l1 = document.getElementById('cadcompr1');
 
    if (m1.style.display === 'none')
    {
 
        t1.style.display = 'none';
        m1.style.display = 'block';
        b1.style.display = 'block';
        l1.style.display = 'block';
 
    } else{
 
        t1.style.display = 'block';
        m1.style.display = 'none';
        b1.style.display = 'none';
        l1.style.display = 'none';
 
 
 
    }
    
    
 
 
 
 
 }

