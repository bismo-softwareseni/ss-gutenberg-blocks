<?php
    /**
     * The plugin bootstrap file
     *
     * This file is read by WordPress to generate the plugin information in the plugin
     * admin area. This file also includes all of the dependencies used by the plugin,
     * registers the activation and deactivation functions, and defines a function
     * that starts the plugin.
     *
     * @link              https://www.softwareseni.com/
     * @since             1.0.0
     * @package           ss-gutenberg-blocks
     *
     * @wordpress-plugin
     * Plugin Name:       SoftwareSeni Gutenberg Blocks
     * Plugin URI:        https://www.softwareseni.com/
     * Description:       Custom Gutenberg blocks.
     * Version:           1.0.0
     * Author:            Bismo - SoftwareSeni
     * Author URI:        https://www.softwareseni.com/
     * License:           GPL-2.0+
     * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
     * Text Domain:       ss-gutenberg-blocks
     * Domain Path:       /languages
     */

    if( ! defined( 'ABSPATH' ) ) {
        exit;
    }

    //-- register blocks type
    function ss_register_blocks_type( $block_name, $options = array() ) {
        register_block_type( 
            'ss-gutenberg-blocks/' . $block_name,
            array_merge(
                array(
                    'editor_script' => 'ss-block-editor-script',
                    'editor_style'  => 'ss-block-editor-style',
                    'style'         => 'ss-block-style',
                    'script'        => 'ss-block-script',
                ),
                $options
            )
            
        );
    }

    //-- register blocks
    function ss_register_blocks() {
        //-- register the script
        wp_register_script( 
            'ss-block-editor-script',
            plugins_url( 'dist/editor.js', __FILE__ ),
            array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
            '1.0'
        );
        wp_register_script( 
            'ss-block-script',
            plugins_url( 'dist/script.js', __FILE__ ),
            array( 'jquery' ),
            '1.0'
        );

        //-- register the style
        wp_register_style(
            'ss-block-editor-style',
            plugins_url( 'dist/editor.css', __FILE__ ),
            array( 'wp-edit-blocks' )
        );
        wp_register_style(
            'ss-block-style',
            plugins_url( 'dist/style.css', __FILE__ ),
            array()
        );

        //-- custom block 1
        ss_register_blocks_type( 'customblock1' );

        //-- custom block 2
        ss_register_blocks_type( 'customblock2' );
    }
    add_action( 'init', 'ss_register_blocks' );