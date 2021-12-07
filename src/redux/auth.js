const initialState = {
  user: null,
  isAuth: false,
  loading: true,
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case 'userLoggedIn':
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        isAuth: true,
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
