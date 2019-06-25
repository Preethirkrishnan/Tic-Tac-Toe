    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');
    var box4 = document.getElementById('box4');
    var box5 = document.getElementById('box5');
    var box6 = document.getElementById('box6');
    var box7 = document.getElementById('box7');
    var box8 = document.getElementById('box8');
    var box9 = document.getElementById('box9');
    var boxes = document.querySelectorAll("#main div"), X_or_O = 0;
    var player = document.getElementById('player_turn');

function selectwinner(b1,b2,b3) {
        b1.style = "background: rgb(165, 19, 19)";
        b2.style = "background: rgb(165, 19, 19)";
        b3.style = "background: rgb(165, 19, 19)";
        player.innerHTML = "Won Congrats &#128526;!!";
        if(b1.innerHTML == "X"){
            swal("X PLAYER WON!!");
        } else{
            swal("O PLAYER WON!!");
        }
}
function winner(){
    if(box1.innerHTML !== "" && box2.innerHTML == box1.innerHTML && box3.innerHTML == box1.innerHTML)
        selectwinner(box1,box2,box3);
    if(box4.innerHTML !== "" && box5.innerHTML == box4.innerHTML && box6.innerHTML == box4.innerHTML)
        selectwinner(box4,box5,box6);
    if(box7.innerHTML !== "" && box8.innerHTML == box7.innerHTML && box9.innerHTML == box7.innerHTML)
        selectwinner(box7,box8,box9);
    if(box1.innerHTML !== "" && box4.innerHTML == box1.innerHTML && box7.innerHTML == box1.innerHTML)
        selectwinner(box1,box4,box7);
    if(box2.innerHTML !== "" && box5.innerHTML == box2.innerHTML && box8.innerHTML == box2.innerHTML)
        selectwinner(box2,box5,box8);
    if(box3.innerHTML !== "" && box6.innerHTML == box3.innerHTML && box9.innerHTML == box3.innerHTML)
        selectwinner(box3,box6,box9);
    if(box1.innerHTML !== "" && box5.innerHTML == box1.innerHTML && box9.innerHTML == box1.innerHTML)
        selectwinner(box1,box5,box9);
    if(box3.innerHTML !== "" && box5.innerHTML == box3.innerHTML && box7.innerHTML == box3.innerHTML)
        selectwinner(box3,box5,box7);
    }
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].onclick = function () {
            if(this.innerHTML !== "X" && this.innerHTML !== "O")
            if(X_or_O % 2 == 0){
                console.log(X_or_O);
                this.innerHTML = "X";
                player.innerHTML = "O Player turn";
                winner();
                X_or_O += 1;
            }
            else{
                console.log(X_or_O);
                this.innerHTML = "O";
                player.innerHTML = "X Player turn";
                winner();
                X_or_O += 1;
        }}
    }
function reset(){
    for(i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
        boxes[i].style = "background: black";
        player.innerHTML = "X Player turn";
        X_or_O = 0;
    }
}