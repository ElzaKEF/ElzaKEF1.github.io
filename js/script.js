let audio = document.querySelector('audio');
let mario = document.querySelector('.mario');
document.addEventListener('click', (event) => {
   if (event.target.closest('.mario-img')) {
      mario.classList.remove('duble_jump');
      mario.classList.add('jump');
      audio.play("C:\Users\Альберт\Desktop\мой сайт\audio\super-mario.mp3");
   }
   if (event.target.closest('.green__pipe')) {
      mario.classList.remove('jump');
      mario.classList.add('duble_jump');
   }
})