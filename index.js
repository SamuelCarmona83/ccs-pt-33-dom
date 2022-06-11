


window.onload = () => {

    let text = 'Aprendiendo sobre el DOM :lipstick:';

    // Capturamos el body
    let bodyDOM = document.querySelector('body');

    // Capturar un elemento h3
    let h3DOM = document.createElement('h3');

    // Hacemos que el elemento h3 tenga texto

    h3DOM.innerHTML = `<p>${text}</p>`;

    // Hacemos el body purple
    bodyDOM.style.backgroundColor = 'purple';
    
    let h1DOM = document.createElement('h1');

    h1DOM.innerText = 'Hola Geeks!';

    bodyDOM.appendChild(h1DOM)
    bodyDOM.appendChild(h3DOM)

    //console.log(bodyDOM);
}