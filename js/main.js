let scores = JSON.parse(localStorage.getItem('scores')) || {
  reaction:null, gonogo:null, stroop:null, nback:null, pwr:null
};
localStorage.setItem('scores', JSON.stringify(scores));

function startLevel(lvl){
  if(lvl===1) location='reaction.html';
  if(lvl===2) location='nback.html';
}
