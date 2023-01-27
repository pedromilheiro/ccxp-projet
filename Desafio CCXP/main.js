const ticket = [];

function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highLight");
}

selectCard(selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ticket.includes(selector)) ticket.pop(selector);
    else ticket.push(selector)
}

showSelectedCards = () => {
    if(ticket.length > 0) alert("Ingressos Selecionados:" + ticket);
}