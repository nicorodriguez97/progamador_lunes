const texto = document.getElementById('texto');
const contar = document.getElementById('contar');

//console.log(texto,contar);
texto.addEventListener('keyup',function () {
   contar.innerText = texto.value.length;
})
