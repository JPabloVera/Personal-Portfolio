import React from 'react';
import Ocean from "./ocean/Ocean.component";
import Rain from "./rain/Rain.component";
export const Background = () => {
    return (
        <div style={{height: "100%", width: "100%", position: "fixed", backgroundColor: "#2f2c2c", zIndex: -1}}>
            <Rain drops_count={250} />
            <Ocean />
        </div>
    )
}
