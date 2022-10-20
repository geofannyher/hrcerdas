import React from 'react'

const Progressbar = ({ bgcolor, progress, height }) => {

    const Parentdiv = {
        height: height,
        width: 'auto',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 10
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right'
    }

    const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 700
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}>{`${progress}%`}</span>
            </div>
        </div>
    )
}

export default Progressbar;
