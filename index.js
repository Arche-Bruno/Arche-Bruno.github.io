var audio = document.getElementById("audio");
var btnAudio = document.getElementById("boton-reproducir")



// Agregar un evento de clic al botón para reproducir el audio
btnAudio.addEventListener("click", function() {
audio.play();
});
btnAudio.addEventListener('touchstart', function() {
audio.play();
});
btnAudio.addEventListener('touchend', function() {
audio.pause();
});