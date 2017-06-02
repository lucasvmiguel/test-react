import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GridListRow = ({ row, editable, deletable }) => {
  let fields = [];
  let hasAction = false;

  if ((typeof editable === "object" && editable.active) || (typeof deletable === "object" && deletable.active)) {
    hasAction = true
  }

  const numHeaders = hasAction ? 1 + Object.keys(row).length : 0 + Object.keys(row).length;

  let errorNumCols = null;
  let sizeColumn = 0;

  if (numHeaders !== 1 && numHeaders !== 2 && numHeaders !== 3 && numHeaders !== 4 && numHeaders !== 6) {
    errorNumCols = 'number of columns must have length 1, 2, 3, 4 or 6 (with column action)';
    sizeColumn = 1
    console.warn(errorNumCols);
  } else {
    sizeColumn = 12 / numHeaders;
  }

  for (const key in row) {
    fields.push(<div key={key} className={"col-"+sizeColumn}>{row[key]}</div>)
  }

  if (editable && deletable) {
    fields.push(<div key='ACTION' className={"col-"+sizeColumn}><Link to={editable.path + '/'+ row.id}>Edit</Link><Link to={deletable.path + '/'+ row.id}>Delete</Link></div>)
  } else if (editable) {
    fields.push(<div key='ACTION' className={"col-"+sizeColumn}><Link to={editable.path + '/'+ row.id}>Edit</Link></div>)
  } else if (deletable) {
    fields.push(<div key='ACTION' className={"col-"+sizeColumn}><Link to={deletable.path + '/'+ row.id}>Delete</Link></div>)
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
