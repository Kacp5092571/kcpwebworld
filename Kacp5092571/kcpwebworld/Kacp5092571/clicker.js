let clicks = 0
function click() {
let clicks = clicks+1
}
setInterval(function clickshow() {
    document.getElementById("score").innerHTML = clicks; 
}, 1000);