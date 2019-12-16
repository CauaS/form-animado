const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

/* Adiciona evento sempre houver um evento de clique */
btnLogin.addEventListener("click", (event) => {
    event.preventDefault();

    const fields = [...document.querySelectorAll(".input-block input")];

    fields.forEach(field => {
        if(field.value == "") {
            form.classList.add("validate-error");
        }
    })
    
    const formError = document.querySelector(".validate-error");
    
    if(formError){
        formError.addEventListener("animationend", (event) => {
            if(event.animationName == "nono"){
                formError.classList.remove("validate.error");
            }
        });
    } else {
        //Adiciona uma classe ao form;
       form.classList.add("form-hide");
    }    
});

/* Cria um listener para o evento click sempre ao inicar animação */
form.addEventListener("animationstart", event => {

    //diz qual a animação em especifico.
    if(event.animationName == "down"){
        document.querySelector("body").style.overflow = "hidden";
    }
});

form.addEventListener("animationend", event => {
    if(event.animationName =="down"){
        form.style.display = "none";
        document.querySelector("body").style.overflow = "none";
    }
});

/* squares */

//adiciona a const a classe square;
const ulSquares = document.querySelector("ul.squares");

for(let i = 0; i < 11; i++){
    //cria um elemento li
    const li = document.createElement("li");

    const random = (min, max) => Math.random()*(max - min) + min;

    //cria size diferente;
    const size = Math.floor(random(10, 120));

    //cria posições diferente;
    const position = random(1, 99);

    //cria delays diferentes
    const delay = random(5, 0.1);

    //cria durações diferentes;
    const duration = random(12, 24);
    
    //aplica estilo aos lis criados acima;
    li.style.width=`${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;
    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bizier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`;

    //adiciona mais li's a classe contida no ulSquares;
    ulSquares.appendChild(li)
}
