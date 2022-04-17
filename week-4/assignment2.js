function ajax(src, callback){

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      const products = JSON.parse(this.responseText);
    callback(products);
    }
  };
  xhr.open("GET", src);
  xhr.send();
}

function render(data){
  //創一個div
  const newProduct = document.createElement('div');
  const newText = document.createTextNode(data);
  //把文字加進div
  newProduct.appendChild(newText); 
  //把div加進body
  document.body.appendChild(newProduct);
// your code here.
// document.createElement() and appendChild() are preferred. No innerHTML or
// something alike
}
ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function(response){
    render(response);
  }
)