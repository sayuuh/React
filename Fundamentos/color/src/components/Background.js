import { useEffect, useState } from "react"

const Background =() => {
    const [color, setColor] = useState()

    useEffect(() => {
        document.body.style.backgroundColor = color
        document.title = color 
    }, [color])

    return(
        <div>
            <div>
                <h2>BackgroundColor</h2>
            </div>
            <div>
                <input type="color" onChange={(e) => setColor(e.target.value)} />
            </div>
        </div>

    )
}

export default Background