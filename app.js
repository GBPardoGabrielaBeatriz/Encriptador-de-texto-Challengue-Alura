//let textoUsuario=document.getElementById('texto-usuario').value;

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
     alert('Debes ingresar alguna palabra');
    }  
    console.log(textoEncriptado)
}

function desencriptarTexto(){

}

//EVENTO PARA EL BOTON 
let encriptarBtn=document.getElementById('encriptar-btn');
encriptarBtn.addEventListener("click", () => {
    encriptarTexto()
}
)


