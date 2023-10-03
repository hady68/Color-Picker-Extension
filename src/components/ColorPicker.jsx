import React, { useState } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'



const ColorPicker = () => {

    const [displayColor, setdisplayColor] = useState(false)
    const [color, setcolor] = useState({
        r: '125',
        g: '223',
        b: '32',
        a: '1'
    })

    const [isCopied, setIsCopied] = useState(false); // State to track if color is copied

    const handleClick = () => {
        setdisplayColor(!displayColor)
    };

    const handleClose = () => {
        setdisplayColor(false)
    }

    const handleChange = (color) => {
        setcolor(color.rgb)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`);
        setIsCopied(true);
    
        // Reset the copied notice after a delay 
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      };

    const styles = reactCSS({
        'default': {
            color: {
                width: '20px',
                height: '10px',
                background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                cursor: 'pointer',
                padding: '10px 20px',
                marginTop: '10px',
                border: '5px solid white',
                borderRadius: '5px',
            },
            swatch: {
                display: 'inline-block',
                marginTop: '100px'
            },
            popover: {
                position: 'absolute',
                zIndex: '2',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
            bg: {
                background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                height: '600px',
                width: '400px',
                marginTop: '-15px'
            },
            rgba: {
                background: 'white',
                marginTop: '20px',
                padding: '10px',
                fontSize: '20px',
                borderRadius: '5px',
                fontWeight: 'bold'
            
                
            },
            btn: {
                cursor: 'pointer',
                padding: '15px 25px',
                marginTop: '40px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '20px'
            }
        }
    })

    return (
        <>
            <div style={styles.bg}>
                <h2 style={{ color: 'white' }}>React Color Picker</h2>
                <div style={styles.swatch} onClick={handleClick}>
                    <div style={styles.color} />
                </div>
                {displayColor ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={handleClose} />
                    <SketchPicker color={color} onChange={handleChange} />
                </div> : null}

                <div style={styles.rgba}>
                    rgba({color.r}, {color.g}, {color.b}, {color.a})
                </div>

               {/* Combined button functionality */}
        <button style={styles.btn} onClick={() => {
          handleCopy(); // Copy the color value to clipboard
        }}>
          {isCopied ? 'Copied to Clipboard' : 'Copy'}
        </button>
      </div>
        </>
    );
}

export default ColorPicker