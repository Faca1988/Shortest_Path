function inLog(content:string){
  console.log(content);
}
function inAlert(content:string){
    window.alert(content);
}
function elementById(id:string, value:string) {
    document.getElementById(id).innerHTML =value;
}
function write(content:string) {
    document.write(content);
}

function charge(){
  var a:string=window.prompt("Ingrese un nombre","Nombre");
  write(a);
}
