// visualizer DOM boiler plate set up/test

// script for duplicate check arrays and strings problem:

// visualizer boiler plate script for DOM
const $visualizerTitle = $('<div>Algorithm Visualizer Activated</div>')
const $visualizerCanvas = $('<canvas id = "myCanvas"></canvas>')

 var visTitleStyle = {
     "text-align":"center",
 }

var visCanvasStyle = {
    "height":"95%",
    "width":"99.5%",
    "margin": "auto",
}

let visualizerClickCheck = false;

$('#visualizer-button').click(() => {

    $visualizerTitle.appendTo('.visualizer-area')
    $visualizerCanvas.appendTo('.visualizer-area')


    return function() {
        $visualizerTitle.css(visTitleStyle)
        $visualizerCanvas.css(visCanvasStyle)

        return function() {
            var c = document.getElementById('myCanvas');
            var ctx = c.getContext("2d");
            if (visualizerClickCheck === true) return;
            visualizerClickCheck = true;
            return algoCanvasFunction(c, ctx);
        }();
    }();
})

$('#reset-button').click(() => {
    $visualizerTitle.remove();
    $visualizerCanvas.remove();
    return visualizerClickCheck = true;
})

// solution button functionality

const $scriptLines = $('.scriptLines')
var scriptLines = document.querySelectorAll('.scriptLines')

let solutionClickCheck = false;

$('#show-solution-button').click(() => {
    if (solutionClickCheck === true) return;

    replaceDash(scriptLines)
    return function (){
        $scriptLines.css("color","green")
        solutionClickCheck = true;
    }()
})

$('#hide-solution-button').click(() => {
    unshiftNumber(scriptLines)
    return function (){
        $scriptLines.css("color","black")
        solutionClickCheck = false;
    }()
})

function replaceDash(scriptLines){
    for (let i = 0; i < scriptLines.length; i++){
        let scriptLineTemp = scriptLines[i].innerHTML
        let newStr = scriptLineTemp.replaceAll('-', '&nbsp')

        scriptLines[i].innerHTML = `${i}` + newStr
    }
}

function unshiftNumber(scriptLines){
    for (let i = 0; i < scriptLines.length; i++){
        let scriptLineTemp = scriptLines[i].innerHTML
        let newStr = scriptLineTemp.replace(`${i}`, '')

        scriptLines[i].innerHTML = newStr
    }
}