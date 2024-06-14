import React, { useState } from 'react';

const RandomNumberGenerator = () => {

  
  const stats = {

    Strength: generateRandomStat(),

    Intelligence: generateRandomStat(),

    Will: generateRandomStat(),

    Dexterity: generateRandomStat(),

    Constitution: generateRandomStat(),

    Charisma: generateRandomStat(),

  };

  return stats;

};

const generateRandomStat = () => {
  
  let sum = 0;

  for (let j = 0; j < 3; j++) {

    sum += Math.floor(Math.random() * 6) + 1;

  }

  return sum;
};
  

  
  //   const newStats = {};

  //   for (let i = 0; i < 6; i++) {

  //     let sum = 0;

  //     for (let j = 0; j < 3; j++) {

  //       sum += Math.floor(Math.random() * 6) + 1;

  //     }

  //     newStats[`Stat ${i + 1}`] = sum;
      
  //   }

  //   return newStats
    
  // };

 

export default RandomNumberGenerator
