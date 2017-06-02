import React from 'react';
import PropTypes from 'prop-types';

const GridListHeader = ({ columns, editable, deletable }) => {
  let hasAction = false;

  if ((typeof editable === "object" && editable.active) || (typeof deletable === "object" && deletable.active)) {
    hasAction = true
  }

  const numHeaders = hasAction ? 1 + columns.length : 0 + columns.length;
  let errorNumCols = null;
  let sizeColumn = 0;

  if (numHeaders !== 1 && numHeaders !== 2 && numHeaders !== 3 && numHeaders !== 4 && numHeaders !== 6) {
    errorNumCols = 'number of columns must have length 1, 2, 3, 4 or 6 (with column action)';
    sizeColumn = 1
    console.warn(errorNumCols);
  } else {
    sizeColumn = 12 / numHeaders;
  }

  const headers = columns.map((column) => <div key={column.name} className={"col-" + sizeColumn}>{column.title}</div>);

  if (hasAction) {
    headers.push(<div className={"col-" + sizeColumn} key='ACTIONS'>ACTIONS</div>)
  }

  return (
    <div>
      {headers}
    </div>
  );
}

GridListHeader.propTypes = {
  columns: PropTypes.array.isRequired,
  editable: PropTypes.object,
  deletable: PropTypes.object
}

export default GridListHeader;
