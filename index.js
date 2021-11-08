$(document).ready(function(){

    $('#btn2').click(function(){
        $('#sisterimg').css('opacity','1')
        $('#blueimg').css('opacity','0')
        $('#sleepimg').css('opacity','0')
      });

      $('#btn1').click(function(){
        $('#blueimg').css('opacity','1')
        $('#sisterimg').css('opacity','0')
        $('#sleepimg').css('opacity','0')
      });

      $('#btn3').click(function(){
        $('#blueimg').css('opacity','0')
        $('#sisterimg').css('opacity','0')
        $('#sleepimg').css('opacity','1')
      });

})
