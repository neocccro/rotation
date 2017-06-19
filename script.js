var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var myTime = document.getElementById('myTime');
var image = [];

var im = ["face","seconds","minutes","hours"];
var time = [];

var time = new Date();

for(var i = 0; i < 4; i++)
{
  image[i] = new Image();
  image[i].src = im[i] + ".png";
}

image[1].addEventListener('load',()=>{
  setInterval(update, 100);
});

function update()
{
  context.clearRect(0,0,canvas.width,canvas.height);
  time = new Date();
  myTime.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  refresTime();
  for(var i = 0; i < 4; i++)
  {
    drawRotated(canvas.width/2,canvas.height/2,time[i],image[i],image[i].width/2,image[i].height - image[i].width/2,image[i].width,image[i].height);
  }
}

function refresTime()
{
  time[0] = 0;
  let temp = time.getMilliseconds() / 1000;
  time[1] = (time.getSeconds() + temp) / 60;
  time[2] = (time.getMinutes() + time[1]) / 60;
  time[3] = (time.getHours() + time[2]) / 12;
}

function drawRotated(x,y,rot,img,centerx,centery,w,h)
{
  context.translate(x, y);
  context.rotate((1-rot) * Math.PI * 2);
  context.drawImage(img, -centerx, -centery,w,h);
  context.rotate(-(1-rot) * Math.PI * 2);
  context.translate(-x, -y);
}
