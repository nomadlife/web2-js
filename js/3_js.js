var links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i=0;
    while(i< alist.length){
      alist[i].style.color = color;
      i=i+1;
    }
  }
}

var body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setColor_background:function(color){
    document.querySelector('body').style.background = color;
  }
}


function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night mode'){
    body.setColor_background('black')
    body.setColor('white');
    self.value = 'day mode';
    links.setColor('powderblue');
  } else {
    body.setColor_background('white')
    body.setColor('black');
    self.value = 'night mode';
    links.setColor('blue');
  }
}

function nightHandler(){
  document.querySelector('body').style.backgroundColor='black';
  document.querySelector('body').style.color='white';
}

function dayHandler(){
  document.querySelector('body').style.backgroundColor='white';
  document.querySelector('body').style.color='black';
}
