import React from "react";
import { connect } from "react-redux";
import { fetchRandomuser } from "../../reducers/actions";

const mapStateToProps = state => ({
  name: state.randomuser.name,
  lastName: state.randomuser.lastName,
  age: state.randomuser.age
});

const mapDispatchToProps = dispatch => ({
  fetchRandomuser: fetchRandomuser(dispatch)
});

const Container = ({ name, age, lastName, fetchRandomuser }) => {
  return (
    <div>
      <p onClick={fetchRandomuser}>First Name: {name}</p>
      <p onClick={fetchRandomuser}>Last Name: {lastName}</p>
      <p onClick={fetchRandomuser}>Age: {age}</p>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Container));
