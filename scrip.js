function calculatetip(event){
    event.preventDefault();
    let conta = document.getElementById('conta').value;
    let serviço =document.getElementById('serviço').value;
    let pessoas = document.getElementById('pessoas').value;
   if(pessoas == ""|pessoas <=1){
       pessoas=1
       document.getElementById('each').style.display='none'
   }else{
    document.getElementById('each').style.display='block'
   }
   let total = (conta * serviço) / pessoas;
   total = total.toFixed(2);
   document.getElementById('tip').innerHTML = total;
   document.getElementById('totaltip').style.display = 'block';
}
document.getElementById('totaltip').style.display= 'none';
document.getElementById('each').style.display = 'none';
document.getElementById('formes').addEventListener('submit',calculatetip);