const initialState = {
  Repositories: [],
  loading: false,
  Error: false,
  ErrorMessage: '',
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case 'userRepos/postToServer/start':
      return {
        ...state,
        loading: true,
        Error: false,
      };
    case 'userRepo/postToServer/success':
      return {
        ...state,
        loading: false,
        Repositories: [...state.Repositories, action.payload],
        Error: false,
      };
    case 'userRepos/loadFromServer/start':
      return {
        ...state,
        loading: true,
        Error: false,
      };
    case 'userRepos/loadFromServer/success':
      return {
        ...state,
        loading: false,
        Repositories: action.payload,
        Error: false,
      };
    case 'Error':
      return {
        ...state,
        Error: true,
        ErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default state;
