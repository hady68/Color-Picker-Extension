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

    const handleClick = () => {
        setdisplayColor(!displayColor)
    };

    const handleClose = () => {
        setdisplayColor(false)
    }

    const handleChange = (color) => {
        setcolor(color.rgb)
    }

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
                fontSize: '18px'
            },
            btn: {
                cursor: 'pointer',
                padding: '10px 20px',
                marginTop: '20px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '18px'
            }
        }
    })

    return (
        <>
            <div style={styles.bg}>
                <h2 style={{ color: 'white' }}>React-Chrome-Extension</h2>
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

                <button style={styles.btn} onClick={() => { navigator.clipboard.writeText(`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`) }}>copy</button>

            </div>
        </>
    )
}

export default ColorPicker