import React, { useState } from 'react';
import { useEffect } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => (prev === 59 ? 0 : prev + 1));
        }, 1000);

        console.log(seconds);

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div>
            <h1>{seconds}</h1>
        </div>
    );
};

export default Timer