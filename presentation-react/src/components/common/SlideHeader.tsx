import { ReactNode } from 'react';

/**
 * Props for the SlideHeader component.
 */
interface SlideHeaderProps {
    /** The main title of the slide. */
    title: ReactNode;
    /** An optional subtitle displayed below the title. */
    subtitle?: ReactNode;
}

/**
 * A standard header component for slides, displaying a title and an optional subtitle.
 * Designed to be sticky at the top of the slide.
 */
const SlideHeader: React.FC<SlideHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="sticky top-0 z-50 left-0 right-0 h-auto py-6 lg:py-0 lg:h-[85px] flex items-center px-6 lg:px-16 bg-gradient-to-br from-primary-700 to-primary-900 dark:from-sky-900 dark:to-slate-900 shadow-md">
            <div>
                <h1 className="title-font text-3xl lg:text-4xl font-bold text-on-primary leading-none">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-base lg:text-lg text-on-primary mt-1 font-light">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default SlideHeader;
