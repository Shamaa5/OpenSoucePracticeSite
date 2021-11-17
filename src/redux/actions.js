export const loadRepo = () => {
  return (dispatch) => {
    dispatch({ type: 'Repo/load/start' });
    fetch(
      'https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=1',
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
