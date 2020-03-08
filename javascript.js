const app = new Vue //Esta instancia vue recibe entre los paréntesis un objeto. Ponemos estas llaves {} para indicar el objeto, como ya vimos en el repositorio de aprendiendo basico
({ 
    //Hemos creado en el html un container con el id app, así que lo primero que haremos será detectarlo
    el: '#app', //Como ya sabemos, al ser esto un objeto, tendrá "atributos" que tienen que separarse por comas (aunque los atributos que tiene un objeto tienen el nombre qeu nosotros decidamos, "el" y "data" son propios de vue, por lo que deberemos respetarlos)
    
    data: //Data, como vemos, es otro objeto. Ya vimos que puede haber objetos dentro de objetos
    { 
        titulo: 'Hola mundo con vue',
        arrayFrutas: ['Manzana', 'Pera', 'Plátano'], //Veremos como imprimir este array en el html

        //También podemos trabajar con arrays de objetos
        arrayObjetos: 
        [
            {nombre: "Hollow Knight", cantidad: 10},
            {nombre: "The last of us", cantidad: 4},
            {nombre: "Ratchet and clank 2", cantidad: 0}
        ],

        nuevaFruta: '' //Objeto que utilizaremos para conectar nuestro input en el html con este archivo js
    },

    methods: //También es una palabra reservada de vue y nos servirá para escribir las funciones de las que haremos uso en nuestra apliación (también es un objeto, obviamente)
    {
        /*agregarFruta: function()
        {

        } Antes esta era la forma de declarar una función en este objeto methods. Ahora podemos hacerlo así:
        */

        agregarFruta()
        {
            console.log("Hiciste click"); //Vamos a conocer ahora los eventos
            //Cuando se ejecute esta función agregaremos el valor del input que hemos creado en el html, el cuál estará en el objeto nuevaFruta, como una nueva fruta en nuestro array de frutas
            this.arrayFrutas.push(this.nuevaFruta) //Utilizamos this porque arrayFrutas no está dentro del mismo objeto methods. De nuevo hacemos this a nuevaFruta pues esta no se encuentra dentro de methods
        }
    }
})

