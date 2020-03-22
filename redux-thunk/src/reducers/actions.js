export const fetchRandomuser = dispatch => () => {
  fetch("https://randomuser.me/api/")
    .then(r => r.json())
    .then(data => {
      dispatch(innerDispatch => {
        innerDispatch({
          type: "RANDOM_USER",
          payload: data
        });
      });
    });
};
