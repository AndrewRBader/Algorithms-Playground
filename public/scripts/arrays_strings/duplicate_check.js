const $visualizerDiv = $('<div>Algorithm Visualizer Activated</div>')



$('#visualizer-button').click(() => {
    $visualizerDiv.appendTo('.visualizer-span')

    var visDivStyle = {
        "background-color":"blue",
        "border-style":"solid"
    }

    return function () {
        $visualizerDiv.css(visDivStyle)
    }()
})


$('#reset-button').click(() => {
    $visualizerDiv.remove();
})