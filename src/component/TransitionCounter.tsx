// TransitionCounter.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TransitionCounter: React.FC = () => {
  const [transitionCount, setTransitionCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setTransitionCount(prevCount => prevCount + 1);
  }, [location]);

  return <h1 className=" text-center text-3xl font-bold mt-12">Transition Count: {transitionCount}</h1>
};

export default TransitionCounter;
