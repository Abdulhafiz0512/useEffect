import React, { useState } from 'react';
import Timer from './component/timer';


const App = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle Timer</button>
            {show && <Timer />}
        </div>
    );
};

export default App;
