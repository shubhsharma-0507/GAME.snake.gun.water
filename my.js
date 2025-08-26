let start=document.getElementById("start")
let snake=document.getElementById("snake")
let water=document.getElementById("water")
let gun=document.getElementById("gun")
let vs=document.getElementById("vs")
let main=document.getElementById("main")
let water1=document.getElementById("water1")
let snake1=document.getElementById("snake1")
let you=document.getElementById("you")
let opponent=document.getElementById("opponent")
let result=document.getElementById("result")
let restart1=document.getElementById("restart");
 let element;
 let arr=['water','snake','gun'];
// document.getElementById("snake").addEventListener("click",()=>{startgame()})
function startgame(){
start.classList="";
start.innerText="";
blockoption ();
shuffleArray(arr)

}
function blockoption()
{
   snake.innerText="🐍"
   snake.classList="border-7 text-9xl my-50 mx-10 bg-white ";
water.innerText="💧"
   water.classList="border-7 text-9xl my-50 mx-10 bg-white ";
   gun.innerText="🔫"
   gun.classList=" border-7 text-9xl my-50 mx-5 bg-white ";
}

function shuffleArray (arr)
{
for(let i=arr.length-1;i>0;i--)
    {
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
 }

 element=arr[Math.floor(Math.random()*3)]
      
      }
