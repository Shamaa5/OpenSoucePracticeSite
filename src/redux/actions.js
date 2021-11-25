export const loadRepo = () => {
  return (dispatch) => {
    dispatch({ type: 'Repo/load/start' });
    fetch(
      'https://api.github.com/search/repositories?q=stars%3A%3E0&sort=language:go&order=desc&per_page=100',
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'Repo/load/success',
          payload: json,
        });
      });
  };
};
export const loadLanguages = (id) => {
  return (dispatch) => {
    dispatch({ type: 'Language/load/start' });
    fetch(
      `https://api.github.com/search/repositories?q=stars%3A%3E0&sort=language:${id}&order=desc&per_page=30`,
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'Language/load/success',
          payload: json,
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
