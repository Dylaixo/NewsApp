const popReducer = (pop = false, action) =>{
    switch(action.type){
        case "CHANGEPOP":
            return !pop
        default:
            return pop
    }
};
export default popReducer;