function waters()
{
choice('water');
}
function guns()
{
choice('gun');
}
function snakes()
{
  
choice('snake');
}
function choice(choices)
{
   you.innerText="YOU"
   you.classList=" text-6xl border-7 border-green-900 mx-20 mt-30 bg-green-400 "
   opponent.innerText="OPPONENT"
      opponent.classList=" text-6xl  border-7 border-green-900  mx-45 mt-30 bg-green-400 "

if(choices=='water')   
{
if(element=='water')
   {
Null();
water1.innerText="💧"
   water1.classList="text-8xl border-7 border-blue-300  bg-white mx-15 p-5 my-30 inline-block flex item-center "
shuflling();   
setTimeout(() => {
   snake1.innerText="💧"
   snake1.classList="text-8xl border-7 border-blue-300  bg-white mx-15 p-5 my-30 inline-block flex item-center "  
}, 4000);
 setTimeout(() => {
    result.textContent = "MATCH TIE!"
    result.classList="text-3xl bg-black mx-75 border-5 text-red-500 absolute "
    restart1.innerText="RESTART"
restart1.classList="fixed z-500 bg-red-400 text-black text-5xl mx-75 p-3"
   }, 5000);

}
else if(element=='snake')
{
Null();
water1.innerText="💧"
   water1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "
shuflling();   
setTimeout(() => {
   snake1.innerText="🐍"
   snake1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "  
}, 4000);

 setTimeout(() => {
    result.textContent = "OPPONENT WIN"
    result.classList="text-3xl bg-black mx-75 border-5 text-red-500 absolute "
    restart1.innerText="RESTART"
restart1.classList="fixed z-500 bg-red-400 text-black text-5xl mx-75 p-3"
   }, 5000);
}
else{
Null();
water1.innerHTML="💧"
   water1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "
shuflling();   
setTimeout(() => {
   snake1.innerText="🔫"
   snake1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "  
}, 4000);
 setTimeout(() => {
    result.textContent = "YOU WIN"
    result.classList="text-3xl bg-black mx-75 border-5 text-red-500 absolute "
     celebrateWin();
     restart1.innerText="RESTART"
restart1.classList="fixed z-500 bg-red-400 text-black text-5xl mx-75 p-3"
   }, 5000);
// result.textContent="TIE"
// console.log("result1")
}
// restart1.innerText="RESTART"
// restart1.classList="fixed z-500 bg-red-400 text-black text-5xl mx-75 p-3"

}
else if(choices=='snake')
   {
if(element=='water')
   {
Null();
water1.innerText="🐍"
   water1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "
shuflling();   
setTimeout(() => {
   snake1.innerText="💧"
   snake1.classList="text-8xl border-7 border-blue-3003 bg-white mx-15 p-5 my-30 inline-block flex item-center "  
}, 4000);
 setTimeout(() => {
    result.textContent = "YOU WIN"
    result.classList="text-3xl bg-black mx-75 border-5 text-red-500 absolute "
     celebrateWin();
     restart1.innerText="RESTART"
restart1.classList="fixed z-500 bg-red-400 text-black text-5xl mx-75 p-3"
   }, 5000);
   }
else if(element=='snake')
{
Null();
water1.innerText="🐍"
   water1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "
shuflling();   
setTimeout(() => {
   snake1.innerText="🐍"
   snake1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "  
}, 4000);
 setTimeout(() => {
    result.textContent = "MATCH TIE!"
    result.classList="text-3xl bg-black mx-75 border-5 text-red-500 absolute "
    restart1.innerText="RESTART"
restart1.classList="fixed z-500 bg-red-400 text-black text-5xl mx-75 p-3"
   }, 5000);
}
else{
Null();
water1.innerText="🐍"
   water1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "
shuflling();   
setTimeout(() => {
   snake1.innerText="🔫"
   snake1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "  
}, 4000);
 setTimeout(() => {
    result.textContent = "OPPONENT WIN"
    result.classList="text-3xl bg-black mx-75 border-5 text-red-500 absolute "
    restart1.innerText="RESTART"
restart1.classList="fixed z-500 bg-red-400 text-black text-5xl mx-75 p-3"
   }, 5000);
}
   }
else{

   if(element=='water')
   {
Null();
water1.innerText="🔫"
   water1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "
shuflling();   
setTimeout(() => {
   snake1.innerText="💧"
   snake1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "  
}, 4000);
 setTimeout(() => {
    result.textContent = "OPPONENT WIN"
    result.classList="text-3xl bg-black mx-75 border-5 text-red-500 absolute "
    restart1.innerText="RESTART"
restart1.classList="fixed z-500 bg-red-400 text-black text-5xl mx-75 p-3"
   }, 5000);
   }
else if(element=='snake')
{
Null();
water1.innerText="🔫"
   water1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "
shuflling();   
setTimeout(() => {
   snake1.innerText="🐍"
   snake1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "  
}, 4000);
 setTimeout(() => {
    result.textContent = "YOU WIN"
    result.classList="text-3xl bg-black mx-75 border-5 text-red-500 absolute "
     celebrateWin();
     restart1.innerText="RESTART"
restart1.classList="fixed z-500 bg-red-400 text-black text-5xl mx-75 p-3"
   }, 5000);
}
else{
Null();
water1.innerText="🔫"
   water1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "
shuflling();   
setTimeout(() => {
   snake1.innerText="🔫"
   snake1.classList="text-8xl border-7 border-blue-300 bg-white mx-15 p-5 my-30 inline-block flex item-center "  
}, 4000);
 setTimeout(() => {
    result.textContent = "MATCH TIE!"
    result.classList="text-3xl bg-black mx-75 border-5 text-red-500 absolute "
    restart1.innerText="RESTART"
restart1.classList="fixed z-500 bg-red-400 text-black text-5xl mx-75 p-3"
   }, 5000);
}
}
}
function Null(){
   snake.innerHTML=""
water.innerHTML=""
gun.innerHTML=""
vs.innerText="vs"
vs.classList="text-9xl text-red-500 z-300 mx-10 my-30 shadow-yellow-900 shadow-2xl "
main.classList=" bg-[url(https://wallpapers.com/images/hd/clear-snake-game-character-z6jd7jtsl04g6mxx.jpg)] bg-center bg-cover size-200 shadow-red-500 shadow-inner "

}
function shuflling()
 {setTimeout(() => {
   snake1.innerText="🐍"
   snake1.classList="text-8xl bg-white mx-15 p-5 my-30 inline-block flex item-center "
  }, 1000);
 setTimeout(() => {
   snake1.innerText="💧"
   snake1.classList="text-8xl bg-white mx-15 p-5 my-30 inline-block flex item-center "
  },2000);
  setTimeout(() => {
   snake1.innerText="🔫"
   snake1.classList="text-8xl bg-white mx-15 p-5 my-30 inline-block flex item-center "
  }, 3000);
   
}

function celebrateWin() {
   playCelebrateSound();
    var duration = 2 * 1000; // 2 seconds
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // left side se
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        }));
        // right side se
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        }));
    }, 250);
}
function playCelebrateSound() {
    let sound = document.getElementById("celebrateSound");
    sound.currentTime = 0; // har bar naya play ho
    sound.play();
    sound.volume = 1.0; // full volume

}
function restart(){
   you.classList=""
   you.innerText=""
    opponent.classList=""
   opponent.innerText=""
    vs.classList=""
   vs.innerText=""
    opponent.classList=""
   opponent.innerText=""
 water1.classList=""
    water1.innerText=" "
 snake1.classList=""
    snake1.innerText=" "
 result.classList=""
    result.innerText=" "
    restart1.innerText=""
restart1.classList=""
   startgame();
}