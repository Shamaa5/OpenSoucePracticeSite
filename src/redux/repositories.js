const initialState = {
  allRepositories: [],
  loading: false,
  languageRepositories: [],
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
    default:
      return state;
  }
};

export default state;
