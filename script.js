function encriptarBtn() {
	var input = document.getElementById("input").value;
	var output = encriptar(input);
	document.getElementById("input_2").value = output;
}

function desencriptarBtn() {
	var input = document.getElementById("input_2").value;
	var output = desencriptar(input);
	document.getElementById("input_2").value = output;
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