function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    if(!audio) {
        alert(`"${e.key.toUpperCase()}" Does Not Exist Here.`);
        return;
    }
    audio.currentTime = 0;
    audio.play();
}
window.addEventListener("keydown",playSound);