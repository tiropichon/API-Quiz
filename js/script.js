

//fetch(url)
  //.then(res => res.json())
  //.then(json => console.log(json.results))
  //.catch(error => console.error(error))

	//for(let i=0; i<datos.results.length; i++){
		//console.log(datos.results[i]);
		//console.log('Pregunta: ' + datos.results[i].question + '\n' +
		//'Respuesta correcta: '+ datos.results[i].correct_answer+'\n' +
		//'Respuestas incorrectas: ' + datos.results[i].incorrect_answers + '\n'
		//)
	//}
async function obtenerDatos(url){
	const newDiv = document.createElement('div');
	newDiv.classList.add('contenedor-preguntas');
	document.querySelector(".contenedor").appendChild(newDiv);

	const resultado = await fetch(url);
	const datos = await resultado.json();
	for(let i=0; i<datos.results.length; i++){
		console.log(datos.results[i].question + '\n' +
								datos.results[i].correct_answer+ '\n');
		datos.results[i].incorrect_answers.forEach(incorrect_answer => console.log(incorrect_answer + '\n'));
		console.log('\n');

		const newH3 = document.createElement("h3")
		newH3.textContent = `Pregunta ${i+1}. ${datos.results[i].question}`;
		document.querySelector(".contenedor-preguntas").appendChild(newH3);
		
		const newP = document.createElement("p");
		newP.classList.add('bold');
		newP.textContent = datos.results[i].correct_answer;
		document.querySelector(".contenedor-preguntas").appendChild(newP);

		datos.results[i].incorrect_answers.forEach( incorrect_answer=> {
			const newP = document.createElement("p");
			newP.textContent = incorrect_answer; 
			document.querySelector(".contenedor-preguntas").appendChild(newP);}
		);
	}
}

function generarFormulario(){
	const url="https://opentdb.com/api.php?amount=10";
	obtenerDatos(url);
}