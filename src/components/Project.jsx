import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Project = ({ project }) => {
    const { image, name, description, link, code, tools } = project;

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end'],
    });

    const springY = useSpring(scrollYProgress);

    const imageValue = useTransform(springY, [0, 0.9], ['100%', '0%']);
    const textValue = useTransform(springY, [0, 0.9], ['0', '1']);
    const bottomShadowValue = useTransform(
        scrollYProgress,
        [0, 1],
        ['100%', '0%']
    );

    return (
        <div className='project' ref={containerRef}>
            <div className='project-cont'>
                <div className='project-img'>
                    <motion.img
                        src={image}
                        alt={name}
                        className='project-image'
                        style={{ translateX: imageValue }}
                    />
                </div>

                <motion.div
                    className='project-info'
                    style={{ opacity: textValue }}
                >
                    <h2>{name}</h2>
                    {description.split('\n').map((str, index) => (
                        <p key={index}>{str}</p>
                    ))}
                    <h3>Использованные технологии:</h3>
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
                                Открыть сайт
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
                                Открыть код
                            </motion.a>
                        )}
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className='bottom-shadow'
                style={{ translateX: bottomShadowValue }}
            />
        </div>
    );
};

export default Project;
