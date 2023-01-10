var africaRSS = document.createElement("script");
africaRSS.src = "./africa/rss.js";
africaRSS.defer = true;


var americasRSS = document.createElement("script");
americasRSS.src = "./americas/rss.js";
americasRSS.defer = true;


var asiaPacificRSS = document.createElement("script");
asiaPacificRSS.src = "./asia_pacific/rss.js";
asiaPacificRSS.defer = true;


var europeRSS = document.createElement("script");
europeRSS.src = "./europe/rss.js";
europeRSS.defer = true;

var middleEastRSS = document.createElement("script");
middleEastRSS.src = "./middle_east/rss.js";
middleEastRSS.defer = true;


var x = document.querySelectorAll("button");

// Function to test if all regions have been loaded
function test() { 
  if (x[0].style.visibility == "hidden" && x[1].style.visibility == "hidden" && x[2].style.visibility == "hidden" && x[3].style.visibility == "hidden" && x[4].style.visibility == "hidden") {
    document.querySelector("output").innerHTML = `All regions loaded <button> <a href="index.html">⬅︎</a> </button>`;
    document.querySelector("em").innerHTML = "All regions loaded";
    document.querySelector("em").style = "background-color: white; margin-right: 5px; font-size: 0.5em;";
  }
}



function loadAfrica() {
    
  document.querySelector("output").innerHTML = "Loading Africa News...";
  document.querySelector("em").innerHTML = "Loading Africa News...";
  document.querySelector("em").style = "background-color: white; margin-right: 5px; font-size: 0.5em;";
  document.querySelector("p").appendChild(africaRSS);
  document.getElementById("africa").style.visibility = "hidden";
  test()
}

function loadAmericas() {

  document.querySelector("output").innerHTML = "Loading Americas News...";
  document.querySelector("em").innerHTML = "Loading Americas News...";
  document.querySelector("p").appendChild(americasRSS);
  document.getElementById("americas").style.visibility = "hidden";
  test()
}

function loadAsiaPacific() {

  document.querySelector("output").innerHTML = "Loading Asia Pacific News...";
  document.querySelector("em").innerHTML = "Loading Asia Pacific News...";
  document.querySelector("p").appendChild(asiaPacificRSS);
  document.getElementById("asiaPacific").style.visibility = "hidden";
  test()
}

function loadEurope() {

  document.querySelector("output").innerHTML = "Loading Europe News...";
  document.querySelector("em").innerHTML = "Loading Europe News...";
  document.querySelector("p").appendChild(europeRSS);
  document.getElementById("europe").style.visibility = "hidden";
  test()
}

function loadMiddleEast() {

  document.querySelector("output").innerHTML = "Loading Middle East News...";
  document.querySelector("em").innerHTML = "Loading Middle East News...";
  document.querySelector("p").appendChild(middleEastRSS);
  document.getElementById("middleEast").style.visibility = "hidden";
  test()
}