let player = document.getElementById("player");
let block = document.getElementById("block");

function jump() {
    if(player.classList != "animate"){
        player.classList.add("animate")
    }
    player.classList.add("animate");
    setTimeout(function(){
        player.classList.remove("animate")
    },300);
}

let checkDead = setInterval(function(){
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && playerTop>=130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose.")
    }
},10);