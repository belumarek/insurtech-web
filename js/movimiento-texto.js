// MOVIMIENTO DEL TEXTO
function scrollAppear() {
  var introText = document.querySelector('.text-intro');
   var introPosition = introText.getBoundingClientRect().top;
   var screenPosition = window.innerHeight ;

   if(introPosition < screenPosition){
     introText.classList.add('intro-appear');
   }
}
  window.addEventListener('scroll', scrollAppear);

