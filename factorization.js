function func() {
	// 受け取った整数に1を加えて出力
	x = document.getElementById("num").value;
	x = parseInt(x);
	document.getElementById("answer").innerHTML = x;
	// 以下テスト
	n = Math.floor(Math.sqrt(x));
	var r = 0;
	var result = Array(); //辞書的な？
	var a = [];
	var p = [];
	for (var i=2; i<n+1; i++) {
		if (x%i == 0) {
			// a[cnt++] = i;
			r = 0; // 指数カウンタ
			while ((x%i) == 0) {
				r++;
				x = x / i;
				a.push(i);
			}
			result.push({num:i, r:r});
			p.push(r);
		}
	}
	//残りが素数だった場合の処理
	if (x > n) {
		result.push({num:x, r:1});
		a.push(x);
		p.push(1);
	}
  	// 結果を表示
	const res1 = "prime factorization : " + a;
	const res2 = "power : " + p;
	document.getElementById("answer").innerHTML = res1;
	document.getElementById("power").innerHTML = res2;
	// 表示形式を整える
}
