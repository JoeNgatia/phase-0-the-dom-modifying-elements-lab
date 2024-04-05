
var mainElement = document.getElementById('main');
mainElement.remove();


var newHeader = document.createElement('h1');

newHeader.id = 'victory';


newHeader.textContent = 'YOUR-NAME is the champion'; 
document.body.appendChild(newHeader);
