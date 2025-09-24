document.addEventListener("DOMContentLoaded", async ()=>{
  const stim = document.getElementById('stimulus');
  let correct=0;
  for(let i=0;i<30;i++){
    await new Promise(r=>setTimeout(r,400 + Math.random()*600));
    const isTarget = Math.random()<0.6;
    stim.textContent = isTarget ? "🟦" : "⬜";
    let pressed=false;
    function handler(){pressed=true;}
    document.body.addEventListener('click',handler);
    await new Promise(r=>setTimeout(r,600));
    document.body.removeEventListener('click',handler);
    if((isTarget && pressed) || (!isTarget && !pressed)) correct++;
    stim.textContent="";
  }
  let sc = JSON.parse(localStorage.getItem('scores'));
  sc.pwr = Math.round(correct/30*100);
  localStorage.setItem('scores', JSON.stringify(sc));
  location = 'results.html';
});
