import React from 'react';
import { css, styles } from 'css-zero/macro';

const tableCss = css`
  display: table;
  margin-top: 10px;
`;

const rowCss = css`
  display: table-row;
`;

const cellCss = css`
  display: table-cell;
  padding: 10px;
`;

const Table = ({ table, toPercent }) => (
  <div className={styles(tableCss)}>
    {table.map((row, i) => (
      <div key={i} className={styles(rowCss)}>
        {row.map((x, j) => (
          <div
            key={String(i) + String(j)}
            className={styles(cellCss)}
            style={{
              backgroundColor: 'rgba(74, 174, 53, ' + x + ')',
            }}
          >
            {toPercent(x)}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Table;
