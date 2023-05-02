import React from 'react';
import '../style/projects.css'
import {useSelector} from "react-redux";
import handler from "./handler";
const Projects = () => {
    const projects = useSelector((state: any) => state.projects)
    let counter = 0;

    return (
        <div className="content__projects">
            <div className="projects__wrapper">
                {
                    projects.map((e: any) => {
                        counter += 1
                        let path = String(counter);
                        return (
                        <div key={counter} className="project">
                            <img src={handler[path]} alt={e.name}/>
                            <div className="project__content">
                                <div className="name">
                                    {e.name}
                                </div>
                                <div className="description">
                                    {e.description}
                                </div>
                                <div className="project__buttons">
                                    <button>Try it</button>
                                    <button>Forum</button>
                                </div>
                            </div>
                        </div>
                    )})
                }
            </div>
        </div>
    );
};

export default Projects;