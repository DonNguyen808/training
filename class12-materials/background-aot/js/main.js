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





// click
document.querySelector('#getWeekday').addEventListener('click', findMusic)

// function declaration
function findMusic() {
    // array
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // built in date
    const d = new Date("February 27, 2022");
    // grabs the array number
    let day = weekday[d.getDay()];
    // shows it on the dom with template string
    document.querySelector('#todayIs').innerText = `Today is ${day}. Here is some music for you`

    // switch statement - it will keep going down if dont have break
    // I keep forgetting to add the # on the queryselector
    switch(d.getDay()) {
        case 0:
            document.querySelector('#sunday').classList.toggle('hidden');
            // document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/57/d0/1a/57d01ad0f1c0192d3283f5231cc6ec8c.jpg')"
            // two ways to select the body
            // does this break the golden rule with css in js?
            // document.querySelector('body').style.color = "white"
            // document.body.style.color = "green"
            // made a function to reuse and looks cleaner
            makeWhiteFont()
            break;
        case 1:
            document.querySelector('#monday').classList.toggle('hidden');
            break;
        case 2:
            document.querySelector('#tuesday').classList.toggle('hidden');
            break;
        case 6:
            document.querySelector('#saturday').classList.toggle('hidden');
            break;
    }
}

function makeWhiteFont() {
    document.body.style.color = "white"

}


// the check button

// the user inputs a character name

// when they press check
document.querySelector('#characterCheck').addEventListener('click', characterFunction)
// it will check for each character name
function characterFunction() {
    let characterGrab = document.querySelector('#character').value
    document.querySelector('#characterDisplayTest').innerText = characterGrab

}

// return back something



// download audio

// use vh or % on parent containers for responsiveness
// add gradient to background image to see text better
//text transofmr vertically
// add max width to html img and vids to resize em
