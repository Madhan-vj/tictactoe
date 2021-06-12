var symbol = 1;
function box(data) {
  let id = data.target.id;
  console.log(data.target.id);
  if (symbol == 1) {
    document.getElementById(id).value = "X";
    document.getElementById(id).disabled = true;
    symbol = 0;
  }
  else {
    document.getElementById(id).value = "O";
    document.getElementById(id).disabled = true;
    symbol = 1;
  }
  checkwin();
}
function checkwin() {
  var b1, b1, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  if ((b1 == b2) && (b2 == b3) && (b1 != "")) {
    document.getElementById('print').innerHTML = `Player ${b1} won`;
    alert(`Player ${b1} won`);
    // document.getElementsByTagName("INPUT").disabled = true;
  } else if ((b1 == b5) && (b5 == b9) && (b1 != "")) {
    document.getElementById('print').innerHTML = `Player ${b1} won`;
    // alert(`Player ${b1} won`);
    console.log(`Player ${b1} won`);
    // document.getElementsByTagName("INPUT").disabled = true;
  } else if ((b1 == b4) && (b4 == b7) && (b1 != "")) {
    document.getElementById('print').innerHTML = `Player ${b1} won`;
    alert(`Player ${b1} won`);
    // document.getElementsByTagName("INPUT").disabled = true;
  } else if ((b3 == b5) && (b5 == b7) && (b3 != "")) {
    document.getElementById('print').innerHTML = `Player ${b3} won`;
    alert(`Player ${b7} won`);
    // document.getElementsByTagName("INPUT").disabled = true;
  } else if ((b7 == b8) && (b8 == b9) && (b8 != "")) {
    document.getElementById('print').innerHTML = `Player ${b8} won`;
    alert(`Player ${b8} won`);
    // document.getElementsByTagName("INPUT").disabled = true;
  } else if ((b9 == b6) && (b6 == b3) && (b9 != "")) {
    document.getElementById('print').innerHTML = `Player ${b9} won`;
    alert(`Player ${b9} won`);
    // document.getElementsByTagName("INPUT").disabled = true;
  } else if ((b2 == b5) && (b5 == b8) && (b2 != "")) {
    document.getElementById('print').innerHTML = `Player ${b8} won`;
    alert(`Player ${b8} won`);
    // document.getElementsByTagName("INPUT").disabled = true;
  } else if ((b4 == b5) && (b5 == b6) && (b6 != "")) {
    document.getElementById('print').innerHTML = `Player ${b6} won`;
    alert(`Player ${b6} won`);
    // document.getElementsByTagName("INPUT").disabled = true;
  }
}
function reset() {
  location.reload();
  document.getElementById('b1').value = '';
  document.getElementById("b2").value = '';
  document.getElementById("b3").value = '';
  document.getElementById("b4").value = '';
  document.getElementById("b5").value = '';
  document.getElementById("b6").value = '';
  document.getElementById("b7").value = '';
  document.getElementById("b8").value = '';
  document.getElementById("b9").value = '';
}