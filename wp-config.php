<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'master25');

/** MySQL database username */
define('DB_USER', 'master25');

/** MySQL database password */
define('DB_PASSWORD', 'dR0]mfIu');

/** MySQL hostname */
define('DB_HOST', 'master25.mysql.uhserver.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'miUwLp#JQOJbi37rd&Z2rTE^y2rm*MuMT(D64u1@R99kO8M@zrYOO*oJ&ou7ACJ!');
define('SECURE_AUTH_KEY',  'uV^iIsl4uS@c)H^QbTas1afJJl%W(XPR2zXx4^vl*mSJKx9LkTwb%9ks#Xy*(V1Y');
define('LOGGED_IN_KEY',    ')7CIY5T)v%6tyBjQQoP507W8ev1Ul4*%IpAY8C)NON*8(m7CcHr8QsM#wVK7ft(0');
define('NONCE_KEY',        'h@)jhqOUlE5s(*L3Rdm03jYa!yYTGbN7xk#B)PsUJACk(!W5BlLGkwv2Qsr!(Usy');
define('AUTH_SALT',        '%o#gg#*F*dl^iPpqOVM&@uHNPbp*lSfy1fyo5N9WT&Ys7hmrwNO1hMngBOhMB9R1');
define('SECURE_AUTH_SALT', 'a)T7VA(o43kRw@E&QaXS(M0)T%f@dE)rX69p0H2e8IhccQzKUSXhi6W!#m!q&ndF');
define('LOGGED_IN_SALT',   '^fY)B^fp@Ax*JLh(rX!%6#T!ZNC7&i9aIRjbrxElv4S#ORM%8ZF^aj3T6JJE#iJH');
define('NONCE_SALT',       '6JC(8mOgV*mDhUVIK%FESDiv*)uA0z^Rh0FNY9pFDak5&W11Tv)GcnKZBdWl&QIw');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'apswp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');
