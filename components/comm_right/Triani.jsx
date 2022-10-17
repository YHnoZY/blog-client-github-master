import { useState } from 'react'

const Triani = () => {
    const darknignt = '#0c192c'
    const daylight = 'white'
    const [daytime, setDaytime] = useState('white')
    return (
        <div className="triani_box" style={{ background: daytime }}>
            <button onClick={() => setDaytime(daytime === daylight ? darknignt : daylight)}>
                切换
            </button>
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Triani