//Загружаем header.html и вставляем его в div
fetch('/header/header.html')
.then(response => response.text())
.then(data =>{
   document.getElementById('header-placeholder').innerHTML = data;
})

// Теперь вызываем globalIndex.js
const script = document.createElement('script');
script.src = '/js/globalIndex.js';
document.body.appendChild(script);