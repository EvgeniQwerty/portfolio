import { projectsList } from '../utils/project-data';
import Project from './Project';

const Projects = ({ ref }) => {
    return (
        <div className='project-container' ref={ref} id='pc'>
            {projectsList.map((project, i) => (
                <Project key={i} project={project} />
            ))}
        </div>
    );
};

export default Projects;
