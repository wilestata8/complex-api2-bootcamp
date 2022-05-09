const body = document.querySelector("body");
const button = document.querySelector("button");
let cityInput = document.querySelector('input').value;


const getEvents = (city) =>{
  let cityInput = document.querySelector('input').value;
 
  let url = (`https://app.ticketmaster.com/discovery/v2/events.city=json?city=${cityInput}&apikey=0eug3XFQrN9nSwDDEV8HoS0Lnyz4Axs1`);
  
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then((data) => {
     const {name} = data._embedded.events[0, 1, 2];
     const {url} = data._embedded.events[0].images[0];
     const {localDate, localTime} = data._embedded.events[0].dates.start;
     document.querySelector(".event").innerText = name;
     document.querySelector(".picture").src = url;
     document.querySelector(".date").innerText = localDate;
     document.querySelector(".time").innerText = localTime;
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}
button.addEventListener("click", function() {
  getEvents();
});







/*document.querySelector('button').addEventListener('click', getEvents)
const body = document.querySelector('body')
let cityInput = document.querySelector('input').value


  
async function getEvents(city){
  let cityInput = document.querySelector('input').value
  let url = `https://app.ticketmaster.com/discovery/v2/events.city=json?city=${cityInput}&apikey=0eug3XFQrN9nSwDDEV8HoS0Lnyz4Axs1`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then((data) => {
     const {name} = data._embedded.events[0, 1, 2];
     const {url} = data._embedded.events[0].images[0];
     const {localDate, localTime} = data._embedded.events[0].dates.start;
     document.querySelector(".event").innerText = name;
     document.querySelector(".picture").src = url;
     document.querySelector(".date").innerText = localDate;
     document.querySelector(".time").innerText = localTime;
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}
  const getWeather = () => {
    apiKey =  "98f4a0f51c392d3dfa1dd05728dae780"
    let cityInput = document.querySelector('input').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`
    +cityInput
    +"&units=metric&appid="
    + this.apiKey
    )

    .then(res => res.json() // parse response as JSON
    .then(data => this.displayWeather(data)),

  displayWeather(data) {

  }*/
  
  


    


    
  

