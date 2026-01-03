import { ReactNode } from 'react';

/**
 * Props for the SlideLayout component.
 */
interface SlideLayoutProps {
    /** The content of the slide. */
    children: ReactNode;
    /** Additional CSS classes. */
    className?: string;
}

/**
 * The base layout wrapper for a slide.
 * It provides a full-height container with flex column layout.
 */
const SlideLayout: React.FC<SlideLayoutProps> = ({ children, className = '' }) => {
    return (
        <div className={`w-full min-h-screen lg:min-h-full flex flex-col relative ${className}`}>
            {children}
        </div>
    );
};

export default SlideLayout;
