function resetorstart(){
  let clicks = 0;
}
function click(){
    let clicks = clicks+1;
}
while (clicks > 0){
    document.getElementById("score").innerHTML(clicks);
}
