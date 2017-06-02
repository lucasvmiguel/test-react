import React from 'react';
import PropTypes from 'prop-types';

import GridListRow from './GridListRow';

const GridListBody = ({ data, columns, editable, deletable }) => {
  const rows = data.map((value)=> {
    let row = {};

    for (const keyVal in value) {
      for (const keyCol in columns) {
        if (keyVal === columns[keyCol].name) {
          if (value[keyVal] instanceof Date) {
            row[keyVal] = value[keyVal].toString();
          } else {
            row[keyVal] = value[keyVal];
          }
        }
      }
    }

    if (row.id === null || row.id === undefined) {
      console.error('data objects must have field id and columns too');
    }

    return row;
  });
  

  return (
    <div>
      {rows.map((row)=> <GridListRow key={row.id} row={row} editable={editable} deletable={deletable}/>)}
    </div>
  );
}

GridListBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
}

export default GridListBody;
