function inLog(content){
  console.log(content);
}
function inAlert(content){
    window.alert(content);
}
function elementById(id, value){
    document.getElementById(id).innerHTML=value;
}
function write(content){
    document.write(content);
}
function charge(){
  var a:string = window.prompt("Ingrese un nombre","Nombre");
  write(a);
}
