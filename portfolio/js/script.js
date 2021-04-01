var bezoeker = naam,leeftijd;
var naam;
var leeftijd = 18;

naam = prompt("wat is uw naam");


leeftijd = prompt("wat is uw leeftijd");


console.log(document.querySelector(".user"));

document.querySelector(".user").innerHTML ="Welkom, " + naam + leeftijd;

if(leeftijd <=17){
    document.querySelector(".user").style.backgroundColor = "red";
}
 else{
    document.querySelector(".user").style.backgroundColor = "green";
 };
 

 

 