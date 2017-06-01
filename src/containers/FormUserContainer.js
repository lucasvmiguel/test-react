import React from 'react';
import { connect } from 'react-redux';
import request from 'request';

import FormUser from '../components/FormUser.js';


class FormUserContainer extends React.Component {
  render() {
    return (
      <div>
        <FormUser user={{}}/>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FormUserContainer);