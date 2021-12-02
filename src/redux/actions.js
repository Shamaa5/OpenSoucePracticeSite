export const loadRepositories = () => {
  return (dispatch) => {
    dispatch({ type: 'Repositories/load/start' });
    fetch(
      'https://api.github.com/search/repositories?q=stars%3A>0&sort=stars&order=desc&per_page=100',
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'Repositories/load/success',
          payload: json,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
export const loadLanguages = (id) => {
  return (dispatch) => {
    dispatch({ type: 'Language/load/start' });
    fetch(
      `https://api.github.com/search/repositories?q=language:${id.toLowerCase()}&order=desc`,
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'Language/load/success',
          payload: json,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const loadRepository = (id) => {
  return (dispatch) => {
    dispatch({ type: 'Repository/load/start' });
    fetch(`https://api.github.com/repositories/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'Repository/load/success',
          payload: json,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'Repository/load/failed',
          payload: error,
        });
      });
  };
};

export const logOut = () => {
  return {
    type: 'logOut',
  };
};

export const userLogIn = (response) => {
  return {
    type: 'userLoggedIn',
    payload: response,
  };
};
