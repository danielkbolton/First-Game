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
