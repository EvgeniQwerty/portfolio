import { motion } from 'framer-motion';

const ProjectListing = ({ project }) => {
    const { image, name, description, link, code, tools } = project;

    return (
        <div className='project'>
            <div className='project-container'>
                <img src={image} alt={name} className='project-image' />
                <div className='project-info'>
                    <h2>{name}</h2>
                    {description.split('\n').map((str, index) => (
                        <p key={index}>{str}</p>
                    ))}
                    <h3>Tools used:</h3>
                    <ul className='tools-list'>
                        {tools.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <motion.div className='project-btns'>
                        {link && (
                            <motion.a
                                href={link}
                                target='_blank'
                                rel='noopener noreferrer'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                title={`Open site of ${name}`}
                                className='project-btn'
                            >
                                Open Site
                            </motion.a>
                        )}
                        {code && (
                            <motion.a
                                href={code}
                                target='_blank'
                                rel='noopener noreferrer'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                title={`View Code for ${name}`}
                                className='project-btn'
                            >
                                View Code
                            </motion.a>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectListing;
