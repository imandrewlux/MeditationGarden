

document.addEventListener('DOMContentLoaded', function () {
            setTimeout(function () {
                         
var loadingScreen = document.querySelector(".a-loader-title");
var startdiv = document.querySelector('.clicktostart');
var blingee = document.createElement("div");
blingee.classList.add("blingee");
loadingScreen.appendChild(blingee);

console.log(startdiv);


      var textchange = loadingScreen.childNodes[0];
      loadingScreen.appendChild(startdiv);

        document.title = "Meditation Garden";
        textchange.nodeValue = "Meditation Garden";
        startdiv.classList.add('show-foo');


      }, 2000); // Delay of 5 seconds
        });