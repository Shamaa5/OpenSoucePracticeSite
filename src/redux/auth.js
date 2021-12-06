const initialState = {
  user: null,
  token: '',
  isAuth: false,
  loading: false,
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case 'userLoggedIn':
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
      };
    case 'logOut':
      return {
        ...state,
        user: null,
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
