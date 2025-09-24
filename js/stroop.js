document.addEventListener("DOMContentLoaded", async ()=>{
  const stim = document.getElementById('stimulus');
  const colors = ['kırmızı','mavi','yeşil'];
  const cssColors = {kırmızı:'red',mavi:'blue',yeşil:'green'};
  let correct=0, total=15;
  for(let i=0;i<total;i++){
    await new Promise(r=>setTimeout(r,700));
    const word = colors[Math.floor(Math.random()*3)];
    const ink = colors[Math.floor(Math.random()*3)];
    stim.innerHTML = `<span style="color:${cssColors[ink]};font-size:50px">${word.toUpperCase()}</span>`;
    let answered=false;
    function handler(){
      if(answered) return;
      answered=true;
      const pick = prompt("Rengi yaz: kırmızı/mavi/yeşil").toLowerCase();
      if(pick===ink) correct++;
    }
    document.body.addEventListener('click',handler,{once:true});
    await new Promise(r=>setTimeout(r,2000));
    document.body.removeEventListener('click',handler);
  }
  let sc = JSON.parse(localStorage.getItem('scores'));
  sc.stroop = Math.round(correct/total*100);
  localStorage.setItem('scores', JSON.stringify(sc));
  location = 'nback.html';
});
