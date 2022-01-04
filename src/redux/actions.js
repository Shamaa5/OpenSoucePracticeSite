export const loadRepositories = () => {
  return (dispatch) => {
    dispatch({ type: 'Repositories/load/start' });
    fetch(
      'https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&per_page=100',
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
        console.error(error);
      });
  };
};
export const logOut = () => {
  return {
    type: 'logOut',
  };
};

export const githubAuth = () => {
  return (dispatch) => {
    dispatch({ type: 'Auth/start' });
    fetch('http://localhost:5000/auth/login/success', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error('authentication has been failed!');
      })
      .then((resObject) => {
        dispatch({ type: 'Auth/success', payload: resObject.user });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const loadUserProjects = () => {
  return (dispatch) => {
    dispatch({ type: 'userRepos/loadFromServer/start' });
    fetch('https://61d34ae7b4c10c001712b8d4.mockapi.io/projects', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'userRepos/loadFromServer/success',
          payload: json,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const postUserProject = (link, userId) => {
  let str = link.replace(/\s+/g, '');
  return (dispatch) => {
    dispatch({ type: 'userRepo/fetchFromGithub/start' });
    fetch(`https://api.github.com/repos/${str}`)
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error('something went wrong');
      })
      .then((repoInfo) => {
        dispatch({
          type: 'userRepo/fetchFromGithub/success',
          payload: repoInfo,
        });
        console.log(repoInfo);
        dispatch({ type: 'userRepo/postToServer/start' });

        fetch(`https://61d34ae7b4c10c001712b8d4.mockapi.io/Projects`, {
          method: 'POST',
          body: {
            $full_name: repoInfo.full_name,
            $id: repoInfo.id,
            $description: repoInfo.description,
            forks_count: repoInfo.forks_count,
            open_issues: repoInfo.open_issues,
            html_url: repoInfo.html_url,
            created_at: repoInfo.created_at,
            pushed_at: repoInfo.pushed_at,
            watchers: repoInfo.watchers,
            Added_user_id: userId,
            avatar_url: repoInfo.avatar_url,
            homepage: repoInfo.homepage,
          },
        })
          .then((response) => response.json())
          .then((json) => {
            dispatch({
              type: 'userRepo/postToServer/success',
              payload: json,
            });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
