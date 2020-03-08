
function myFunction() {
	setTimeout(function(){ app1.cambiarColorFrase() }, 5000);
}

myFunction();

const app1 = new Vue
({
    el: '#app1',
    data: 
    {
        nombre: 'Valor inicial',
        fecha: 'dd/mm/yy',
        edad: 0,
        htmlMarcado: true,
        counter: 0,
        colorDerecha: "#D3D3D3",
        fraseCambia : "El color de esta línea cambiar a rojo después de 5 segundos, y debe cambiar este texto a: \"Ha cambiado!\""
        //document.
    },
    methods:
    {
        calculaEdad()
        {
            var fecha = this.fecha;
            var datos = new Date(fecha).getFullYear();
            console.log(datos);

            this.edad = 2020 - datos;
        },
        showAlert()
        {
            alert("Formulario enviado");
        },
        cambiarColor(sexo)
        {
            var izquierda = document.getElementById("izquierdaC");
            
            if(sexo == false)
            {
                console.log("FALSE");
                izquierda.style.background = "#1D90FF";
            }
            else
            {
                console.log("TRUE");
                izquierda.style.background = "#782220";
            }

            console.log(this.izquierda);
        },
        cambiarColorDerecha()
        {
            var derecha = document.getElementById("derechaC");

            derecha.style.background = this.colorDerecha;
        },
        cambiarColorFrase()
        {
            var liCambia = document.getElementById("cambia");

            liCambia.style.color = "red";

            this.fraseCambia = "¡Ha cambiado!";

        }
    }

})