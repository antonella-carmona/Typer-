
const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
  ];


let index = Math.floor(Math.random() * words.length)



//_____________________________________________________________
let time = 6
let score = 0

let padre = document.querySelector(".containerUno")
let principal = document.querySelector(".main") // caja principal
let entradaPalabras = document.querySelector("#text") //input
let palabraAleatoria = document.querySelector("#randomWord") //h1
let tiempo = document.querySelector("#timeSpan")  //tiempo 10s
let puntuacion = document.querySelector("#score") //puntaje
let container= document.getElementById("end-game-container") //caja volver a empezar
//________________________________________________________________
//funcion para palabra aleatoria
function addToDOM () {                        
  if (words.length > 0) {
   palabraAleatoria.innerHTML = words[index]
  }
} 
addToDOM() 

//---------------------------------------------------

///evento input / con funcion para igualar palabra aleatoria y entrada/si esto es igual que suceda esto!
entradaPalabras.addEventListener("input", function (e) {  
  if (entradaPalabras.value == palabraAleatoria.innerHTML) {
    //que suceda esto
    
    document.getElementById("text").value = "";
          
    updateScore()

    
      }
 })

//Manipular El Tiempo____________________________________________________________________________________     
function actualizarTiempo() {
  if (time > 0){
      time --
      tiempo.innerHTML = time
      
    }
    if (time === 0) {
      clearInterval(timeInterval);
      gameOver()

    }
  
  } 
let timeInterval = setInterval(actualizarTiempo, 1000);

//_____________________________________________________________________________________________________
// Vamos a desarrollar score= puntaje, funcion actualizar puntuacion.
function updateScore() {
      score++
      puntuacion.innerHTML = score  
}         

//_____________________________________________________________________________________________________

function gameOver (){
  
 principal.classList.add("esconder")

 container.classList.add("contenedor")  //contenedor es la clase creada en css
 document.body.appendChild(container) 
 
 let h1 = document.createElement("h1")
 h1.textContent= "Te has quedado sin tiempo "

 let parrafo = document.createElement("p")
 parrafo.textContent = `Su puntaje final es ${score}`


let boton = document.createElement("button")
boton.setAttribute('onclick', 'location.reload()') //con setAttribute modificamos su contenido del elemento
boton.textContent= "Volver a empezar!"            // y con location.reload() es para volver a cargar la pagina
boton.classList.add("boton")


 container.append(h1, parrafo, boton)       //con "append" agregamos todo dentro del contenedor

 boton.focus()
 
}



