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
    case 'Sort/Stars/Top':
      const newArr = state.allRepositories.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      });
      return {
        ...state,
        sortStarsTop: true,
        sortStarsBot: false,
        sortDiffBot: false,
        allRepositories: newArr,
      };
    case 'Sort/Stars/Bot':
      const newArr2 = state.allRepositories.sort((a, b) => {
        return a.stargazers_count - b.stargazers_count;
      });
      return {
        ...state,
        sortStarsTop: false,
        sortStarsBot: true,
        sortDiffTop: false,
        sortDiffBot: false,
        allRepositories: newArr2,
      };
    case 'Sort/Difficulty/Top':
      return {
        ...state,
        sortStarsTop: false,
        sortStarsBot: false,
        sortDiffTop: true,
        sortDiffBot: false,
        allRepositories: state.allRepositories.sort((a, b) => {
          if (a.stargazers_count) {
            return a.stargazers_count - b.stargazers_count;
          }
          return state.allRepositories;
        }),
      };
    case 'Sort/Difficulty/Bot':
      return {
        ...state,
        sortStarsTop: false,
        sortStarsBot: false,
        sortDiffTop: false,
        sortDiffBot: true,
        allRepositories: state.allRepositories.sort((a, b) => {
          if (a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return state.allRepositories;
        }),
      };

    default:
      return state;
  }
};

export default state;
