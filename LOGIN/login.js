import {sendHTTPrequest} from "../loginAndRegister.js";

const form_login = document.getElementById("form_login");



const printHTTPrequest=async(url,options)=>{

    const message = document.querySelector(".message");
    message.style.display="block";

    const data = await sendHTTPrequest(url,options); //obtengo los datos del servidor
    
    if(data == "success") window.location.href = "pagina2.php"; //si todo es true entonces lo manda a esta url pasada por parametro 

    else if(data == "error") message.innerHTML = "<h5>ERROR AL CONECTAR CON LA BBDD!</h5>";

    message.innerHTML = "<h5>USUARIOS Y/O CONTRASEÑA INCORRECTO!</h5>";



}



form_login.addEventListener("submit",(e) => {
    
    e.preventDefault(); //evito que el fomrulario se mande al hacer un "submit"

    const data  = new FormData(form_login); 

    const options  = {
        method:"POST",
        body:data
    }

    printHTTPrequest("login.php",options) //manda la configuracion a esta funcion

})