/*

Alternativa propuesta por Alura
const matrizCode = [
    ["e","inter"],
["i","imes"],
["a","ai"],
["o","ober"],
["u","ufat"],
];

function encriptar(textoUsuario){
    for (let i = 0; i < matrizCode.length; i++) {
        console.log(matriz_code)
        if(textoUsuario.includes(matrizCode[i][0])){
            textoUsuario=textoUsuario.replaceAll(
                matrizCode[i][0],
                matrizCode[i][1]
            )
        }
    }
    return textoUsuario;
}
console.log(matrizCode.length)

*/




function encriptarTexto(){

    let textoUsuario=document.getElementById('texto-usuario').value;
    let imagenDeEspera=document.getElementById('muñeco');
    let texto=document.getElementById('texto');
    let mensaje=document.getElementById('mensaje');
    let textoYaEncriptado=document.getElementById('texto-encriptado');

    if (textoUsuario.length === 0) {
        mensaje.textContent = "Ningun mensaje fue encontrado!";
        texto.textContent="Ingrese el mensaje secreto para encriptar o desencriptar"
        alert('Che, ingresa alguna palabra');
        imagenDeEspera.src="";
    }else {
    if (!validacionDeTexto(textoUsuario)) {
        mensaje.textContent = "El mensaje contiene caracteres inválidos!";
    }else{
    let textoEncriptado=textoUsuario
    /*
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
        */
        .replace(/e/gi, "enter")
        .replace(/i/gi ,"imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        console.log(textoEncriptado)
    //if(textoUsuario.length != 0){
        document.getElementById('texto-encriptado').value = textoEncriptado;
textoYaEncriptado.innerText=textoEncriptado
console.log(textoYaEncriptado)
       // document.getElementById('texto-usuario').value=textoEncriptado;// Aca hay que volver a acceder a la variable, ya que la misma que fue llamada anteriormente ya fue modificada con el encriptado
        mensaje.textContent="Mensaje encriptado exitosamente!"
        texto.textContent="";
        imagenDeEspera.src="";
    }
}
}
function desencriptarTexto(){
let textoUsuario=document.getElementById('texto-encriptado').value;
let imagenDeEspera=document.getElementById('muñeco');
let texto=document.getElementById('texto');
let textoDesencriptado=textoUsuario
    
.replaceAll("enter", "e")
.replaceAll("imes", "im")
.replaceAll("ai", "a")
.replaceAll("ober", "o")
.replaceAll("ufat", "u");

if(textoUsuario.length != 0){
    document.getElementById('texto-usuario').value=textoDesencriptado;
    mensaje.textContent="Mensaje desencriptado exitosamente!"
    texto.textContent="";
    imagenDeEspera.src="";
}else{
    imagenDeEspera.src="";
    mensaje.textContent="Ningun mensaje fue encontrado!"
    texto.textContent="Ingrese el mensaje secreto para encriptar o desencriptar"
 alert('Debes ingresar alguna palabra');
}  
}



function validacionDeTexto(textoUsuario){
    let regex = /^[a-z]+$/;
    return regex.test(textoUsuario);
}
 



//EVENTOS PARA EL BOTON 
let encriptarBtn=document.getElementById('encriptar-btn');
encriptarBtn.addEventListener("click", () => {
    encriptarTexto()
}
)

let desencriptarBtn=document.getElementById('desencriptar-btn');
desencriptarBtn.addEventListener("click",() =>{
    desencriptarTexto
})


