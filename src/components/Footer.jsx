import { motion } from 'framer-motion';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <h2 class='rainbow-text'>Connect with me</h2>
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
    );
};

export default Footer;
