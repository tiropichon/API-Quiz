async function obtenerDatos(url){
	const newDiv = document.createElement('div');
	newDiv.classList.add('contenedor-preguntas');
	document.querySelector(".contenedor").appendChild(newDiv);

	const resultado = await fetch(url);
	const datos = await resultado.json();

	for(let i=0; i<datos.results.length; i++){
		const newH3 = document.createElement("h3")
		newH3.textContent = `Pregunta ${i+1}. ${datos.results[i].question}`;
		document.querySelector(".contenedor-preguntas").appendChild(newH3);
		
		const newPCorrect = document.createElement("p");
		newPCorrect.classList.add('bold');
		newPCorrect.textContent = datos.results[i].correct_answer;
		newPCorrect.addEventListener("click",function(){
			newPCorrect.style.background = "lightgreen";
			newPCorrect.style.color = "black";
		})
		document.querySelector(".contenedor-preguntas").appendChild(newPCorrect);

		datos.results[i].incorrect_answers.forEach( incorrect_answer=> {
			const newP = document.createElement("p");
			newP.textContent = incorrect_answer;
			newP.addEventListener("click",function(){
				newP.style.background = "red";
				newP.style.color = "black";
			})
			document.querySelector(".contenedor-preguntas").appendChild(newP);}
		);
	}
}

//Función que se llama cuando hago click al botón del formulario.
function generarFormulario(){
	const url="https://opentdb.com/api.php?amount=10";
	obtenerDatos(url);
}