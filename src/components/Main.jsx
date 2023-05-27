import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import MyImg from '../images/my_img.jpg';

const scrollElement = () => {
    const element = document.getElementById('pc');
    element.scrollIntoView();
};

const Main = () => {
    return (
        <main className='main-home'>
            <div className='cta'>
                <h1 className='title'>
                    <span className='rainbow-text'>Hello!</span> My name is
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
                <button className='scroll-indicator' onClick={scrollElement}>
                    <span>Some Projects</span>
                    <FaChevronDown />
                </button>
            </div>
        </main>
    );
};

export default Main;
