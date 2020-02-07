/**
 * Internationalization 
 */
var __ = wp.i18n.__;

/**
 * Register block
 */
var registerBlockType = wp.blocks.registerBlockType;

/**
 * React var
 */
var el = wp.element.createElement;

registerBlockType( 'ss-gutenberg-blocks/customblock1', {
    title: __( 'Custom Block 1', 'ss-gutenberg-blocks' ),
    description: __( 'Custom Gutenberg block for learning purposes.', 'ss-gutenberg-blocks' ),
    category: 'layout',
    edit: function() {
        return el( 'div', {
            'id': 'text-wrapper',
            'style': {
                'background': 'red',
                'color': 'white'
            }
        }, 'Editor View' );
    },
    save: function() {
        return el( 'div', {
            'id': 'text-wrapper',
            'style': {
                'background': 'red',
                'color': 'white'
            }
        }, 'Saved Content' );
    }
} )