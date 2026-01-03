import { useRef, useEffect } from 'react';
import katex from 'katex';

/**
 * Props for the MathBlock component.
 */
interface MathBlockProps {
    /** The LaTeX expression to render. */
    tex: string;
    /**
     * Whether to render in display mode (block) or inline mode.
     * @default false
     */
    block?: boolean;
    /** Additional CSS classes to apply to the container. */
    className?: string;
}

/**
 * A component that renders LaTeX mathematical expressions using KaTeX.
 *
 * It supports both inline and block display modes.
 *
 * @example
 * // Inline math
 * <MathBlock tex="E=mc^2" />
 *
 * @example
 * // Block math
 * <MathBlock tex="\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}" block />
 */
const MathBlock: React.FC<MathBlockProps> = ({ tex, block = false, className = '' }) => {
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            try {
                katex.render(tex, containerRef.current, {
                    throwOnError: false,
                    displayMode: block,
                    output: 'html' // Use HTML output for accessibility and simpler rendering
                });
            } catch (error) {
                console.error('KaTeX rendering error:', error);
                containerRef.current.innerText = tex;
            }
        }
    }, [tex, block]);

    return (
        <span
            ref={containerRef}
            className={`math-block ${block ? 'block my-4 text-center' : 'inline'} ${className}`}
            role="math"
            aria-label={tex}
        />
    );
};

export default MathBlock;
