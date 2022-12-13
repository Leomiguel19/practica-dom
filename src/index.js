/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

// web api
// Conectarnos al server
window
    .fetch(`${baseUrl}/api/avo`)
    // procesar la respuesta, y convertirla en JSON
    .then((respuesta) => respuesta.json())
    // JSON -> Data -> Renderizar info browser
    .then((responseJson) => {

        const todosLosItems = [];
        responseJson.data.forEach(item => {
            // Crear la imagen
            const imagen = document.createElement('img');
            imagen.src = `${baseUrl}${item.image}`;

            // Crear titulo
            const titulo = document.createElement('h2');
            titulo.textContent = item.name;
           
            // Crear precio
            const precio = document.createElement('div');
            precio.textContent = item.price;
          
            // crear el contenedor donde vamos a poner nuestros elementos
            const container = document.createElement('div');
            container.append(imagen,titulo,precio);

            todosLosItems.push(container);                            
        });
     
        appNode.append(...todosLosItems)
    });