let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let novil = document.querySelector('.novil');


window.onscroll = function(){
    let value = scrollY;

    stars.style.left = value + 'px';
    moon.style.top = value *3 + 'px';
    mountains3.style.top = value *2 + 'px';
    mountains3.style.top = value *1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value * 3  + 'px';
    novil.style.fontSize =value +'px';

    if(scrollY >= 67){
        novil.style.fontSize =67 +'px';
        novil.style.position ='fixed';

       if(scrollY >=478){
        novil.style.display ='none';

       }else{
        novil.style.position ='block';

       }
      
      if(scrollY >= 127){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'

      }else{
         document.querySelector('.main').style.background = 'linear-gradient(#110023 , #2d0130)'
      }
       

     }




}



