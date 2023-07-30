import { useRef } from 'react';
import { motion } from 'framer-motion';

import SEO from '../components/seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Main from '../components/Main';
import Certs from '../components/Certs';

export default function Homepage() {
    const projectsRef = useRef(null);

    const executeScroll = () => {
        projectsRef.current.scrollIntoView();
    };

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
                title='Евгений Петухов | React Frontend Developer'
                url='https://github.com/evgeniqwerty'
                description='Евгений Петухов, React Frontend Developer. Учился в ВятГУ. Стек: JavaScript (React, Redux, framer-motion, SASS), Python и др.'
            />

            <Header />
            <Main ref={projectsRef} executeScroll={executeScroll} />
            <Projects ref={projectsRef} />
            <Certs />
            <Footer />
        </motion.div>
    );
}
