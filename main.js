const buttonClick = document.querySelector('button');

buttonClick.addEventListener('click', (e) => {
    sendFlowers(e);
})

function sendFlowers(e){
    window.location.href = 'pages/flower.html'    
}


