const pages=document.querySelectorAll('.page');
function nextPage(id){pages.forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active')}

function moveNo(btn){btn.style.position='absolute';btn.style.top=Math.random()*80+'%';btn.style.left=Math.random()*80+'%'}

function showPopup(){document.getElementById('popup').innerText='I knew it ❤️' }

function checkPassword(){const pass=document.getElementById('password').value;if(pass==='ILoveYou'){nextPage('memoryPage')}else{alert('Wrong password 💔')}}

// Roses
for(let i=0;i<25;i++){let rose=document.createElement('div');rose.className='rose';rose.innerText='🌹';rose.style.left=Math.random()*100+'%';rose.style.animationDuration=(5+Math.random()*5)+'s';document.body.appendChild(rose)}

// Sparkles
for(let i=0;i<40;i++){let spark=document.createElement('div');spark.className='spark';spark.style.top=Math.random()*100+'%';spark.style.left=Math.random()*100+'%';document.body.appendChild(spark)}
