// src/components/common/ProgressBar.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

interface ProgressBarProps {
    currentSlide: number;
    totalSlides: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentSlide, totalSlides }) => {
    const { primaryColor } = useTheme();
    const progress = ((currentSlide + 1) / totalSlides) * 100;

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50">
            <motion.div
                className="h-full"
                style={{ background: primaryColor }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
        </div>
    );
};

export default ProgressBar;
