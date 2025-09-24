document.addEventListener("DOMContentLoaded", async ()=>{
  const stim = document.getElementById('stimulus');
  await new Promise(r=>setTimeout(r,1500+Math.random()*2000));
  stim.textContent = "TIKLA!";
  const start = performance.now();
  document.body.addEventListener('click', ()=>{
     const rt = performance.now()-start;
     let sc = JSON.parse(localStorage.getItem('scores'));
     sc.reaction = rt;
     localStorage.setItem('scores', JSON.stringify(sc));
     location = 'gonogo.html';
  }, {once:true});
});
