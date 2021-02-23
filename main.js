// var variabel_global = "Bucaramanga";
// function saludar(){
//     console.log(variabel_global);
//     saludar2();
//     function saludar2(){
//         var variabel_global = "Mundo";
//         console.log(variabel_global);
//     }
// }
// saludar();



//Funcion declarada
// function saludar(){
//     return `Hola Mundo Feliz`;
// }
// console.log(saludar());


// Funciones expresiva
// let fn1 = function edad(){
//     return 23;
// }
// console.log(fn1());


// Funcion anonima
// const estudiante = function(){
//     return true;
// }
// console.log(estudiante());

//Callbacks
// const fnA = function(arg1){
//     return `Hola desde la funcion A ${arg1}`;
// }
// const fnError = function(){
//     return "Error al momento de entrar al callbacks";
// }
// const fnB = function(callbacks, arg1){
//     parar:
//     do{
//         const cont = ~~(Math.trunc(Math.random() * 5));
//         if(cont == 1){
//             console.log(callbacks(arg1)+"\nHola desde la funcion B");
//             break parar;
//         }else{
//             console.log(fnError());
//             continue parar; 
//         }
//     }while(true)
// }
// fnB(fnA,"Willmer");

// const fnP = function(callbacks, callbacksError){
//     callbacks();
//     callbacksError();
//     return `Funcion Principal`;
// }
// console.log(fnP(
//         function(){
//             console.log(`Hola callbacks`);
//         },
//         function(){
//             console.log(`Hola callbacksError`);  
//         }
//     )
// );

const lista = (function(){
    let data = [];
    return function(callbacks){
        let Eliminar = function(nombre){
            let id = data.findIndex(data => data==nombre);
            data.splice(id,1);
            console.log(data);
        }
        let Buscar = function(nombre){
            let busqueda = data.filter(function(letras){
                return letras.toLowerCase().indexOf(nombre.toLowerCase()) > -1;
            });
            console.log(busqueda);
        }
        let Guardar = function(nombre){
            data.push(nombre);
            console.log(data);
        }
        eval(callbacks);
    }
    
})()

lista(`Guardar("Andres");`);
lista(`Guardar("Julian");`);
lista(`Guardar("Barrera");`);
lista(`Guardar("Diaz");`);
lista(`Guardar("Marcela");`);

lista(`Eliminar("Barrera");`);
lista(`Eliminar("Diaz");`);

lista(`Buscar("j");`);

