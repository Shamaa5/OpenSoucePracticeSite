const initialState = {
  user: null,
  isAuth: false,
  loading: false,
  token: null,
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case 'Auth/start':
      return {
        ...state,
        loading: true,
      };
    case 'Auth/success':
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case 'logOut':
      return {
        ...state,
        user: null,
        token: '',
        isAuth: false,
        code: null,
      };

    default:
      return state;
  }
};

export default state;
