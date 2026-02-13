const pages=document.querySelectorAll('.page');
const music=document.getElementById('bgMusic');

function nextPage(id){
pages.forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

function startExperience(){
music.play();
typeIntro();
setTimeout(()=>nextPage('page2'),4000);
}

function typeIntro(){
let text="You are my today, my tomorrow and my forever. 💖";
let i=0;
function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,50);
}
}
typing();
}

function checkQ1(ans){
if(ans==='bank'){
document.getElementById("popup1").innerHTML="Correct ❤️";
setTimeout(()=>nextPage('page3'),2000);
}else{
document.getElementById("popup1").innerHTML="Wrong 💔 Try again!";
}
}

function checkQ2(){
let val=document.getElementById("chocoAnswer").value.toLowerCase().trim();
if(val==="mousse"){
document.getElementById("popup2").innerHTML="Correct 💖";
setTimeout(()=>nextPage('page4'),2000);
}else{
document.getElementById("popup2").innerHTML="Wrong 💔 Try again!";
}
}

function goToHugPage(){
nextPage('page5');
document.getElementById("finalVideo").play();
typeLoveMessage();
fireworks();
}

function typeLoveMessage(){
let msg="My love, you are my peace, my happiness, my safest place in this world. I promise to hold you, protect you, pamper you and love you more deeply every single day of my life. You are my forever and always. 💞";
let words=msg.split(" ");
let i=0;
let container=document.getElementById("loveMessage");
container.innerHTML="";
function addWord(){
if(i<words.length){
container.innerHTML+=words[i]+" ";
i++;
setTimeout(addWord,8000/words.length);
}
}
addWord();
}

function fireworks(){
for(let i=0;i<40;i++){
let spark=document.createElement("div");
spark.className="firework";
spark.style.left=Math.random()*100+"%";
spark.style.top=Math.random()*100+"%";
document.body.appendChild(spark);
setTimeout(()=>spark.remove(),1200);
}
}