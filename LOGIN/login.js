const form_login = document.getElementById("form_login");

form_login.addEventListener("submit",(e) => {
    e.preventDefault();

    //capturar datos antes de mandar al server
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

   
    //validarlos
    const email_prepare = email.trim().toLowerCase().toString();
    const password_prepare = password.trim().toLowerCase().toString();


    const data = {
        email : email_prepare,
        password : password_prepare
    }

    //mandar al server con fetch

    fetch("login.php",{
        method:"POST",
        headers: {
                'Content-Type': 'text/plain'
          },
        body:data
    })

    .then(res => res.text())
    .then(data => console.log(data))
    

})