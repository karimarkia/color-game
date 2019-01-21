var squareNum = 6;
var colors = [];
var pickerColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
    setupButtons();
    setupSquares();
    reset();
}

function setupButtons(){
    for(var i =0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
           modeBtn[0].classList.remove("selected");
           modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy" ? squareNum =3 : squareNum=6 ;
            reset();
        });
    } 
}

function setupSquares(){
    for(var i =0; i < square.length; i++){
        square[i].addEventListener("click", function(){
            //grab the color of the square
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickerColor){
                changeColor(clickedColor);
                resetBtn.textContent="play again ?";
                message.textContent="Correct";
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor="#232323";
                message.textContent="Try Again";
            }
        })
    }
}

function reset(){
    colors = pickRandomColor(squareNum);
    pickerColor = pickedColor();
    colorDisplay.textContent= pickerColor;
    for(var i=0; i<square.length; i++){
        if(colors[i]){
        square[i].style.display="block"; 
        square[i].style.backgroundColor=colors[i];
    }else {
        square[i].style.display="none";
    }
}
    h1.style.backgroundColor="steelblue";
    message.textContent="";
    resetBtn.textContent="New Game";
}

resetBtn.addEventListener("click",function(){
    reset();
});

function changeColor(color){
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor=color;
    }
}

function pickedColor(){
   var random= Math.floor(Math.random() * colors.length);
   return colors[random];
}

function pickRandomColor(num){
    var arr = [];
    for(var i=0; i <num; i++){
       arr.push(randomColor(num));
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}