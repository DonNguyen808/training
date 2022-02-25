const eren = document.querySelector('#eren')
const mikasa = document.querySelector('#mikasa')
const armin = document.querySelector('#armin')
const erenSound = document.querySelector('#erenSound')


document.querySelector('#erenNext').addEventListener('click', erenNext)
document.querySelector('#mikasaNext').addEventListener('click', mikasaNext)
document.querySelector('#arminNext').addEventListener('click', arminNext)

function erenNext() {
    eren.classList.toggle('hidden')
    mikasa.classList.add('hidden')
    armin.classList.add('hidden')
    erenSound.classList.toggle('hidden')

    
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

// pseudo code
//readable
// template string






document.querySelector('#getWeekday').addEventListener('click', findMusic)

function findMusic() {
    const d = new Date();


}

