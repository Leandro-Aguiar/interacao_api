function btenviar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    

    if (email.length >= 3 && senha.length >= 3){
        alert("Dados enviados, aguarde...")

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