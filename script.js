document.addEventListener('DOMContentLoaded', function() {
    scrollNav()
})

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach (link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}

// let textoNombre =  document.getElementById('name');
// let textoEmail =  document.getElementById('email');
// let opcionTipo =  document.getElementById('tipo');
// let textoMensaje =  document.getElementById('mensaje');
// const btnEnviar = document.querySelector('.enviar');

// btnEnviar.addEventListener('click', function() {
//     localStorage.setItem("Nombre capturado", textoNombre.value);
//     localStorage.setItem("Nombre capturado", textoNombre.value);
//     localStorage.setItem("Nombre capturado", textoNombre.value);

// })

console.log("Hola, sí cargha");

const formulario = document.querySelector('.form-contactenos');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = {
        nombre: document.getElementById('name').value,
        email: document.getElementById('email').value,
        opcion: document.getElementById('tipo').value,
        mensaje: document.getElementById('mensaje').value
    };

    localStorage.setItem('datos-usuario', JSON.stringify(usuario));


    console.log("Datos guardados en el localStorage",usuario);
    alert("Usuario guardado correctamente", usuario);

    formulario.reset();
})