function nightDayHandler(self){

  var target = document.querySelector('body');

  if(self.value === 'night mode'){
    target.style.background = 'black';
    target.style.color = 'white';
    self.value = 'day mode';

    var alist = document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
      alist[i].style.color = 'powderblue';
      i=i+1;
    }
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night mode';

    var alist = document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
      alist[i].style.color = 'blue';
      i=i+1;
    }
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
