const pages=document.querySelectorAll('.page');
const music=document.getElementById('bgMusic');
const typingText="You are my today, my tomorrow and my forever. Every heartbeat whispers your name... 💖";

function nextPage(id){
pages.forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

function startExperience(){
music.play();
typeEffect();
setTimeout(()=>nextPage('page2'),4000);
}

function typeEffect(){
let i=0;
let speed=50;
function typing(){
if(i<typingText.length){
document.getElementById("typing").innerHTML+=typingText.charAt(i);
i++;
setTimeout(typing,speed);
}
}
typing();
}

function fireworks(){
for(let i=0;i<20;i++){
let fire=document.createElement("div");
fire.className="firework";
fire.style.left=Math.random()*100+"%";
fire.style.top=Math.random()*100+"%";
document.body.appendChild(fire);
setTimeout(()=>fire.remove(),1000);
}
}

function checkQ1(answer,btn){
const popup=document.getElementById('popup1');
if(answer==='bank'){   // ✅ Corrected Answer
popup.innerHTML="Correct ❤️";
btn.classList.add("correct");
fireworks();
setTimeout(()=>nextPage('page3'),2000);
}else{
popup.innerHTML="Wrong 💔 Try again!";
btn.classList.add("wrong");
}
}

function checkQ2(){
const ans=document.getElementById('chocoAnswer').value.toLowerCase().trim();
const popup=document.getElementById('popup2');
if(ans==="mousse"){   // ✅ Corrected Answer
popup.innerHTML="Correct 🍫💖";
fireworks();
setTimeout(()=>nextPage('page4'),2000);
}else{
popup.innerHTML="Wrong 💔 Try again!";
}
}

function createHearts(){
for(let i=0;i<25;i++){
let heart=document.createElement("div");
heart.className="heart";
heart.style.left=Math.random()*100+"%";
heart.style.animationDuration=(5+Math.random()*5)+"s";
document.querySelector(".hearts").appendChild(heart);
}
}
createHearts();
