canvas=document.getElementById("mycanvas"); 
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(200,200,20,0,360);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.arc(245,200,20,0,360);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(290,200,20,0,360);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=2;
ctx.arc(223,230,20,0,360);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.arc(267,230,20,0,360);
ctx.stroke();
