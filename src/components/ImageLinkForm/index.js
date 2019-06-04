import React from 'react'
import './index.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className=''>
            <p className="f3">
                {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input type="text" className="f4 pa-2 w-70 center" onChange={onInputChange} />
                    <button 
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                        onClick={onButtonSubmit}
                    >Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm