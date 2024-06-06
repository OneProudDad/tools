import React from 'react'
import './about.css'
export const AboutPage: React.FC = () => {
    return (
        <div className='page'>
            <div className='title'>{`About Page`}</div>
            <div className="single-line">
                <label className="text-label">{`Name: `}</label>
                <input className="input-default" type="text" readOnly={true} id="app-name" value={APP_NAME} />
            </div>
            <div className="single-line">
                <label className="text-label">{`Version: `}</label>
                <input className="input-default" type="text" readOnly={true} id="app-version" value={APP_VERSION} />
            </div>
        </div>
    )
}