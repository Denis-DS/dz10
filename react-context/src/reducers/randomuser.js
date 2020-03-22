const initialState = {
  name: "USER",
  lastName: "USER",
  age: "USER"
};

export const randomuserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RANDOM_USER":
      return {
        ...state,
        name: action.payload.results[0].name.first,
        lastName: action.payload.results[0].name.last,
        age: action.payload.results[0].dob.age
      };
    default:
      return state;
  }
};
