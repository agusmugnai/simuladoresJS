const login = document.getElementById("loginForm");

const usuario = { mail: "pepeargento@gmail.com", password: "1234" }

login.addEventListener("submit", e => {
    e.preventDefault();
    const mail = e.target[0].value;
    const password = e.target[1].value;

    if (mail === usuario.mail && password === usuario.password) {
        alert("Bienvenido a Banco Andes");
    } else {
        alert("Datos incorrectos.")
    }
})
