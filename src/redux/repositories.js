const initialState = {
  allRepositories: [],
  repository: [],
  userRepository: [],
  loadingUserRepository: false,
  loading: false,
  loadingRepository: false,
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case 'allRepositories/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'allRepositories/load/success':
      return {
        ...state,
        allRepositories: action.payload.items,
        loading: false,
      };
    case 'Language/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'Language/load/success':
      return {
        ...state,
        allRepositories: action.payload.items,
        loading: false,
      };
    case 'Repository/load/start':
      return {
        ...state,
        loadingRepository: true,
      };
    case 'Repository/load/success':
      return {
        ...state,
        repository: [action.payload],
        loadingRepository: false,
      };
    default:
      return state;
  }
};

export default state;
