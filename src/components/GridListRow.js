import React from 'react';
import PropTypes from 'prop-types';

const GridListRow = ({ row, editable, deletable }) => {
  let fields = [];

  const numHeaders = (!!editable || !!deletable) ? 1 + Object.keys(row).length : 0 + Object.keys(row).length;
  const sizeColumn = 12 / numHeaders;
  console.log(sizeColumn)
  for (const key in row) {
    fields.push(<div key={key} className={"col-"+sizeColumn}>{row[key]}</div>)
  }

  if (editable && deletable) {
    fields.push(<div key='ACTION' className={"col-"+sizeColumn}><a href="#">Edit</a><a href="#">Delete</a></div>)
  } else if (editable) {
    fields.push(<div key='ACTION' className={"col-"+sizeColumn}><a href="#">Edit</a></div>)
  } else if (deletable) {
    fields.push(<div key='ACTION' className={"col-"+sizeColumn}><a href="#">Delete</a></div>)
  }

  return (
    <div className="row">
      {fields}
    </div>
  );
}

GridListRow.propTypes = {
  row: PropTypes.object.isRequired
}

export default GridListRow;
