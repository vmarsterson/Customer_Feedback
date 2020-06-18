const state = {
  ease: [false, false, false, false, false],
  range: [false, false, false, false, false],
  
};

const update = {
    toggleEase: function(cellIndex){ 
        ease[cellIndex] === !ease[cellIndex]
        console.log(ease[cellIndex])
    },

    toggleRange: function(cellIndex){

    } ,
}

window.app.start("app", state, update)