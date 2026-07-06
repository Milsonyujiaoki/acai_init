import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        const handleMouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('[data-hover]')) {
                setIsHovering(true);
            }
            else {
                setIsHovering(false);
            }
        };
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);
    return (_jsx(motion.div, { className: "fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference", animate: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: isHovering ? 2.5 : 1,
        }, transition: {
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1
        } }));
};
//# sourceMappingURL=CustomCursor.js.map