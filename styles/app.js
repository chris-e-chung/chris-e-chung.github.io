let introParent = document.querySelector('div#introParent');
let introScreen = document.querySelector('div#introScreen');
let introButtons = document.querySelector('div#introButtons');
let modernButtonParent = document.querySelector('button#modernButtonParent');
let oldfashionedButtonParent = 
    document.querySelector('button#oldfashionedButtonParent');

// Blur in 
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        introScreen.classList.remove('blur');
    }, 0);
});

// Switch the buttons
let buttonTracker = 0;
modernButtonParent.addEventListener('mouseover', () => {
    console.log('hover')

    if (buttonTracker == 0) {
        console.log('added')
        modernButtonParent.classList.remove('left-button-pos');
        modernButtonParent.classList.add('right-button-pos');
        oldfashionedButtonParent.classList.remove('right-button-pos');
        oldfashionedButtonParent.classList.add('left-button-pos');

        buttonTracker = 1;
    }
    else {
        console.log('removed')
        modernButtonParent.classList.remove('right-button-pos');
        modernButtonParent.classList.add('left-button-pos');
        oldfashionedButtonParent.classList.remove('left-button-pos');
        oldfashionedButtonParent.classList.add('right-button-pos');
        buttonTracker = 0;
    }
});
