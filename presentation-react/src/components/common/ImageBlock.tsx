import { ReactNode } from 'react';

/**
 * Props for the ImageBlock component.
 */
interface ImageBlockProps {
    /** The source URL of the image. */
    src: string;
    /** Alternate text for accessibility. */
    alt: string;
    /** Optional caption to display below the image. */
    caption?: ReactNode;
    /** Additional CSS classes for the container. */
    className?: string;
    /** Additional CSS classes for the image element. */
    imgClassName?: string;
}

/**
 * A component to display images within slides with consistent styling and optional captions.
 * Automatically handles responsive sizing and rounding.
 */
const ImageBlock: React.FC<ImageBlockProps> = ({
    src,
    alt,
    caption,
    className = "",
    imgClassName = ""
}) => {
    return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <div className="relative overflow-hidden rounded-xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800">
                <img
                    src={src}
                    alt={alt}
                    className={`max-w-full h-auto object-cover max-h-[50vh] ${imgClassName}`}
                    loading="lazy"
                />
            </div>
            {caption && (
                <div className="mt-3 text-sm lg:text-base text-gray-600 dark:text-gray-400 text-center italic font-light px-4">
                    {caption}
                </div>
            )}
        </div>
    );
};

export default ImageBlock;
