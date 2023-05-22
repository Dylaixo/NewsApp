const timeReducer = (time = new Date(), action) =>{
    switch(action.type){
        case "TIME":
            return time = new Date();
        default:
            return time = new Date()
};
}
export default timeReducer;