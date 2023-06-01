var muneco = document.querySelector(".img__muneco");
var text_1 = document.getElementById("text_1");
var text_2 = document.getElementById("text_2");
var text_result = document.querySelector(".text__result");
var container_result = document.querySelectorAll(".ocultar");

function encriptarBtn() {
	ocurtar()
	var input = document.getElementById("container__text").value;
	var output = encriptar(input);
	text_result.textContent = output;
	document.getElementById("container__text").value = "";
}

function desencriptarBtn() {
	ocurtar()
	var input = document.getElementById("container__text").value;
	var output = desencriptar(input);
	text_result.textContent = output;
}

function encriptar(text) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (text.includes(matrizCodigo[i][0])) {
			text = text.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}
	return text
}

function desencriptar(text) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (text.includes(matrizCodigo[i][1])) {
			text = text.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
		}

	}
	return text
}

function ocurtar(){
	muneco.classList.add("ocultar");
	text_1.classList.add("ocultar");
	text_2.classList.add("ocultar");
	container_result[0].classList.add("activate");
	container_result[1].classList.add("activate");
	text_result.classList.add("container__result")

}

const btnCopy = document.getElementById('btn__copy');
	btnCopy.addEventListener('click', copiar = () => {
	var content = document.querySelector('.text__result').textContent;
	navigator.clipboard.writeText(content)
	alert('Texto copiado: ' + content);
  });

  