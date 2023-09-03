<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' : '; } ?><?php bloginfo( 'name' ); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
		<link href="<?php echo esc_url( get_template_directory_uri() ); ?>/img/icons/favicon.ico" rel="shortcut icon">
		<link href="<?php echo esc_url( get_template_directory_uri() ); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">
		<link rel="alternate" type="application/rss+xml" title="<?php bloginfo( 'name' ); ?>" href="<?php bloginfo( 'rss2_url' ); ?>" />

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo( 'description' ); ?>">

		<?php wp_head(); ?>


	</head>
	<body <?php body_class(); ?>>
    <!-- Start top header -->
<header>
	<div class="header_top_content container">
	<div class="header_info">
		<ul>
		<li>
			<span>
			<i class="ri-mail-open-fill"></i>
			<a class="" href="mailto:contact@iisga.ma">Info@iicp.ma</a>
			</span>
		</li>
		<li>
			<span>
			<i class="ri-phone-line"></i>
			<a href="tel:+212523354496" class=""> +(212)621347060 </a>
			<a href="tel:+212523354496" class=""> +(212)621351317 </a>
			</span>
		</li>
		</ul>
	</div>
	<div class="header_social">
		<ul>
		<li>
			<a href="#facebook"><i class="ri-facebook-fill"></i></a>
		</li>
		<li>
			<a href="#instagram"><i class="ri-instagram-line"></i></a>
		</li>
		<li>
			<a href="#twitter"><i class="ri-twitter-fill"></i></a>
		</li>
		</ul>
	</div>
	</div>
	<!-- End top header -->

  <!-- Start main header -->
	<nav>
		<div class="navbar container">
		<div class="logo">
			<a href="https://school.tahiri.me/">
			<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/img/logo-iisga.png" alt="" />
			</a>
		</div>
		<?php
				wp_nav_menu( array(
					'theme_location'    => 'header-menu',
					'container'         => 'div',
					'container_class'   => 'collapse navbar-collapse',
					'container_id'      => 'navbarSupportedContent', // Updated container ID
					'menu_class'        => 'navbar',
				) );
			?>
		</div>
	</nav>
		<!-- End main header -->

</header>
