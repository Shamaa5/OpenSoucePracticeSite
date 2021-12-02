const initialState = {
  allRepositories: [],
  repository: [],
  userRepositories: [],
  loading: false,
  loadingRepository: false,
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case 'Repositories/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'Repositories/load/success':
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
