const initialState = {
  allRepositories: [],
  repository: [],
  loading: false,
  loadingRerository: false,
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
        loadingRerository: true,
      };
    case 'Repository/load/success':
      return {
        ...state,
        repository: action.payload,
        loadingRerository: false,
      };
    default:
      return state;
  }
};

export default state;
