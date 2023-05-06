// Условие: Когда пользователь прокрутит вниз  1000px то появится кнопка "вверх"

window.onscroll = function(){scrollFunction()};
function scrollFunction(){
      if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
            document.getElementById('buttonUp').style.display = "block";
      }else{
            document.getElementById('buttonUp').style.display = "none";
      }
}

//перелет на верх при нжатии
function topFunction(){
      document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
}