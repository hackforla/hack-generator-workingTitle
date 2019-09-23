import { useState } from "react";

const UseJSONData = ({ dataCategory }) => {
  const [data] = useState(dataCategory);
  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return Object.values(data[getRandomInt(data.length)]);
};

export default UseJSONData;
