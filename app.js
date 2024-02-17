
function encriptarTexto(){
    let textoUsuario=document.getElementById('texto-usuario').value;
    let imagenDeEspera=document.getElementById('muñeco');
    let texto=document.getElementById('texto');
    let mensaje=document.getElementById('mensaje');
    let textoEncriptado=textoUsuario
    
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    if(textoUsuario.length != 0){
        document.getElementById('texto-usuario').value=textoEncriptado;// Aca hay que volver a acceder a la variable, ya que la misma que fue llamada anteriormente ya fue modificada con el encriptado
        mensaje.textContent="Mensaje encriptado exitosamente!"
        texto.textContent="";
        imagenDeEspera.src="";
    } else{
        imagenDeEspera.src="";
        mensaje.textContent="Ningun mensaje fue encontrado!"
        texto.textContent="Ingrese el mensaje secreto para encriptar o desencriptar"
    alert('Che, ingresa alguna palabra');
    }  
}

function desencriptarTexto(){
let textoUsuario=document.getElementById('texto-usuario').value;
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


