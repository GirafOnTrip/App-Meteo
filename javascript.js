let ville;

if("geolocation" in navigator) {
  
  navigator.geolocation.watchPosition((position) => {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lon=${position.coords.longitude}&lat=${position.coords.latitude}&appid=e2403bfe9d322cb0130c018631baeab4&units=metric`;
    console.log(url);
    
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send()
    
    requete.onload = function () {
      if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200){
          
          let response = requete.response;
          let temperature = response.main.temp;
          let ville       = response.name;
          document.getElementById('ville').textContent = ville;
          document.getElementById('temperature_label').textContent = temperature;
          
        }
        else {
          alert('Un problème est survenu, merci de revenir plus tard');
        }   
      }   
    }
  }, erreur, options);

}
else {
  
  ville = 'Paris';
  recevoirTemperature(ville);
}

var options = {

  enableHighAccuracy: true
}

let btn = document.getElementById('changer');
btn.addEventListener('click', () => {
  
  ville = prompt('Quelle ville souhaitez-vous choisir ?'); 
  recevoirTemperature(ville);
});

function erreur() {
  ville = 'Paris';
  recevoirTemperature(ville);
}

function recevoirTemperature(ville) {

const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=e2403bfe9d322cb0130c018631baeab4&units=metric`;

let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send()

requete.onload = function () {
  if (requete.readyState === XMLHttpRequest.DONE) {
   if (requete.status === 200){

    let response = requete.response;
    let temperature = response.main.temp;
    let ville       = response.name;
    document.getElementById('ville').textContent = ville;
    document.getElementById('temperature_label').textContent = temperature;

  }
   else {
     alert('Un problème est survenu, merci de revenir plus tard');
   }   
 }   
}
}





