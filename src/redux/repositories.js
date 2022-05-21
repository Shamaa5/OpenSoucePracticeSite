const initialState = {
  allRepositories: [],
  repository: [],
  loadingUserRepository: false,
  loading: false,
  loadingRepository: false,
  Error: false,
  sortStarsTop: false,
  sortStarsBot: false,
  sortDiffTop: false,
  sortDiffBot: false,
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

    case 'Error':
      return {
        ...state,
        Error: true,
      };
    default:
      return state;
  }
};

export default state;
