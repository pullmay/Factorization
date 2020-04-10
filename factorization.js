function show() {
  var input_n=document.getElementById("number").value;
  if ( !/^(\-|\+)?([0-9]+)$/.test(input_n) ){
    alert("Error!");
    return false;
  }
  var n=parseInt(input_n)
  if (n<=1 || n>=100000000000) {
    alert("Error!");
    return false;
  }
  t=document.createElement("p");
  f=factor(n);
  console.log(f);
  s=n+" = "
  for (i=0; i<f.length; i++) {
    if (i>0) s+=" * "
    s+=f[i]
  }
  console.log(s)
  t.innerHTML=s;
  var result=document.getElementById("result");
  while (result.firstChild) result.removeChild(result.firstChild);
  result.appendChild(t)
  return false;
}
