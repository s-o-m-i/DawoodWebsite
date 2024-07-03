import React, { useState, useEffect, useRef } from 'react';
import { CircularProgress, CircularProgressLabel, Box } from '@chakra-ui/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const AnimatedCircularProgress = ({ targetValue, label, color,sign }) => {
    const [value, setValue] = useState(0);
    const circularRef = useRef(null);
  

    // gsap.to("")

    useEffect(() => {
      ScrollTrigger.create({
        trigger: circularRef.current,
        start: 'top 80%', // Adjust as needed
        onEnter: () => {
          gsap.to({}, {
            duration: 1, // Animation duration in seconds
            onUpdate: function () {
              setValue((prev) => {
                const increment = (targetValue / 100);
                if (prev + increment >= targetValue) {
                  return targetValue;
                }
                return prev + increment;
              });
            },
          });
        },
      });
    }, [targetValue]);
  

  return (
    <Box  ref={circularRef}>
      <CircularProgress value={(value / targetValue) * 100} size="200px" color={color} thickness="6px">
        <CircularProgressLabel>{Math.round(value)}{sign}</CircularProgressLabel>
      </CircularProgress>
    </Box>
  );
};

export default AnimatedCircularProgress;
