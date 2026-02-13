const pages=document.querySelectorAll('.page');
const music=document.getElementById('bgMusic');

function switchPage(id){
pages.forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

function startExperience(){
music.play();
typeIntro();
setTimeout(()=>switchPage('page2'),4000);
}

function typeIntro(){
let text="You are my today, my tomorrow and my forever. 💖";
let i=0;
function t(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text[i];
i++; setTimeout(t,50);
}}
t();
}

function checkQ1(a){
if(a==='bank'){
document.getElementById("popup1").innerHTML="Correct ❤️";
setTimeout(()=>switchPage('page3'),2000);
}else document.getElementById("popup1").innerHTML="Wrong 💔 Try again!";
}

function checkQ2(){
let v=document.getElementById("chocoAnswer").value.toLowerCase().trim();
if(v==="mousse"){
document.getElementById("popup2").innerHTML="Correct 💖";
setTimeout(()=>switchPage('page4'),2000);
}else document.getElementById("popup2").innerHTML="Wrong 💔 Try again!";
}

function goToHug(){
switchPage('page5');
document.getElementById("finalVideo").play();
typeLove();
heartExplosion();
}

function typeLove(){
let msg="My love, you are my peace, my happiness, my safest place in this world. I promise to hold you, protect you, pamper you and love you more deeply every single day of my life. You are my forever and always. 💞";
let words=msg.split(" ");
let i=0;
let box=document.getElementById("loveMessage");
box.innerHTML="";
function add(){
if(i<words.length){
box.innerHTML+=words[i]+" ";
i++; setTimeout(add,8000/words.length);
}}
add();
}

function heartExplosion(){
for(let i=0;i<60;i++){
let h=document.createElement("div");
h.className="burst";
h.style.left="50%";
h.style.top="50%";
h.style.setProperty('--x',(Math.random()*400-200)+'px');
h.style.setProperty('--y',(Math.random()*400-200)+'px');
document.body.appendChild(h);
setTimeout(()=>h.remove(),1500);
}
}

function floatingDecor(){
for(let i=0;i<20;i++){
let rose=document.createElement("div");
rose.className="rose";
rose.innerHTML="🌹";
rose.style.left=Math.random()*100+"%";
rose.style.animationDuration=(5+Math.random()*5)+"s";
document.body.appendChild(rose);

let balloon=document.createElement("div");
balloon.className="balloon";
balloon.innerHTML="🎈";
balloon.style.left=Math.random()*100+"%";
balloon.style.animationDuration=(6+Math.random()*6)+"s";
document.body.appendChild(balloon);
}
}
floatingDecor();