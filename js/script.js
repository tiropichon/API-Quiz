const url="https://opentdb.com/api.php?amount=10";

//fetch(url)
  //.then(res => res.json())
  //.then(json => console.log(json.results))
  //.catch(error => console.error(error))

async function obtenerDatos(){
	const resultado = await fetch(url);
	const datos = await resultado.json();
	for(let i=0; i<datos.results.length; i++){
		console.log(datos.results[i]);
		console.log('Categoría: ' + datos.results[i].category+'\n' +
		'Respuesta correcta: '+ datos.results[i].correct_answer+'\n' +
		'Dificultad: '+ datos.results[i].difficulty+'\n' +
		'Respuestas incorrectas: ' + datos.results[i].incorrect_answers + '\n' +
		'Pregunta: ' + datos.results[i].question + '\n' +
		'Tipo de pregunta: ' + datos.results[i].type + '\n')
	}
}

obtenerDatos();