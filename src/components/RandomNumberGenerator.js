import React, { useState } from 'react';

const RandomNumberGenerator = () => {
  const [stats, setStats] = useState([0, 0, 0, 0, 0, 0]);

  const generateRandomStats = () => {
    const newStats = [];
    for (let i = 0; i < 6; i++) {
      let sum = 0;
      for (let j = 0; j < 3; j++) {
        sum += Math.floor(Math.random() * 6) + 1;
      }
      newStats.push(sum);
    }
    setStats(newStats);
  };

  return (
    <div>
      <button onClick={generateRandomStats}>Generate Stats</button>
      <div>
        <h2>Stats</h2>
        <ul>
          <li>Stat 1: {stats[0]}</li>
          <li>Stat 2: {stats[1]}</li>
          <li>Stat 3: {stats[2]}</li>
          <li>Stat 4: {stats[3]}</li>
          <li>Stat 5: {stats[4]}</li>
          <li>Stat 6: {stats[5]}</li>
        </ul>
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
