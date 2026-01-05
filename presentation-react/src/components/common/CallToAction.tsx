import { ReactNode } from 'react';

/**
 * Props for the CallToAction component.
 */
interface CallToActionProps {
    /** The icon name (Material Icons) to display. */
    icon?: string;
    /** The text content of the call to action. */
    text: ReactNode;
    /** Additional CSS classes. */
    className?: string;
}

/**
 * A prominent call-to-action component with an icon and text, usually placed at the bottom of a slide.
 */
const CallToAction: React.FC<CallToActionProps> = ({
    icon = "rocket_launch",
    text,
    className = ""
}) => {
    return (
        <div className={`h-auto lg:h-[100px] flex items-center justify-center px-6 lg:px-16 py-6 lg:py-0 bg-gradient-to-br from-primary-800 to-primary-900 dark:from-sky-900 dark:to-slate-900 ${className}`}>
            <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
                <i className="material-icons text-white text-4xl lg:text-[36px]" aria-hidden="true">{icon}</i>
                <p className="text-xl lg:text-2xl text-white font-semibold">{text}</p>
            </div>
        </div>
    );
};

export default CallToAction;
