let music=document.getElementById('bgMusic');

/* Play music after first click anywhere */
document.addEventListener('click',function playOnce(){
music.play();
document.removeEventListener('click',playOnce);
});

function switchPage(current,next){
document.getElementById(current).classList.remove('active');
document.getElementById(next).classList.add('active');
}

function checkQ1(answer){
let popup=document.getElementById('popup1');
if(answer==='bank'){
popup.innerHTML='💖 Correct My Love 💖';
heartExplosion();
setTimeout(()=>switchPage('page1','page2'),1500);
}else{
popup.innerHTML='❌ Try Again By Clicking The Link Again ❤️';
setTimeout(()=>location.reload(),1500);
}
}

function checkQ2(){
let ans=document.getElementById('chocoAnswer').value.toLowerCase().trim();
let popup=document.getElementById('popup2');
if(ans==='mousse'){
popup.innerHTML='💖 Sweetest Answer 💖';
confettiExplosion();
setTimeout(()=>switchPage('page2','page3'),1500);
}else{
popup.innerHTML='❌ Try Again From Beginning ❤️';
setTimeout(()=>location.reload(),1500);
}
}

function unlockMagic(){
switchPage('page3','page4');
}

function showVideo(){
switchPage('page4','page5');
}

function heartExplosion(){
for(let i=0;i<60;i++){
let heart=document.createElement('div');
heart.innerHTML='💖';
heart.style.position='fixed';
heart.style.left='50%';
heart.style.top='50%';
heart.style.fontSize=(20+Math.random()*40)+'px';
heart.style.transform=`translate(-50%,-50%) translate(${Math.random()*400-200}px,${Math.random()*400-200}px)`;
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),2000);
}
}

function confettiExplosion(){
for(let i=0;i<150;i++){
let conf=document.createElement('div');
conf.innerHTML='🎉';
conf.style.position='fixed';
conf.style.left=Math.random()*100+'%';
conf.style.top='-10px';
conf.style.fontSize='20px';
conf.style.animation='fall 3s linear';
document.body.appendChild(conf);
setTimeout(()=>conf.remove(),3000);
}
}

/* Continuous Roses */
for(let i=0;i<40;i++){
let rose=document.createElement('div');
rose.className='rose';
rose.innerHTML='🌹';
rose.style.left=Math.random()*100+'%';
rose.style.animationDuration=(5+Math.random()*5)+'s';
document.body.appendChild(rose);
}
