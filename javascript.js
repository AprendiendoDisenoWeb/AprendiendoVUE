const app = new Vue({ //Esta instancia vue recibe entre los paréntesis un objeto. Ponemos estas llaves {} para indicar el objeto, como ya vimos en el repositorio de aprendiendo basico
    //Hemos creado en el html un container con el id app, así que lo primero que haremos será detectarlo
    el: '#app', //Como ya sabemos, al ser esto un objeto, tendrá "atributos" que tienen que separarse por comas (aunque los atributos que tiene un objeto tienen el nombre qeu nosotros decidamos, "el" y "data" son propios de vue, por lo que deberemos respetarlos)
    data: //Data, como vemos, es otro objeto. Ya vimos que puede haber objetos dentro de objetos
    { 
        titulo: 'Hola mundo con vue'
    }
})

