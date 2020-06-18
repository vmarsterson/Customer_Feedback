const state = {
  ease: [false, false, false, false, false],
  range: [false, false, false, false, false],
  
};

const update = {
    toggleEase: function(state,cellIndex){ 
        state.ease[cellIndex] = !state.ease[cellIndex]
        console.log(state.ease)
    },

    toggleRange: function(cellIndex){

    } ,
}
