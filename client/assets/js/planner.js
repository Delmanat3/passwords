colorMeTired()
var allMeTimes=[]
var times=$('.times');

$('.saveBtn').on('click', function bigSaveBoy(){
  var timY1 = moment().format('H')
  if(timY1 == 8){
    $('#T1').addClass('present')
  }else if(timY1 > 8){
     $('#T1').addClass('past')
  }else if(timY1 < 8){
    $('#T1').addClass('future')
  }
  localStorage.setItem('z1', timY1)
  allMeTimes.push(timY1);
   var rowY1= $('#boxy1').val()
    if(rowY1 !== undefined){
    JSON.stringify(rowY1)
    localStorage.setItem('textY1',rowY1)
    savinTime()
    console.log(bigSaveBoy)
}    
});
$('.saveBtn2').on('click', function bigSaveBoy2(){
  var timY2 = moment().format('H')
  if(timY2 ==9){
    $('#T2').addClass('present')
  }else if(timY2 > 9){
     $('#T2').addClass('past')
  }else if(timY2 < 9){
    $('#T2').addClass('future')
  }
  localStorage.setItem('z2', timY2)
  allMeTimes.push(timY2);
  var rowY2= $('#boxy2').val()
  if(rowY2 !== undefined){
  JSON.stringify(rowY2)
  localStorage.setItem('textY2',rowY2)
  savinTime()
}    
});
$('.saveBtn3').on('click', function bigSaveBoy3(){
  var timY3 = moment().format('H')
  if(timY3 ==10){
    $('#T3').addClass('present')
  }else if(timY3 > 10){
     $('#T3').addClass('past')
  }else if(timY3 < 10){
    $('#T3').addClass('future')
  }
  localStorage.setItem('z3', timY3)
  allMeTimes.push(timY3);
  var rowY3= $('#boxy3').val()
  if(rowY3 !== undefined){
   JSON.stringify(rowY3)
localStorage.setItem('textY3',rowY3)
savinTime()
}    
});
$('.saveBtn4').on('click', function bigSaveBoy4(){
  var timY4 = moment().format('H:')
  if(timY4 ==11){
    $('#T4').addClass('present')//this one doesnt work and i cant see the error if there is one 
  }else if(timY4 > 11){
     $('#T4').addClass('past')//super annoyed all the other ones work 
  }else if(timY4 < 11){
    $('#T4').addClass('future')//please tell me where it is  
  }
  localStorage.setItem('z4', timY4)
  allMeTimes.push(timY4);
  var rowY4= $('#boxy4').val()
   if(rowY4 !== undefined){
   JSON.stringify(rowY4)
  localStorage.setItem('textY4',rowY4)
  savinTime()
}    
});
$('.saveBtn5').on('click', function bigSaveBoy5(){
  var timY5 = moment().format('H')
  if(timY5 ==12){
    $('#T5').addClass('present')
  }else if(timY5 > 12){
     $('#T5').addClass('past')
  }else if(timY5 < 12){
    $('#T5').addClass('future')
  }
  localStorage.setItem('z5', timY5)
  allMeTimes.push(timY5);
  var rowY5= $('#boxy5').val()
   if(rowY5 !== undefined){
   JSON.stringify(rowY5)
localStorage.setItem('textY5',rowY5)
savinTime()
}    
});
$('.saveBtn6').on('click', function bigSaveBoy6(){
  var timY6 = moment().format('H')
  if(timY6 ==13){
    $('#T6').addClass('present')
  }else if(timY6 > 13){
     $('#T6').addClass('past')
  }else if(timY6 < 13){
    $('#T6').addClass('future')
  }
  localStorage.setItem('z6', timY6)
  allMeTimes.push(timY6);
  var rowY6= $('#boxy6').val()
   if(rowY6 !== undefined){
   JSON.stringify(rowY6)
localStorage.setItem('textY6',rowY6)
savinTime()
}    
});
$('.saveBtn7').on('click', function bigSaveBoy7(){
  var timY7 = moment().format('H')
  if(timY7 ==14){
    $('#T7').addClass('present')
  }else if(timY7 > 14){
     $('#T7').addClass('past')
  }else if(timY7 < 14){
    $('#T7').addClass('future')
  }
  localStorage.setItem('z7', timY7)
  allMeTimes.push(timY7);
  var rowY7= $('#boxy7').val()
   if(rowY7 !== undefined){
   JSON.stringify(rowY7)
localStorage.setItem('textY7',rowY7)
savinTime()
}    
});
$('.saveBtn8').on('click', function bigSaveBoy8(){
  var timY8 = moment().format('H')
  if(timY8 ==15){
    $('#T8').addClass('present')
  }else if(timY8 > 15){
     $('#T8').addClass('past')
  }else if(timY8 < 15){
    $('#T8').addClass('future')
  }
  localStorage.setItem('z8', timY8)
  allMeTimes.push(timY8);
  var rowY8= $('#boxy8').val()
   if(rowY8 !== undefined){
   JSON.stringify(rowY8)
localStorage.setItem('textY8',rowY8)
savinTime()
}    
});
$('.saveBtn9').on('click', function bigSaveBoy9(){
  var timY9 = moment().format('H')
  if(timY9 ==16){
    $('#T9').addClass('present')
  }else if(timY9 > 16){
     $('#T9').addClass('past')
  }else if(timY9 < 16){
    $('#T9').addClass('future')
  }
  localStorage.setItem('z9', timY9)
  allMeTimes.push(timY9);
  var rowY9= $('#boxy9').val()
   if(rowY9 !== undefined){
   JSON.stringify(rowY9)
localStorage.setItem('textY9',rowY9)
savinTime()
}    
});
$('.saveBtn10').on('click', function bigSaveBoy10(){
  var timY10 = moment().format('H')
  if(timY10 ==17){
    $('#T10').addClass('present')
  }else if(timY10 > 17){
     $('#T10').addClass('past')
  }else if(timY10 < 17){
    $('#T10').addClass('future')
  }
  localStorage.setItem('z10', timY10)
  allMeTimes.push(timY10);
  var rowY10= $('#boxy10').val()
   if(rowY10 !== undefined){
   JSON.stringify(rowY10)
localStorage.setItem('textY10',rowY10)
savinTime()
}    
});
function savinTime(){
  localStorage.setItem('fullOf', allMeTimes)
  
  
}




window.onload=function rendersGame(){
$('#boxy1').val(localStorage.getItem('textY1'));
  $('#boxy2').val(localStorage.getItem('textY2'));
    $('#boxy3').val(localStorage.getItem('textY3'));
      $('#boxy4').val(localStorage.getItem('textY4'));
        $('#boxy5').val(localStorage.getItem('textY5'));
        $('#boxy6').val(localStorage.getItem('textY6'));
      $('#boxy7').val(localStorage.getItem('textY7'));
    $('#boxy8').val(localStorage.getItem('textY8'));
  $('#boxy9').val(localStorage.getItem('textY9'));
$('#boxy10').val(localStorage.getItem('textY10'));
};

function colorMeTired(){
function newTime(){
var colorMeTired = moment().format('Do MMMM YYYY,HH:MM:SS')
times.text(colorMeTired)
}
setInterval(newTime , 1000)
};
