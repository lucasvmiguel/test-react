import React from 'react';
import { connect } from 'react-redux';
import request from 'request';

import GridList from '../components/GridList.js';

class ListUserContainer extends React.Component {
  render() {
    const data = [{id:1, name: 'Lucas', date: new Date(), another: 'bar'}, {id:2, name: 'Valdir', date: new Date(), another: 'bar'}];
    const columns = [{name:'id', title: 'ID'}, {name:'name', title: 'NAME'}, {name:'date', title:'DATE'}];

    return (
      <div>
        <GridList data={data} columns={columns} title="teste" editable={{active:true, path:'/users'}} deletable={{active:true, path:'/users'}}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListUserContainer);