const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const form = document.querySelector('form');
const  comment = document.getElementById('comment-input');
const  commentList = document.getElementById('list');
const  ul = document.querySelector('.likes');

let count = 0;
let myInterval = setInterval(increase, 1000)
let clickCount = 1;


plus.addEventListener('click', increase);
minus.addEventListener('click', decrease);
pause.addEventListener('click', pauseBtn);
heart.addEventListener('click', countLikes);
form.addEventListener('submit', comments);

function increase(){
    count ++;
    counter.innerText = count;
}

function decrease(){
    count --;
    counter.innerText = count;
}

function pauseBtn(){
    if(pause.innerText === 'pause'){
        pause.textContent = 'resume';
        clearInterval(myInterval);
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
    } else {
        pause.textContent = 'pause';
        myInterval = setInterval(increase, 1000)
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
    }
}

function heartCounts() {
    heart.onclick = ()=> clickCount++
    return clickCount;
};

function countLikes() {
    heartCounts();
    let likes = document.createElement('li');
    likes.innerHTML = `${count} has been liked ${clickCount} times.`
    ul.appendChild(likes);
};

function comments(e) {
    e.preventDefault();
    let p = document.createElement('p');
    p.innerHTML = comment.value;
    commentList.append(p);
    form.reset();
}
