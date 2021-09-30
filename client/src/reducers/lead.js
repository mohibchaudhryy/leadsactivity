const lead = {};
export default (state={lead},action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return {...state, lead: action.payload };
        case "CREATE":
            const rtn = [...state.lead, action.payload];
            return {...state, lead:rtn};
        case "UPDATE":
            return {...state, lead: state.lead.map((lead)=>(lead._id===action.payload._id ? action.payload : lead ))};
        default:
            return state;
}
}
 