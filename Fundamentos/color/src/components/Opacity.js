import {useEffect, useState} from "react"

const Opacity = () => {
    const [style, setStyle] = useState()

    useEffect(() => {
        document.querySelector('body').style.opacity = style
    }, [style])
    return(
        <div>
            <div>
                <h2>Opacidade</h2>
            </div>
            <div>
                <input type="range" min="0" max="1" step="0.1" onChange={(e) => setStyle(e.target.value)} />
            </div>
        </div>
    )
}
 
export default Opacity