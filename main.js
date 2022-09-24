var dsp = "0";  //表示部
var opr1;       //数字
var operator;   //演算子
var wasnum = false;  //最後押下キー


//表示部処理
function display (numkey) {
	wasnum = numkey;
	document.getElementById("disp").innerHTML = dsp;
}

//数字処理
function nk(k) {
  var ch = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."] [k];

  if (! wasnum) {
    if ( k > 9) dsp = "0.";
    else dsp = ch;
  } else {
    if (k > 9) {
      if ( dsp.indexOf(".") < 0) dsp += ".";
    } else {
      if (dsp === "0") {
        dsp = ch;
      } else {
        dsp += ch;
      }
    }
  }
  display(true);
}

//演算キー処理
function op(k) {
  if (operator !== undefined &&
  operator != 9 &&
  (wasnum || k == 9)) calculate();
  operator = k;
  opr1 = parseFloat(dsp);
  display(false);
}

//計算
function calculate() {
  switch(operator) {
    case 1:
    	opr1 += parseFloat(dsp);
    	break;
    case 2:
    	opr1 -= parseFloat(dsp);
    	break;
    case 3:
    	opr1 *= parseFloat(dsp);
    	break;
    case 4:
    	opr1 /= parseFloat(dsp);
    	break;
  }
  dsp = String(opr1);
}

//クリアキー
function ac() {
  dsp = "0";
  opr1 = operator = undefined;
  display(false);
}