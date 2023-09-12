var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 1;

    canvas.addEventListener("mousedown", myMouseDown);
    
    function myMouseDown(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", myMouseMove);
    function myMouseMove(e)
    {
        // 1 - Complete o código
    }

    canvas.addEventListener("mouseup", myMouseUp);
    function myMouseUp(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", myMouseLeave);
    function myMouseLeave(e)
    {
        mouseEvent = "mouseleave";
    }

var lastPositionOfTouchX, lastPositionOfTouchY;
var width = screen.width;

newWidht =  screen.width - 70; 
newHeight = screen.height - 300;
    if(width < 992)
    {
    document.getElementById("myCanvas").width = newWidht;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) 
{
    console.log("myTouchStart");
  //Atividade Adicional
  color = document.getElementById("color").value;
  widthOfLine = document.getElementById("widthOfLine").value;
  //Fim da Atividade Adicional
         
    lastPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) 
{
    // 2 - Complete o código
   
}

//Atividade Adicional
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
