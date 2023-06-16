
var i=0;
var x=["0"];
var f=["0"];
var y=0;

function first(x, i)
 {
    $("h1").text("Level "+ i);
        switch (x[i]) {
            case 1:
              $("#green").addClass("pressed");
              setTimeout(remove2 , 100);
               var green=new Audio("sounds/green.mp3");
               green.play();
                break;
            case 2:
             $("#red").addClass("pressed");
              setTimeout(remove2 , 100);
              var red=new Audio("sounds/red.mp3");
              red.play();
                break;
            case 3:
                $("#yellow").addClass("pressed");
                setTimeout(remove2 , 100);
                var yellow=new Audio("sounds/yellow.mp3");
                yellow.play();
                break;
            case 4 :
                $("#blue").addClass("pressed");
                setTimeout(remove2 , 100);
                var blue=new Audio("sounds/blue.mp3");
                blue.play();
                break;
        
            default:
                break;
        }
 }

function remove1()
 {
    $("body").removeClass("game-over");
 }

function remove2()
 {
    $(".btn").removeClass("pressed");
 }


$(document).on("keydown",function(){
    if(i==0)
    {
      x.push(Math.floor((Math.random() * 4) + 1));
      i++;
      first(x,i);    
    }
  })
$(".st").on("click",function(){
    if(i==0)
    {
      x.push(Math.floor((Math.random() * 4) + 1));
      i++;
      first(x,i);    
    }
  })

$(".btn").on("click",function(){
    var t=$(this).attr("id");
    $(this).addClass("pressed");
    setTimeout(remove2 , 150);
    var clicked=new Audio("sounds/"+t+".mp3");
    clicked.play();
    switch (t) {
        case "blue":
            f.push(4);
            break;
        case "yellow":
            f.push(3);
            break;
        case "red":
            f.push(2);
            break;
        case "green":
            f.push(1);
            break;
    
        default:
            break;
    }
    for(var z=1;z<f.length;z++)
    {
      if(x[z]==f[z])
      {
        y=y+1;
      }
     else
     {
       y=0;
       break;
     }
    }
  if(y==0)
  {
  $("body").addClass("game-over");
  $("h1").text("Game Over, Press Any Key to Restart");
  var wrong=new Audio("sounds/wrong.mp3");
  wrong.play();
  setTimeout(remove1 , 150);
  i=0;
  f=["0"];
  x=["0"];
  }
  else if(y==i)
  { 
   f=["0"];
   x.push(Math.floor((Math.random() * 4) + 1));
   i++;
   y=0;
  setTimeout(first,600,x,i);
  }
  else
  {
    y=0;
  }
})

 








