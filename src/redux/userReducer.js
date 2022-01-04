const initialState = {
  Repositories: [],
  loading: false,
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case 'userRepo/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'userRepo/load/success':
      return {
        ...state,
        loading: true,
      };
    case '':
      return {
        ...state,
        loading: true,
      };
    case 'userRepo/postToServer/success':
      return {
        ...state,
        loading: false,
        Repositories: action.payload,
      };
    default:
      return state;
  }
};

export default state;
