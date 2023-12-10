import React from 'react';

const AutoAssignPage = ({ onAutoAssign, electricians }) => {
  console.log(electricians);
  const handleAutoAssign = () => {
    onAutoAssign();
  };

  return (
    <div>
      <h2>Auto Assign Sites</h2>
      <button onClick={handleAutoAssign}>Auto Assign</button>
    </div>
  );
};

export default AutoAssignPage;
