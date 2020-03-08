<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>
Esto hemos de ponerlo en el head

--------------------INDICACIONES SOBRE VUE JS QUE HAY QUE SABER---------------------------------

Cuando nosotros trabajamos con vue siempre tenemos que encerrar TODO lo que nosotros queremos que sea de vue
en un container. Por ejemplo:

<div id="app">
    Aquí dentro irá todo el contenido con el que vamos a trabjar a través de vue
</div>

En el archivo javascript, lo primero que deberíamos hacer es isntanciar lo que es vue
const app = new Vue({ Estas llaves se ponen para indicar un objeto, como ya vimos en el otro repositorio

})

Una de las cosas que nos permite vue js es poner bucles o sentencias condicionales dentro de las etiquetas
por ejemplo:

<li v-for="frutas of arrayFruta">
    {{fruta}}
</li> de esta forma estamos imprimiendo todas las posiciones del arrayFruta

Ejemplo de sentencias condicionales

<p>NOmbre: <span v-if="objeto.cantidad == 0">OUT OF STOCK</span></p>