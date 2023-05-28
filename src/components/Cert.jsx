import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Cert = ({ certData }) => {
    const { name, image, link } = certData;

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end'],
    });

    const springY = useSpring(scrollYProgress);

    const imageValue = useTransform(springY, [0, 1], ['-100%', '0%']);

    return (
        <motion.div
            class='cert'
            ref={containerRef}
            style={{ translateX: imageValue }}
        >
            <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                title='Open certificate'
            >
                <motion.img
                    src={image}
                    alt={name}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                />
            </a>
            <p>{name}</p>
        </motion.div>
    );
};

export default Cert;
