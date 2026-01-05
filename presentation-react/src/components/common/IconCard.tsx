import { ReactNode } from 'react';

/**
 * Available visual variants for the IconCard.
 */
export type IconCardVariant =
    | 'info'
    | 'warning'
    | 'outlined-info'
    | 'outlined-warning'
    | 'outlined-clean'
    | 'clean';

/**
 * Props for the IconCard component.
 */
interface IconCardProps {
    /** Material Icon name to display in the header. */
    icon?: string;
    /** The title of the card. */
    title: ReactNode;
    /** The content of the card. */
    children?: ReactNode;
    /** The visual style variant of the card. */
    variant?: IconCardVariant;
    /** Additional CSS classes. */
    className?: string;
}

/**
 * A versatile card component with an icon, title, and various visual styles.
 * Used for displaying structured content, lists, or highlighted information.
 */
const IconCard: React.FC<IconCardProps> = ({ icon, title, children, variant = 'info', className = '' }) => {

    // Helper to get classes based on variant
    const getVariantClasses = (v: IconCardVariant) => {
        switch (v) {
            case 'info': // Left Border
                return {
                    container: 'bg-primary-50 dark:bg-slate-800 border-l-4 border-primary-700 dark:border-primary-500',
                    icon: 'text-primary-800 dark:text-primary-300',
                    title: 'text-primary-800 dark:text-primary-300'
                };
            case 'warning': // Orange Left Border
                return {
                    container: 'bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 dark:border-accent-600',
                    icon: 'text-accent-700 dark:text-accent-300',
                    title: 'text-accent-700 dark:text-accent-300'
                };
            case 'outlined-info': // Blue Border-2
                return {
                    container: 'bg-white dark:bg-slate-800 border-2 border-primary-700 dark:border-primary-700 shadow-sm',
                    icon: 'text-primary-800 dark:text-primary-300',
                    title: 'text-primary-800 dark:text-primary-300'
                };
            case 'outlined-warning': // Orange Border-2
                return {
                    container: 'bg-accent-50 dark:bg-accent-900/20 border-2 border-accent-700 dark:border-accent-600',
                    icon: 'text-accent-700 dark:text-accent-300',
                    title: 'text-accent-700 dark:text-accent-300'
                };
            case 'outlined-clean': // Just border
                return {
                    container: 'bg-transparent border-2 border-primary-700 dark:border-primary-700',
                    icon: 'text-primary-800 dark:text-primary-300',
                    title: 'text-primary-800 dark:text-primary-300'
                };
            case 'clean': // No border
                return {
                    container: 'bg-transparent border-0 p-0',
                    icon: 'text-primary-800 dark:text-primary-300',
                    title: 'text-primary-800 dark:text-primary-300'
                };
            default:
                // Fallback safe return
                return {
                    container: 'bg-primary-50 dark:bg-slate-800 border-l-4 border-primary-700 dark:border-primary-500',
                    icon: 'text-primary-800 dark:text-primary-300',
                    title: 'text-primary-800 dark:text-primary-300'
                };
        }
    };

    const selectedStyle = getVariantClasses(variant);

    return (
        <div className={`p-5 rounded-lg ${selectedStyle.container} ${className}`}>
            <div className="flex items-center gap-3 mb-3">
                {icon && <i className={`material-icons text-3xl lg:text-4xl ${selectedStyle.icon}`} aria-hidden="true">{icon}</i>}
                <h3 className={`title-font text-xl lg:text-2xl font-bold ${selectedStyle.title}`}>
                    {title}
                </h3>
            </div>
            <div className="text-lg text-gray-700 dark:text-gray-200">
                {children}
            </div>
        </div>
    );
};

export default IconCard;
