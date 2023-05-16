import React from 'react'
import Loading from './../../../assets/images/Loading.gif'


// export type PreloaderType = {

// }

let Preloader = () => {
    return (
        <div style={{ backgroundColor: 'white'}}>
            <img src={Loading}/>
        </div>
        
    )
}

export default Preloader