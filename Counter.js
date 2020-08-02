let counter = document.querySelector('.counter');
let count = 0;

document.querySelector('#addCountBtn').addEventListener('click', incrementCounter);
document.querySelector('#lowerCountBtn').addEventListener('click', decrementCounter);

function incrementCounter() {
    
    count++;
    counter.innerHTML = count;
    counter.innerHTML > '0'? counter.style.color = 'green' : counter.style.color = 'white';

    counter.animate([{opacity:'0.2'},{opacity:'1.0'}], {duration:500, fill:'forwards'});
}


function decrementCounter() {
    count--;
    counter.innerHTML = count;
    counter.innerHTML < '0'?  counter.style.color = 'red' : counter.style.color = 'white';
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}], {duration:500, fill:'forwards'});
}






