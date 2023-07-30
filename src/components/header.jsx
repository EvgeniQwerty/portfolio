import { motion } from 'framer-motion';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <nav className='nav'>
                <div className='flex-end'>
                    <ul className='nav-list'>
                        <li>
                            <motion.a
                                href=''
                                target='_blank'
                                rel='noopener noreferrer'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                title='Скачать резюме'
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
                                title='GitHub'
                            >
                                <FaGithub />
                                <span className='header-hidden-text'>
                                    GitHub
                                </span>
                            </motion.a>
                        </li>
                        <li>
                            <motion.a
                                href='https://tlgg.ru/evgeniqwerty'
                                target='_blank'
                                rel='noopener noreferrer'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                title='Telegram'
                            >
                                <FaTelegram />
                                <span className='header-hidden-text'>
                                    Telegram
                                </span>
                            </motion.a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
