function func() {
	x = document.getElementById("num").value;
	x = parseInt(x);
	// 変数
	var string = String(x) + " = ";
	var n = Math.floor(Math.sqrt(x));
	var r = 0;
	var a = [];
	var p = [];
	// 素因数分解
	for (var i=2; i<n+1; i++) {
		if (x % i == 0) {
			r = 0; // 指数カウンタ
			while ((x%i) == 0) {
				r++;
				x = x / i;
				a.push(i);
			}
			p.push(r);
		}
	}
	//残りが素数だった場合の処理
	if (x > n) {
		a.push(x);
		p.push(1);
	}
	// 出力の形式を整える
	for (var i=0; i<a.length; i++) {
		string += String(a[i]);
		if (i != a.length -1) {
			string += " * ";
		}
	}
	// 出力
	document.getElementById("answer").innerHTML = string;
}
