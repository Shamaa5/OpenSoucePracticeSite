const initialState = {
  user: {},
  isAuth: false,
  loading: false,
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
        isAuth: true,
        loading: false,
        user: action.payload,
      };
    case 'logOut':
      return {
        ...state,
        user: null,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default state;
