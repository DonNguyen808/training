const eren = document.querySelector('#eren')
const mikasa = document.querySelector('#mikasa')
const armin = document.querySelector('#armin')


document.querySelector('#erenNext').addEventListener('click', erenNext)
document.querySelector('#mikasaNext').addEventListener('click', mikasaNext)
document.querySelector('#arminNext').addEventListener('click', arminNext)

function erenNext() {
    eren.classList.toggle('hidden')
    mikasa.classList.add('hidden')
    armin.classList.add('hidden')
    
}
function mikasaNext() {
    eren.classList.add('hidden')
    mikasa.classList.toggle('hidden')
    armin.classList.add('hidden')
    
}
function arminNext() {
    eren.classList.add('hidden')
    mikasa.classList.add('hidden')
    armin.classList.toggle('hidden')
    
}

/*
i click eren and it shows the image

add event listener to h2 eren

toggle img class 




*/