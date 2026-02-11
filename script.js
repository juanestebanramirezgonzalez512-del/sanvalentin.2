const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");
const carta = document.getElementById("carta");
const tiempo = document.getElementById("tiempo");

/* iniciar música */
function iniciar(){
    document.getElementById("musica").play();
    document.getElementById("pantallaInicio").style.display = "none";
}

/* botón NO escapa */
botonNo.addEventListener("mouseover", function(){
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 250 - 125;
    botonNo.style.transform = `translate(${x}px, ${y}px)`;
});

/* carta romántica */
botonSi.addEventListener("click", function(){

    carta.style.display = "block";

    carta.innerHTML = `
    <h3>💙 Para ti 💙</h3>

    <p>
    Desde que me diste esta oportunidad, ahora se que jamas me arrepenire de estar contigo.
    Por eso queria hacer algo diferente y especial pa tu.
    </p>

    <p>
    Gracias por acompañarme, por ser mi apoyo,
    por ser una de las personas mas importantes en mi vida.
    </p>

    <p>
    El sábado 14 de febrero te tengo una pequeña cita,
    espero no faltes porque quiero pasar un momento
    muy especial contigo.
    </p>

    <p>
    Quiero seguir creando recuerdos,
    riendo contigo, molestándote,
    abrazándote y cuidándote.
    </p>

    <p>
    Te prometi seguir esforzándome por hacerte feliz
    cada día más.
    </p>

    <h2>Te Amo Muchisimo Mi Reina Hermosa 💙</h2>
    `;
});

/* contador */
const fechaInicio = new Date("2022-02-29T00:00:00");

function actualizarTiempo(){
    const ahora = new Date();
    let diferencia = ahora - fechaInicio;

    let dias = Math.floor(diferencia / (1000*60*60*24));
    let horas = Math.floor((diferencia / (1000*60*60)) % 24);
    let minutos = Math.floor((diferencia / (1000*60)) % 60);
    let segundos = Math.floor((diferencia / 1000) % 60);

    tiempo.innerHTML = `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos 💙`;
}

setInterval(actualizarTiempo, 1000);

/* corazones azules */
function crearCorazon(){
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "💙";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = (Math.random()*3+2) + "s";

    document.body.appendChild(corazon);

    setTimeout(()=>{
        corazon.remove();
    },5000);
}


setInterval(crearCorazon, 300);
