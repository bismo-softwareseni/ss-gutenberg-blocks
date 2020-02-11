/**
 * Import styling
 */
import './style.editor.scss';

/**
 * Internationalization 
 */
const { __ } = wp.i18n;

/**
 * Register block
 */
const { registerBlockType } = wp.blocks;

/**
 * React var
 */
var el = wp.element.createElement;

registerBlockType( 'ss-gutenberg-blocks/customblock2', {
    title: __( 'Custom Block 2', 'ss-gutenberg-blocks' ),
    description: __( 'Custom Gutenberg block for learning purposes.', 'ss-gutenberg-blocks' ),
    category: 'layout',
    keywords: [ __( 'Grid', 'ss-gutenberg-blocks' ), __( 'Image', 'ss-gutenberg-blocks' ) ],
    icon: {
        background: 'red',
        foreground: 'blue',
        src: 
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M24 0H0v24h24z" fill="none"/><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/></svg>
    },
    edit: ( props ) => {
        return <div className={props.className}>Editor 2</div>;
    },
    save: () => {
        return <div>Saved 2</div>;
    }
} )