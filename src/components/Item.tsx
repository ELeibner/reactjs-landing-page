import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { container, item } from './Item.animation';
import './Item.style.css';

interface IItem {
    name: string;
    icon: ReactElement;
    url: string;
}

const items: IItem[] = [
    { name: 'github', icon: <Github />, url: 'https://github.com/ELeibner' },
    {
        name: 'linkedin',
        icon: <Linkedin />,
        url: 'https://linkedin.com/in/erik-leibner'
    }
];

export const Item = () => (
    <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
    >
        {items.map((el) => (
            <motion.li
                key={el.name}
                aria-label={el.name}
                className="item"
                variants={item}
                onClick={() => window.open(el.url, '_blank')}
            >
                <motion.div
                    children={el.icon}
                    className="box"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                />
            </motion.li>
        ))}
    </motion.ul>
);
