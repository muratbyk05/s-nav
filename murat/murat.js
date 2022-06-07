 let sonuc = document.getElementById("sonuc")
function oynat(){

 let oynattt=document.getElementById("oynatt").value

  let bir= Math.floor(Math.random()*100);
  console.log(bir)

if(bir >= oynattt){

  sonuc.innerHTML="büyük KÜÇÜK sayı girdiniz"
  }

  else if (oynattt==bir){
      sonuc.innerHTML="dogru tahmin"+bir
  }

  else{
    sonuc.innerHTML=("daha BÜYÜK bisayı veriniz")

  }
}
 


function sil(){

    let oynattt=document.getElementById("oynatt").value
    oynattt=document.getElementById("oynatt").value=""

}