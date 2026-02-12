const pages = document.querySelectorAll('.page');

function nextPage(id){
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function checkQ1(answer, btn){
    const popup = document.getElementById('popup1');
    if(answer === 'pen'){
        popup.innerHTML = "Correct ❤️";
        btn.style.background = "green";
        setTimeout(() => nextPage('page2'), 1500);
    } else {
        popup.innerHTML = "Wrong 💔 Try again!";
        btn.style.background = "red";
    }
}

function checkQ2(){
    const ans = document.getElementById('chocoAnswer').value.toLowerCase().trim();
    const popup = document.getElementById('popup2');
    if(ans === "dairy milk"){
        popup.innerHTML = "Correct 🍫❤️";
        setTimeout(() => nextPage('page3'), 1500);
    } else {
        popup.innerHTML = "Wrong answer 💔 Try again!";
    }
}

function unlockMagic(){
    nextPage('page4');
    loadCarousel();
}

function loadCarousel(){
    const carousel = document.getElementById('carousel');
    const images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
    images.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.style.transform = `rotateY(${i * 72}deg) translateZ(300px)`;
        carousel.appendChild(img);
    });
}

function unlockVideo(){
    const video = document.getElementById('finalVideo');
    video.style.display = "block";
    video.play();
}
