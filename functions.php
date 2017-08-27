<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;
/**
 * Functions - Child theme custom functions
 */


/*****************************************************************************************************************
************************** Caution: do not remove or edit anything within this section **************************/

/**
 * Loads the Divi parent stylesheet.
 * Do not remove this or your child theme will not work unless you include a @import rule in your child stylesheet.
 */
function dce_load_divi_stylesheet() {
    wp_enqueue_style( 'divi-parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'dce_load_divi_stylesheet' );

/**
 * Makes the Divi Children Engine available for the child theme.
 * Do not remove this or you will lose all the customization capabilities created by Divi Children Engine.
 */
require_once('divi-children-engine/divi_children_engine.php');

/****************************************************************************************************************/

/**
 * Load jquery from google - the updownmenu.js requires this version of jquery to work within wordpress
 *
*/
function urchin_assets_scripts() {
    
    wp_deregister_script('jquery'); // remove wordpress version of jquery
    wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js', false, '1.12.4'); // Load Google jQuery
    wp_enqueue_script('jquery');
}

add_action( 'wp_enqueue_scripts', 'urchin_assets_scripts', 15);


function divi_child_theme_enqueue_scripts(){
    $template_child_url = get_stylesheet_directory_uri(); // This gets the uri for the child theme
	// wp_enqueue_style( 'blurp-animate-style', $template_child_url .'/css/hover.css');
	// wp_enqueue_style( 'font-awesome-icons', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
	// wp_enqueue_style( 'graphic-design-page', $template_child_url .'/css/graphic-design-page.css');
	// wp_enqueue_script( 'url-script', $template_child_url . '/js/replaceurl.js', array( 'jquery' ), null, true ); 
	wp_enqueue_script( 'footer-to-bottom-script', $template_child_url . '/js/force-footer-to-bottom.js', array( 'jquery' ), null, true ); 
	wp_enqueue_script( 'updownmenu-script', $template_child_url . '/js/updownmenu.js', array( 'jquery' ), null, true ); 
	wp_enqueue_style( 'updownmenu-style', $template_child_url .'/css/updownmenu.css');
	wp_enqueue_style( 'hamburger-icons-style', $template_child_url .'/css/hamburger-icon.css');
	// wp_register_script('circleMenu', $template_child_url . '/js/circleMenu.js');
	// wp_enqueue_script( 'circleMenu' );
	// wp_enqueue_style( 'circle-menu', $template_child_url .'/css/circle-menu.css');
	// wp_enqueue_script( 'toucfhme-script', $template_child_url . '/js/doubletap.js', array( 'jquery' ), null, true ); 
}

add_action('wp_enqueue_scripts', 'divi_child_theme_enqueue_scripts');
/*
function divi_child_theme_add_footer_styles() {
	$template_child_url = get_stylesheet_directory_uri(); // This gets the uri for the child theme
	wp_enqueue_style( 'style-bottom', $template_child_url .'/css/style-bottom.css');
};
add_action( 'get_footer', 'divi_child_theme_add_footer_styles' );
*/

// add_filter('srcset_paths_relative', '__return_false');

// function child_add_scripts() {
	
// 	wp_register_script('circleMenu', get_bloginfo('stylesheet_directory') . '/circleMenu.js');
// 	wp_enqueue_script( 'circleMenu' );
// 	}
// 	add_action( 'wp_enqueue_scripts', 'child_add_scripts' )
?>