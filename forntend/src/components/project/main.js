
let container = document.getElementById('lab-content');

function element() {
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let loc = document.createElement('p');
    let img = document.createElement('img');
    let imgLink = document.createElement('a');
    imgLink.href = 'lab.html';

    img.src = "img/alfa.jpeg";
    let head = document.createTextNode('معمل البرج');
    let locc = document.createTextNode('ديروط');



    title.appendChild(head);
    loc.appendChild(locc);

    imgLink.appendChild(img);
    card.appendChild(imgLink)
    card.appendChild(title);
    card.appendChild(loc);
    
    container.appendChild(card);



}
