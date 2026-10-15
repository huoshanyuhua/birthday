const confetti = document.getElementById("confetti");
const toast = document.getElementById("toast");
const messages = [
 "愿你被喜欢的事物包围，永远自在又闪亮。",
 "十八岁，愿你有勇气奔赴热爱，也有底气做自己。",
 "愿新一岁有好多好事发生，日常也藏着小小惊喜。",
 "企鹅，生日快乐。愿你一直被爱，也一直自由。"
];
function shower(n=90){
 const colors=["#f6ca27","#e8a08d","#b6c69a","#fff1c7","#c58a36","#e9bdc4"];
 for(let i=0;i<n;i++){
  const p=document.createElement("i");p.style.left=Math.random()*100+"%";
  p.style.background=colors[Math.floor(Math.random()*colors.length)];
  p.style.animationDuration=(2.3+Math.random()*2.4)+"s";
  p.style.animationDelay=Math.random()*.4+"s";
  p.style.setProperty("--drift",(-100+Math.random()*200)+"px");
  confetti.appendChild(p);setTimeout(()=>p.remove(),5200);
 }
}
function showMessage(){
 toast.textContent=messages[Math.floor(Math.random()*messages.length)];
 toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3600);
}
document.getElementById("celebrate").addEventListener("click",()=>{shower(200);showMessage()});
// document.getElementById("surprise").addEventListener("click",()=>{shower(75);showMessage()});
