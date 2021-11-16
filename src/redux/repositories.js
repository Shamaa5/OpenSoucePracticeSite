const initialState = {
    items: [],
    loading: false

};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'Repo/load/start':
            return {
                ...state,
                loading: true
            }
        case 'Repo/load/success':
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        default:
            return state
    }
}