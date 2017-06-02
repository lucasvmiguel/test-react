import React from 'react';
import PropTypes from 'prop-types';

import GridListHeader from './GridListHeader';
import GridListBody from './GridListBody';

const GridList = ({ title, data, columns, editable, deletable }) => (
  <div className="row">
    <div className="row">
      <div className="col-3">
        <h1>{title}</h1>
      </div>
      <div className="col-9"/>
    </div>
    <div className="row">
      <GridListHeader columns={columns} editable={editable} deletable={deletable}/>
    </div>
    <div className="row">
      <GridListBody data={data} columns={columns} editable={editable} deletable={deletable}/>
    </div>
  </div>
)

GridList.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
}

export default GridList;
