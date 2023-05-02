import React from 'react';
// @ts-ignore
import resume from './static/resume.pdf'
import '../style/resume.css'
const Resume = () => {
    return (
        <div className="resume">
            <embed src={resume} />
        </div>
    );
};

export default Resume;