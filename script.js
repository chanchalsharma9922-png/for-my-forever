const pages=document.querySelectorAll('.page');
const music=document.getElementById('bgMusic');

function switchPage(id){
pages.forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');

if(id==='page4'){
typeValentine();
startFireworks();
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
typing.innerHTML+=text[i];
i++;
setTimeout(t,50);
}
}
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
fireworksBurst();
}

/* Valentine Typing */
function typeValentine(){

let quote="Happy Valentine’s Day my love ❤️ You are my heartbeat, my blessing, my forever, and my greatest happiness. I am so lucky to call you my wife and my soulmate.";

let words=quote.split(" ");
let i=0;

valentineQuote.innerHTML="";

function add(){
if(i<words.length){
valentineQuote.innerHTML+=words[i]+" ";
i++;
setTimeout(add,250);
}
}
add();
}

/* Love Message */
function typeLove(){

let msg="My love, you are my peace, my happiness, my safest place in this world. I promise to hold you, protect you, pamper you and love you more deeply every single day of my life. You are my forever and always. 💞";

let words=msg.split(" ");
let i=0;

loveMessage.innerHTML="";

function add(){
if(i<words.length){
loveMessage.innerHTML+=words[i]+" ";
i++;
setTimeout(add,8000/words.length);
}
}
add();
}

/* Fireworks */
function fireworksBurst(){

for(let i=0;i<80;i++){

let f=document.createElement("div");
f.className="firework";

let colors=["#ff4da6","#ffcc00","#00e5ff","#7cff00","#ff5722","#c77dff"];
f.style.background=colors[Math.floor(Math.random()*colors.length)];

f.style.left="50%";
f.style.top="50%";

f.style.setProperty("--x",(Math.random()*600-300)+"px");
f.style.setProperty("--y",(Math.random()*600-300)+"px");

document.body.appendChild(f);

setTimeout(()=>f.remove(),1500);
}
}

function startFireworks(){
setInterval(fireworksBurst,6000);
}

/* Falling Icons */
const icons=["🌸","🌼","🌺","🌹","💐","❤️","💖","💛","💙","💜","🧡"];

setInterval(()=>{

let el=document.createElement("div");
el.className="fall";

el.innerHTML=icons[Math.floor(Math.random()*icons.length)];

el.style.left=Math.random()*100+"%";
el.style.fontSize=(30+Math.random()*25)+"px";
el.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(el);

setTimeout(()=>el.remove(),12000);

},250);
