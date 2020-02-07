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

    //-- register blocks
    function ss_register_blocks() {
        //-- register the script
        wp_register_script( 
            'ss-customblock1-editor-script',
            plugins_url( 'blocks/customblock1/index.js', __FILE__ ),
            array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
            '1.0'
        );

        register_block_type( 
            'ss-gutenberg-blocks/customblock1',
            array(
                'editor_script' => 'ss-customblock1-editor-script'
            )
        );
    }
    add_action( 'init', 'ss_register_blocks' );