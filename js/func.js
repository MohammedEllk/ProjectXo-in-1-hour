var  count = 0;  

function func(id){
  
    if(count%2==0){
      document.getElementById("btn"+id).innerHTML = "X";
      document.getElementById("btn"+id).disabled = 'true';
      count++;
      console.log(count);
    }
    else {
      document.getElementById("btn"+id).innerHTML = "O";
      document.getElementById("btn"+id).disabled = 'true';
      count++;
      console.log(count);
    }
    verify();
  
}
function reset(){

  for(let i=1;i<=9;i++){

    $("#btn"+i).prop("disabled",false);
    document.getElementById("btn"+i).innerHTML = "";
    
  }
  count=0;
}

function verify(){
  let btn1 = document.getElementById("btn1").innerHTML;
  let btn2 = document.getElementById("btn2").innerHTML;
  let btn3 = document.getElementById("btn3").innerHTML;
  let btn4 = document.getElementById("btn4").innerHTML;
  let btn5 = document.getElementById("btn5").innerHTML;
  let btn6 = document.getElementById("btn6").innerHTML;
  let btn7 = document.getElementById("btn7").innerHTML;
  let btn8 = document.getElementById("btn8").innerHTML;
  let btn9 = document.getElementById("btn9").innerHTML;
  if(btn1=="X" && btn2 =="X" && btn3=="X" || btn4=="X" && btn5 =="X" && btn6=="X" || btn7=="X" && btn8 =="X" && btn9=="X" || btn1=="X" && btn4=="X" && btn7=="X" || btn2=="X" && btn5 =="X" && btn8=="X" || btn3=="X" && btn6 =="X" && btn9=="X" || btn1=="X" && btn5 =="X" && btn9=="X" || btn3=="X" && btn5 =="X" && btn7=="X" ){
    alert("X WIN");
    reset();
  }
  if(btn1=="O" && btn2 =="O" && btn3=="O" || btn4=="O" && btn5 =="O" && btn6=="O" || btn7=="O" && btn8 =="O" && btn9=="O" || btn1=="O" && btn4=="O" && btn7=="O" || btn2=="O" && btn5 =="O" && btn8=="O" || btn3=="O" && btn6 =="O" && btn9=="O" || btn1=="O" && btn5 =="O" && btn9=="O" || btn3=="O" && btn5 =="O" && btn7=="O" ){
    alert("O WIN");
    reset();
  }
  if(count==9){
    alert("Draw");
    reset();
  }
  

}





