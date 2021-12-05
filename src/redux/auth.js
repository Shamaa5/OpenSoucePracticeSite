const initialState = {
  user: [],
  token: '',
  isAuth: false,
  loading: false,
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case 'userLoggedIn':
      return {
        ...state,
        token: action.payload,
        isAuth: true,
      };
    case 'logOut':
      return {
        ...state,
        user: [],
        token: '',
        isAuth: false,
      };
    case 'test':
      return {};

    default:
      return state;
  }
};

export default state;
