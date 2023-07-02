import React from 'react';

function Table() {
  const renderTable = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      const cells = [];
      for (let j = 0; j < 8; j++) {
        
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }
    return rows;
  };

  const boxStyle = {
    width: '50px',
    height: '50px',
    border: '1px solid black',
    textAlign: 'center',
    verticalAlign: 'middle',
  };

  return (
    <div>
  
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default Table;
