document.addEventListener("DOMContentLoaded", async ()=>{
  const stim = document.getElementById('stimulus');
  let score=0, total=20;
  for(let i=0;i<total;i++){
    await new Promise(r=>setTimeout(r,800));
    const go = Math.random()<0.7;
    stim.textContent = go ? '🟢' : '🔴';
    let pressed=false;
    function handler(){pressed=true;}
    document.body.addEventListener('click',handler);
    await new Promise(r=>setTimeout(r,1000));
    document.body.removeEventListener('click',handler);
    if((go && pressed)||(!go && !pressed)) score++;
    stim.textContent='';
  }
  let sc = JSON.parse(localStorage.getItem('scores'));
  sc.gonogo = Math.round(score/total*100);
  localStorage.setItem('scores', JSON.stringify(sc));
  location = 'stroop.html';
});
