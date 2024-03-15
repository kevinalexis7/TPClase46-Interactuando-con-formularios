const $ = (id) => document.getElementById(id)


window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    console.log("moviesAddValidation sucess!!")

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    


const form = document.querySelector('form')





const inputTitle = form.elements[0];
const inputRating = form.elements[1];
const inputAwards = form.elements[2];
const inputReleaseDate = form.elements[3];
const inputLength = form.elements[4];
const inputgenres = form.elements[5];

const inputTitleID = document.getElementById('title');
const inputRatingID = document.getElementById('rating');
const inputAwardsID = document.getElementById('awards');
const inputreleaseDateID = document.getElementById('release_date');
const inputLengthID = document.getElementById('length');
const inputgenresID = document.getElementById('genre_id');

let errores = [];
//Validation : TITLE
$('title').addEventListener('focus', () => {
    $("info-title").innerHTML = "Debes dar el nombre original de la peli";
    setTimeout(() => {
        $("info-title").innerHTML = "";
    }, 2000)
    $("error-title").innerHTML = "";
    
});

$('title').addEventListener('blur', (e) => {
    $("info-title").innerHTML = "";
    if(e.target.value.length < 4)$("error-title").innerHTML = "Tan corto el título??"
    if(!e.target.value)$("error-title").innerHTML = "Te dije que pongas el nobre de la PELII!!!"
});


//Validation : RATING
$('rating').addEventListener('focus', () => {
    $("info-rating").innerHTML = "Debes dar la info del rating";
    setTimeout(() => {
        $("info-rating").innerHTML = "";
    }, 2000)
    $("error-rating").innerHTML = "";
});

$('rating').addEventListener('blur', (e) => {
    $("info-rating").innerHTML = "";
    if(e.target.value < 0)$("error-rating").innerHTML = "Tan mal le fue??!";
    if(e.target.value > 10)$("error-rating").innerHTML = "PARAAA!!!!";
    if(!e.target.value)$("error-rating").innerHTML = "No averiguaste el rating??!";
});



//Validation : AWARDS
$('awards').addEventListener('focus', () => {
    $("info-awards").innerHTML = "Debes dar la info del awards";
    setTimeout(() => {
        $("info-awards").innerHTML = "";
    }, 2000)
    $("error-awards").innerHTML = "";
});

$('awards').addEventListener('blur', (e) => {
    $("info-awards").innerHTML = "";
    if(e.target.value < 0)$("error-rating").innerHTML = "Le quitaron premios??!";
    if(e.target.value > 10)$("error-rating").innerHTML = "PARAAA!!!!";
    if(!e.target.value)$("error-awards").innerHTML = "Debes dar la info del awards!!!";
});



//Validation : LENGTH
$('length').addEventListener('focus', () => {
    $("info-length").innerHTML = "Debes dar la info del length";
    setTimeout(() => {
        $("info-length").innerHTML = "";
    }, 2000)
    $("error-length").innerHTML = "";
});

$('length').addEventListener('blur', (e) => {
    $("info-length").innerHTML = "";
    if(e.target.value < 60)$("error-rating").innerHTML = "Es una peli o un capítulo??!";
    if(e.target.value > 360)$("error-rating").innerHTML = "PARAAA!!!!";
    if(!e.target.value)$("error-length").innerHTML = "No averiguaste el rating??!";
});



form.addEventListener('submit',function (e) {
    e.preventDefault()
for (let i = 0; i < form.elements.length - 1; i++) {
    if($(`error-${form.elements[i].name}`)) {
        $(`error-${form.elements[i].name}`).innerHTML !== '' && errores.push($(`error-${form.elements[i].name}`).innerHTML)
    } 
}
    console.log(errores)

    if(errores.length > 0){
        alert("Algunos campos no están completos")
        errores = []
    }else{
        form.submit()
        alert('La película se guardó satisfactoriamente')
    }
    
})

$('title').focus()
} 