//Skapat en funktion som jag döpt till randomCol, denna väljer färger slumpmässigt med hjälp av 
//metoderna Math.floor som avrundar tal och Math.random som slumpar fram nr, i detta fall "färg". Resultatet sker vid knapp klick.
//Konsolen skriver ut exakt vilka siffror som det 3 olika variablerna får.
function randomCol() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);

    document.body.style.background = bgColor;
}