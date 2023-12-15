

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
	const resultado = await fetch(url);
	const datos = await resultado.json();
	for(let i=0; i<datos.results.length; i++){
		console.log(datos.results[i].question + '\n' +
								datos.results[i].correct_answer+ '\n');
		datos.results[i].incorrect_answers.forEach(incorrect_answer => console.log(incorrect_answer + '\n'));
		console.log('\n');
	}
}

function generarFormulario(){
	const url="https://opentdb.com/api.php?amount=10";
	obtenerDatos(url);
}