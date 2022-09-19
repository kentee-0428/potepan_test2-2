/*global $*/ 
$(document).ready(function(){
	// 変数定義
	let num_1 ;
	let num_2;
	let math;
	let minus;
	let formula_count;
	
	num_1 = null;
	num_2 = null;
	math = null;
	minus = false;
	formula_count = 0;
	
	// 最初の数値と演算子入力チェック
	$(".cal-click").click(function(){
		// 演算子入力チェック
		if (num_1 == null && math == null) {
			// 前半（+, * , /）
			if ($(this).val() == "+" || $(this).val() == "*" || $(this).val() == "/") {
				math = null;
				num_1 = null;
				num_2 = null;
				minus = false;
				formula_count = 0;
				return;
			} else {
				// 後半（-）
				if ($(this).val() == "-") {
					minus = true;
					num_1 = "-";
				}
			}
		}
		// 数値入力チェック
		if ($(this).attr("data-role") != "cal-formula") {
			if (minus) {
				num_1 = num_1 + $(this).val();
				$("#display").val($("#display").val() + $(this).val());
				formula_count = 0;
				minus = false;
				return;
			}
			
			if (num_1 == null && math == null) {
				$("#display").val('');
				$("#display").val($("#display").val() + $(this).val());
				formula_count = 0;
				num_1 = $(this).val();
			} else if (num_1 != null && math == null) {
				$("#display").val($("#display").val() + $(this).val());
				formula_count = 0;
				num_1 = num_1 + $(this).val();
			} else if (num_2 == null && math != null) {
				$("#display").val($("#display").val() + $(this).val());
				formula_count = 0;				
				num_2 = $(this).val();
			} else if (num_2 != null && math != null) {
				$("#display").val($("#display").val() + $(this).val());
				formula_count = 0;
				num_2 = num_2 + $(this).val();
			} else {
				return;
			}
		} else {
			formula_count ++;
			if (formula_count == 2) {
				formula_count == 1;
			} else if (minus) {
				$("#display").val('');
				$("#display").val($("#display").val() + $(this).val());
			} else if (formula_count == 1 && num_1 != null && num_2 == null) {
				math = $(this).val();
				$("#display").val($("#display").val() + $(this).val());
			} else if (formula_count == 1 && num_1 != null && num_2 != null) {
				calculation();
				num_2 = null;
				math = $(this).val();
				$("#display").val($("#display").val() + $(this).val());
			} else {
				return;
			}
		}
	});
	
	// 計算関数
	function calculation() {
	  switch (math) {
			case "+":
				num_1 = Number(num_1) + Number(num_2);
				break;
				case "-":
					num_1 = Number(num_1) - Number(num_2);
					break;
				case "*":
					num_1 = Number(num_1) * Number(num_2);
					break;
				case "/":
					num_1 = Number(num_1) / Number(num_2);
					break;				
				default:
					break;
	  }
	}
	
	// クリアキー
	$(".clear-btn").click(function(){
		$("#display").val('');
		math = null;
		num_1 = null;
		num_2 = null;
		minus = false;
		formula_count = 0;
	});
	
	// イコールキー
	$(".cal-btn").click(function(){
		calculation();
		$("#display").val('');
		$("#display").val(num_1);
		math = null;
		num_1 = null;
		num_2 = null;
		minus = false;
		formula_count = 0;
	});	
});

