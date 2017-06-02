import React from 'react';
import PropTypes from 'prop-types';

const GridListHeader = ({ columns, editable, deletable }) => {
  const numHeaders = (!!editable || !!deletable) ? 1 + columns.length : 0 + columns.length;
  const sizeColumn = 12 / numHeaders;

  const headers = columns.map((column) => <div key={column.name} className={"col-" + sizeColumn}>{column.title}</div>);

  if (!!editable || !!deletable) {
    headers.push(<div className={"col-" + sizeColumn} key='ACTIONS'>ACTIONS</div>)
  }
  
  return (
    <div>
      {headers}
    </div>
  );
}

GridListHeader.propTypes = {
  columns: PropTypes.array.isRequired
}

export default GridListHeader;
