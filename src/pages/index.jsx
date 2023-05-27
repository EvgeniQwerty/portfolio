import { useRef } from 'react';
import { FaGithub, FaChevronDown, FaTelegram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MyImg from '../images/my_img.jpg';

import SEO from '../components/seo';
import { projectsList } from '../utils/project-data';
import ProjectListing from '../components/project-listing';
import Header from '../components/header';

export default function Homepage({ project }) {
    const projectsRef = useRef(null);

    const executeScroll = () => projectsRef.current.scrollIntoView();

    return (
        <motion.div
            className='container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 2,
                delay: 0.5,
            }}
        >
            <SEO
                title='Eugene Petukhov | React Frontend Developer'
                url='https://github.com/evgeniqwerty'
                description='Eugene Petukhov, React Frontend Developer. Studied at VyatSU. Skilled with React, Redux, JavaScript, Python, SASS and many more'
            />

            <Header />
                <main className='main-home'>
                    <div className='cta'>
                        <h1 className='title'>
                            <span className='playful'>Hello!</span> My name is
                            Eugene Petukhov
                        </h1>
                        <motion.img
                            src={MyImg}
                            alt='Eugene'
                            className='my-image'
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 10,
                            }}
                        />
                    </div>
                    <p className='job-title'>
                        <span className='text-reveal'>
                            I am a React Frontend Developer
                        </span>
                    </p>
                    <div className='scroll-indicator-container'>
                        <button
                            className='scroll-indicator'
                            onClick={executeScroll}
                        >
                            <span>Some Projects</span>
                            <FaChevronDown />
                        </button>
                    </div>
                </main>
            <div className='project-container' ref={projectsRef}>
                {projectsList.map((project, i) => (
                    <ProjectListing key={i} project={project} />
                ))}
            </div>
            <footer>
                <h2>Connect with me</h2>
                <ul className='footer-links'>
                    <li>
                        <motion.a
                            href=''
                            target='_blank'
                            rel='noopener noreferrer'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            title='Download resume'
                        >
                            Resume
                        </motion.a>
                    </li>
                    <li>
                        <motion.a
                            href='https://github.com/evgeniqwerty'
                            target='_blank'
                            rel='noopener noreferrer'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            title='Go to GitHub'
                        >
                            <FaGithub />
                            <span className='footer-hidden-text'>GitHub</span>
                        </motion.a>
                    </li>
                    <li>
                        <motion.a
                            href='https://tlgg.ru/evgeniqwerty'
                            target='_blank'
                            rel='noopener noreferrer'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            title='Write me on Telegram'
                        >
                            <FaTelegram />
                            <span className='footer-hidden-text'>Telegram</span>
                        </motion.a>
                    </li>
                </ul>
            </footer>
        </motion.div>
    );
}
