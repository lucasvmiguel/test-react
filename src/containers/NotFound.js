import React from 'react';
import { connect } from 'react-redux';

const NotFoundContainer = ({ login, change, submit}) => (
  <div>
    <h1>Not Found</h1>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundContainer);