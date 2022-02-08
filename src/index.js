import './less/index.less'

// Create listeners of 10 types of events
/* some examples:
 - mouseover
 - keydown
 - wheel
 - load
 - focus
 - resize
 - scroll
 - select
 - dblclick
 - drag / drop

 OTHERS:
  - gestures (touch events)
  - 
*/


// Necessary selectors based on ML1-10
//ML1
    // button number 1
document.addEventListener('DOMContentLoaded', ()=>{
        const buttons = Array.from(document.querySelectorAll('div.btn'));
        buttons[0].classList.add('funSun');
        buttons[1].classList.add('mountain');
        buttons[2].classList.add('island');
        const imageArray = Array.from(document.querySelectorAll('img'));
        for (let i=0; i<imageArray.length; i++) {
            let string = 'img';
            let num = 1 + i;
            imageArray[i].id = string + num;
        }
        const destinationText = document.querySelector('.content-destination p');
const destinationImg = document.querySelector('.content-destination img');
const sunButton = document.querySelector('div.btn.funSun');

sunButton.addEventListener('mouseover', function(){
    destinationImg.src = "http://localhost:9000/img/imageofsunnyplace.jpg";
    destinationText.textContent = "Here's a description of an awfully sunny place!";
});

const mountainButton = document.querySelector('.mountain');
mountainButton.addEventListener('mouseover', function(){
    destinationImg.src = "http://localhost:9000/img/imageofmountains.jpg";
    destinationText.textContent = "Here's a description of some really pretty mountains!";
});
const islandButton = document.querySelector('.island');
islandButton.addEventListener('mouseover', function(){
    destinationImg.src = "http://localhost:9000/img/imageofislandparadise.jpg";
    destinationText.textContent = "Your next vacation could be here on these great islands. Very pretty.";
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', (event) => {
        event.target.style.fontWeight = 'bolder';

    })
    link.addEventListener('mouseout', (event) => {
        event.target.style.fontWeight = 'normal';
    })
});
// I wanted the pictures to zoom but stay cropped by maximum size of their containing divs. I think it'd take a LOT more fooling around with the css/html to pull that off.
let scale = 1; 
document.querySelectorAll('.img-content').forEach(picture => {
    picture.style.objectFit = 'cover';
});
document.querySelectorAll('img').forEach(picture => {
    picture.addEventListener('wheel', (event)=>{
        event.target.style.objectFit = 'cover';
        event.target.style.minWidth = '105%';
        scale += event.deltaY * -0.01;
        scale = Math.min(Math.max(0.125, scale),4);
        event.target.style.transform = `scale(${scale})`;
    }, {passive: true});
    picture.addEventListener('mouseout', (event) => {
        event.target.style.transform = `scale(1)`;
    } )
});
document.querySelectorAll('p').forEach(function (text) {
    text.addEventListener('select', (event) => {
        event.target.style.fontWeight = 'bold';
    });
});
    })
