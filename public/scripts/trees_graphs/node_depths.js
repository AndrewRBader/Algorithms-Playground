var $visualizerDiv = $('<div>Algorithm Visualizer Activated</div>')

$('#visualizer-button').click(() => {
    $visualizerDiv.appendTo('.visualizer-span')
})

$('#reset-button').click(() => {
    $visualizerDiv.remove();
})