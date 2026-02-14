const pages=document.querySelectorAll('.page');
const music=document.getElementById('bgMusic');

function switchPage(id){
pages.forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');

if(id==='page4'){
typeValentine();
}
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
popup1.innerHTML="Correct ❤️";
setTimeout(()=>switchPage('page3'),2000);
}else popup1.innerHTML="Wrong 💔 Try again!";
}

function checkQ2(){
let v=chocoAnswer.value.toLowerCase().trim();
if(v==="mousse"){
popup2.innerHTML="Correct 💖";
setTimeout(()=>switchPage('page4'),2000);
}else popup2.innerHTML="Wrong 💔 Try again!";
}

function goToHug(){
switchPage('page5');
finalVideo.play();
typeLove();
heartExplosion();
}

function typeValentine(){

let quote = "Happy Valentine’s Day my love ❤️ You are my heartbeat, my blessing, my forever, and my greatest happiness. I am so lucky to call you my wife and my soulmate.";

let words = quote.split(" ");
let i = 0;

valentineQuote.innerHTML="";

function add(){
if(i < words.length){
valentineQuote.innerHTML += words[i] + " ";
i++;
setTimeout(add, 250);
}
}
add();
}

function typeLove(){
let msg="My love, you are my peace, my happiness, my safest place in this world. I promise to hold you, protect you, pamper you and love you more deeply every single day of my life. You are my forever and always. 💞";
let words=msg.split(" ");
let i=0;
loveMessage.innerHTML="";
function add(){
if(i<words.length){
loveMessage.innerHTML+=words[i]+" ";
i++; setTimeout(add,8000/words.length);
}}
add();
}

function heartExplosion(){
for(let i=0;i<50;i++){
let h=document.createElement("div");
h.className="burst";
h.style.setProperty('--x',(Math.random()*400-200)+'px');
h.style.setProperty('--y',(Math.random()*400-200)+'px');
document.body.appendChild(h);
setTimeout(()=>h.remove(),1500);
}
}

setInterval(()=>{
let petal=document.createElement("div");
petal.className="petal";
petal.innerHTML="🌸";
petal.style.left=Math.random()*100+"%";
petal.style.animationDuration=(4+Math.random()*4)+"s";
document.body.appendChild(petal);
setTimeout(()=>petal.remove(),9000);
},400);

document.addEventListener("mousemove",e=>{
let s=document.createElement("div");
s.className="sparkle";
s.style.left=e.pageX+"px";
s.style.top=e.pageY+"px";
document.body.appendChild(s);
setTimeout(()=>s.remove(),600);
});
