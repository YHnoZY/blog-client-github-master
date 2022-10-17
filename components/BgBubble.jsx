import { useEffect, useState } from 'react'

// const bubblebg = () => {
//     var str = [];
//     for (let i = 0; i < 35; i++) {
//         let im = Math.floor(Math.random() * 40) + 5
//         str.push(<span style={{ '--i': im }} key={i}></span>)
//     }
//     return (
//         <div className="bubbles">
//             {str}
//         </div>
//     )
// }
// export default bubblebg

const Bubblebg = () => {
    const [bub, setBubs] = useState([])
    useEffect(() => {
        var str = [];
        for (let i = 0; i < 35; i++) {
            let im = Math.floor(Math.random() * 40) + 5
            str.push(<span style={{ '--i': im }} key={i}></span>)
        }
        setBubs(str)
    }, [])
    return (
        <div className="bubbles">
            {bub}
        </div>
    )
}
export default Bubblebg