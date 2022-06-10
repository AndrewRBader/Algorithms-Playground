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

$('#visualizer-button').click(() => {
    $visualizerTitle.appendTo('.visualizer-area')
    $visualizerCanvas.appendTo('.visualizer-area')

    return function() {
        $visualizerTitle.css(visTitleStyle)
        $visualizerCanvas.css(visCanvasStyle)

        return function() {
            var c = document.getElementById('myCanvas');
            var ctx = c.getContext("2d");
            return algoCanvasFunction(c, ctx);

        }();
    }();
})

$('#reset-button').click(() => {
    $visualizerTitle.remove();
    $visualizerCanvas.remove();
})

// solution button functionality

const $scriptLines = $('.scriptLines')
var scriptLines = document.querySelectorAll('.scriptLines')



$('#show-solution-button').click(() => {
    replaceDash(scriptLines)
    return function (){
        $scriptLines.css("color","green")
    }()
})

$('#hide-solution-button').click(() => {
    return function (){
        $scriptLines.css("color","black")
    }()
})

function replaceDash(scriptLines){
    for (let i = 0; i < scriptLines.length; i++){
        let scriptLineTemp = scriptLines[i].innerHTML
        let newStrArr = scriptLineTemp.replaceAll('-', '&nbsp')
        let newStr = `${i})` + newStrArr

        scriptLines[i].innerHTML = newStr
        console.log(scriptLines[i])
    }
}