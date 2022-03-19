let scan = $('.scan');
let scanText = $('.scan h3');
let main = $('main');

setTimeout(changeText, 4000);
setTimeout(removeScan, 6000);

function changeText() {
    scanText.text('ACCESS GRANTED');
}

function removeScan() {
    scan.css('display', 'none');
    main.css('display', 'flex');
}

let countDownDate = new Date("Dec 30, 2022 00:00:00").getTime();

let intervalID = setInterval(() => {

    let now = new Date().getTime();
    
    let distance = countDownDate - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 10) {
        days = '0' + days;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    
    $('#days').text(days);
    $('#hours').text(hours);
    $('#minutes').text(minutes);
    $('#seconds').text(seconds);

    if (distance < 0) {
        // DO SOMETHING WHEN COUNTDOWN OVER
    }
}, 1000);