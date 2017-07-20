let initialState = {
    data:[]
}


const TagsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_TAGS_DATA":
            return {
                data: action.data
            }
        case "DEL_TAGS_DATA":
            return {
                data:[]
            }
        default:
            return state
    }
}

export default TagsReducer