var gradient=document.querySelector('#background')




var barNode=document.querySelector('#minuteBar')
var getTime=function(){
var fullDate = new Date();
var hour=parseInt(fullDate.getHours());  
var minute=parseInt(fullDate.getMinutes());
var second=parseInt(fullDate.getSeconds());
    if(hour<10){hour='0'+hour}
    if(minute<10){minute='0'+minute}
    if(second<10){second='0'+second}
var timeArray=[hour,minute,second]
return timeArray
}
var colorNode=document.querySelector('#color')
var clockNode=document.querySelector("#clock")

clockNode.addEventListener("mouseover", function( event ) {   
    event.target.style.opacity = "0";
    colorNode.style.opacity='1';
})
var refresh=function(){
  var rawColor=getColor()
  var raw='#'+rawColor.join('')
  gradient.style.background='radial-gradient(circle,rgb(205,205,205),'+raw+')'
  var colorDisplay=String(rawColor[0])+rawColor[1]+':'+String(rawColor[2])+rawColor[3]+':'+String(rawColor[4])+rawColor[5]
  colorNode.textContent=colorDisplay
  setLength()
    var timeArray=getTime()
    var timeString= timeArray[0]+":"+timeArray[1]+":"+timeArray[2]
    clockNode.textContent=timeString
   
}
clockNode.addEventListener("mouseout", function( event ) {   
    event.target.style.opacity = "1";
    colorNode.style.opacity='0';
})

var setLength=function(){
  var seconds=parseInt(getTime()[2])
  var width=parseFloat(seconds*1.666)+'%'
  
  barNode.style.width=width
  
  
}
var getColor=function(){
var timeArray=getTime()
var hexArray=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
var hexCode=['0','0','0','0','0','0']




var bigHour=parseInt(timeArray[0]*.624)
var littleHours=function(){
    if(timeArray[0]>=15){return timeArray[0]-15}
    return parseInt(timeArray[0])
}
var littleHour=littleHours()

var bigMinute=parseInt(timeArray[1]*.25)
var littleMinutes=function(){
    var interval=parseInt(timeArray[1])
if(timeArray[1]>=45){interval=timeArray[1]-45}
if(timeArray[1]>=30&&timeArray[1]<45){interval=timeArray[1]-30}
if(timeArray[1]>=15&&timeArray[1]<30){interval=timeArray[1]-15}
 return interval
}
var littleMinute=littleMinutes()

var bigSecond=parseInt(timeArray[2]*.25)
var littleSeconds=function(){
var interval=parseInt(timeArray[2])
if(timeArray[2]>=45){interval=timeArray[2]-45}
if(timeArray[2]>=30&&timeArray[2]<45){interval=timeArray[2]-30}
if(timeArray[2]>=15&&timeArray[2]<30){interval=timeArray[2]-15}
  
 return interval
}
    
var littleSecond=littleSeconds()
hexCode[0]=hexArray[bigHour]
hexCode[1]=hexArray[littleHour]
hexCode[2]=hexArray[bigMinute]
hexCode[3]=hexArray[littleMinute]
hexCode[4]=hexArray[bigSecond]
hexCode[5]=hexArray[littleSecond]


return hexCode



}




setInterval(refresh,200)