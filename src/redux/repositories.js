const initialState = {
  allRepositories: [],
  loading: false,
  languagesLoading: false,
  languagesRepositories: [],
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case 'Repo/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'Repo/load/success':
      return {
        ...state,
        allRepositories: action.payload.items,
        loading: false,
      };
    case 'Language/load/start':
      return {
        ...state,
        languagesLoading: true,
      };
    case 'Language/load/success':
      return {
        ...state,
        languagesRepositories: action.payload.items,
        languagesLoading: false,
      };
    default:
      return state;
  }
};

export default state;
