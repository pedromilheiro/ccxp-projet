const day = document.getElementById("day");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const launch = "31 jan 2023";

function countdown (){
    const dateLaunch = new Date(launch);
    const today = new Date();

    const totalSec = (dateLaunch - today) / 1000;
    const days = Math.floor((totalSec / 3600 / 24));
    const hours = Math.floor((totalSec/3600) % 24);
    const minutes = Math.floor(totalSec/60) % 60;
    const seconds =  Math.floor(totalSec % 60);

    day.innerHTML = `<strong> ${days}D</strong>`
    hour.innerHTML = `<strong> ${hours}H</strong>`
    min.innerHTML = `<strong> ${minutes}M</strong>`
    sec.innerHTML = `<strong> ${seconds}S</strong>`
}

countdown();

setInterval (countdown, 1000);

const ticket = [];

function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highLight");
}

selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ticket.includes(selector)) ticket.pop(selector);
    else ticket.push(selector)
}

showSelectedCards = () => {
    if(ticket.length > 0) alert("Ingressos Selecionados:" + ticket);
}