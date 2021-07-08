

const constante //variable que no puede reasignar valor.

let variable //variable que peude reasignarse valor.

/******ARROW FUNCTIONS*****/

//Normal Function
function printMyName(name){
	console.log(name);
}
printMyName('Max');

//Arrow Function: 1 argument 1.0
const printMyName = (name) => {
	console.log(name);
}

//Arrow Function: 1 argument 2.0
const printMyName = name => {
	console.log(name);
}

//Arrow Function: Sin parametros
const printMyName = () => {
	console.log(name);
}

//Arrow Function: mas de un argumento
const printMyName = (name,age) => {
	console.log(name,age);
}

//Arrow Function: si tiene solo una linea
const multiply = (number) => return number * 2;


/****EXPORTS AND IMPORTS (MODULES)*****/
