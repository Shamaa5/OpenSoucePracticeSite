const initialState = {
  user: [],
  isAuth: false,
  loading: false,
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case 'userLoggedIn':
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case 'logOut':
      return {
        ...state,
        user: [],
        isAuth: false,
      };
    case 'test':
      return {};

    default:
      return state;
  }
};

export default state;
