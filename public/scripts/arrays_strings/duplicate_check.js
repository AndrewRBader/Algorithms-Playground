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

// algorithm visualizer canvas script

function algoCanvasFunction(c, ctx){
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 50);
    ctx.stroke();
}
