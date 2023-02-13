<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'daanh_portfolio2023' );

/** Database username */
define( 'DB_USER', 'daanh' );

/** Database password */
define( 'DB_PASSWORD', 'WAupZ8YPMm2U' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Z#EX,As`qsj5]|:*9X?aPx3n6n9^MnP,fpdD *~W}|^, Gl)|umVckcrz9qpoerd' );
define( 'SECURE_AUTH_KEY',  'f>*v]}WkW+,ufV0DH@|yP*D?q?L!?dW5)}Xkme*EKC9Ge#Wd~rU/eK! )&Flsh*V' );
define( 'LOGGED_IN_KEY',    'B3hjS/s6CxD$<AeRg=<$oYe[^zSVH<Y%=$:VvfJ+6^!@mVer:uILi=R{FG>Hf>@F' );
define( 'NONCE_KEY',        ',S$Td$pNa164/[]tq0]D/(BuGGxbWU@2IR)h_MgT67 s@quri<MK&u-J0mcv[Y*x' );
define( 'AUTH_SALT',        'M`<d D/]UuZ)?X4v,E3.O+U?y=idysL{Sl=#@I=-=Lpn)[d=5-!mJq|!R0h)]Uq%' );
define( 'SECURE_AUTH_SALT', '(__|}*mOHEvXjgv 9`+,R`yYp7S:v`_V&/P/2A3_aC#ER5pe+_5M.O#fh~6@i5=2' );
define( 'LOGGED_IN_SALT',   'dqY(K_n cB.cz@WgHn42;c7W#.{h{ql?;E8Suws8/[Ca^5lgWx1uGB!#(j}7i5KR' );
define( 'NONCE_SALT',       ']<C%/M,hkFV=)QbqB*EU8{433H`;5RHva<H.nDj==J2ov6Qm]$X9O)lreN*Ru8;:' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

define('FS_METHOD', 'direct');