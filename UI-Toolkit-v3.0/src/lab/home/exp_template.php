<!DOCTYPE html>
<html lang="en" class="no-js">

<head>
  
  <!--It is a good practice to declare the encoding even for an 
  English Web site. One function of this is to tag is to "reset"
  the user's browser back to Latin-1 and ensure proper font 
  settings. The Unicode "utf-8" encoding also ensures that any 
  special characters inserted such as "Smart quotes", currency 
  symbols, em-dashes and so forth will be properly displayed in
  most browsers.-->
  <meta http-equiv="Content-Type" content="text/html;  charset=utf-8" >


  <!-- The following meta element gives the appearance of using 
  Internet Explorer (IE) but actually renders the page in google 
  chrome thus rescuing the older IE versions and providing the 
  speed and standards compliance, and security of Chrome 
  http://tech18.com/google-chrome-frame-rescue-older-ie.html -->
  <meta http-equiv="X-UA-Compatible"  content="IE=edge,chrome=1"/>


  <!-- The default title of the lab. -->
  <title class="custom" id="page-title">Virtual Labs</title>
  

  <!-- Following meta tags store the information about the 
  author and any other relevant information about the  code -->
  <meta name="author" content="" class="custom">
  <meta name="description" content="" class="custom">


  <!-- Place the relative address of the favicon 
  ("images/logo.jpeg" here). All major browsers support the link
  rel="shortcut icon"  tag to associate a small icon with the 
  page -->
  <link rel="shortcut icon" href="http://deploy.virtual-labs.ac.in/labs/cse09//images/favicon.png"   class="custom">


  <!-- These are the stylesheets used for the lab. Please don't
  edit them; If you do, you will lose the edits in subsequent 
  releases of this User Interface. -->
  <link rel="stylesheet" href="./css/default.css"/>
  <link rel="stylesheet" href="./css/style.css"/>

  <!-- Instead add your custom styles to override the defaults 
  coming from the above style sheets. -->
  
  <link rel="stylesheet" href="./css/override.css"/>
<link rel="stylesheet" href="./css/ja.css"/>

  <!-- ***************************************************** -->

  <!-- All JavaScript at the bottom, except for Modernizr which
  enables HTML5 elements & feature detects -->

</head>

<!-- Piwik -->
<script type="text/javascript">
var pkBaseURL = (("https:" == document.location.protocol) ? "https://virtual-labs.ac.in/a/" : "http://virtual-labs.ac.in/a/");
document.write(unescape("%3Cscript src='" + pkBaseURL + "piwik.js' type='text/javascript'%3E%3C/script%3E"));
</script><script type="text/javascript">
try {
var piwikTracker = Piwik.getTracker(pkBaseURL + "piwik.php", 1);
piwikTracker.trackPageView();
piwikTracker.enableLinkTracking();
} catch( err ) {}
</script><noscript><p><img src="http://virtual-labs.ac.in/a/piwik.php?idsite=1" style="border:0" alt="" /></p></noscript>
<!-- End Piwik Tracking Code -->

<body> 
  <div id="container">
  	
  	 <!-- The Experiment Document Container-->

<!-- The lab Header contains the logo and the name of the lab,
	usually displayed on the top of the page-->

	<header id="experiment-header">

	<div id="experiment-header-logo" class="logo">
	<!-- Enclose the logo image of your lab or write it in 
	text-->

		<a href="http://virtual-labs.ac.in/"><div class="imagemap">
			<img src="http://virtual-labs.ac.in/images/virtualLabsLogo.jpg" alt="" usemap="#logos" />

	
			<map name="logos">
			
				<area shape="rect" coords="0,0,505,98" href="http://www.vlab.co.in/" title="Vlab" alt="Vlab" />
				<area shape="rect" coords="734,0,1022,97" href="http://www.iiit.ac.in/" title="IIIT" alt="IIIT" />
			
				<area shape="default" nohref="nohref" title="Default" alt="Default"/>
			</map>

			</div>
	      
	     </a>
	</div>
	
	<!-- BEGIN: MAIN NAVIGATION -->
	<div id="ja-mainnav">
		<div id="ja-splitmenu" class="mainlevel clearfix">
				<ul id="main-nav-ul" > 
<?php foreach ($nav as $n) {?>
					
					<li class="<?php if(strcmp($section,trim($n['heading']))) echo 'menu' ; else echo 'menu active';?>"> <a class="<?php if(strcmp($section,trim($n['heading']))) echo 'menu1' ; else echo 'menu1 active';?>" href="<?php echo $css_js;?>./index.php?section=<?php echo trim($n['heading']);?>""><span class="menu-title"><?php echo $n['heading'];?></span></a></li>
<?php }?>
					<!--<li class="<?php if(strcmp($section,trim($n['heading']))) echo 'menu first-item' ; else echo 'menu first-item active';?>">
						<a href="<?php echo $css_js;?>../build/index.php?section=Welcome!" class="menu-item0 active first-item" id="menu1" title="Home"><span class="menu-title">Home</span></a></li>
					<li class="<?php if(strcmp($section,trim($n['heading']))) echo 'menu' ; else echo 'menu active';?>"><a href="<?php echo $css_js;?>../build/index.php?section=Computer Science and Engg." class="menu-item1 active" id="menu2" title="CS Labs"><span class="menu-title">Computer Science Labs</span></a></li>
					<li class="<?php if(strcmp($section,trim($n['heading']))) echo 'menu' ; else echo 'menu active';?>"><a href="<?php echo $css_js;?>../build/index.php?section=Chemical Sciences" class="menu-item2" id="menu3" title="Science Labs"><span class="menu-title">Science Labs</span></a></li>
					<li class="<?php if(strcmp($section,trim($n['heading']))) echo 'menu' ; else echo 'menu active';?>"><a href="<?php echo $css_js;?>../build/index.php?section=Civil Engg." class="menu-item3" id="menu4" title="Engineering Labs"><span class="menu-title">Engineering Labs</span></a></li>
					<li class="<?php if(strcmp($section,trim($n['heading']))) echo 'menu' ; else echo 'menu active';?>"><a href="" class="menu-item4" id="menu5" title="About Us"><span class="menu-title">About us &nbsp;</span></a></li>
					<li class="<?php if(strcmp($section,trim($n['heading']))) echo 'menu last-item' ; else echo 'menu last-item active';?>"><a href="" class="menu-item5" id="menu5" title="Contact"><span class="menu-title">Contact us&nbsp;&nbsp;</span></a></li>
						-->
					</ul>
		</div>	
	</div>

	</header>


	<!-- The lab article is the main content area where all the 
	experiment content sits-->
	<article id="experiment-article">

		  
	<!-- The lab article has an header, optional navigational 
	menu, number of sections, an optional sidebar and a closing 
	footer-->

	<header id="experiment-article-heading" class="heading">
	<!-- You can add a welcome message or title of the 
	experiment here -->
	<?php echo $labarticleheading; ?>	 
	<!-- Add any additional element if required with proper 
	enclosing-->
	</header>

	

	<!-- All the sections of your lab or experiment can be 
	enclosed together with a div element as shown below-->
	<div id="experiment-article-sections">

	<!-- First section of the article-->
	<section id="experiment-article-section-1">

		<div id="experiment-article-section-1-icon" class="icon">
		<!-- Enclose the icon image of your lab -->
		<img src="http://deploy.virtual-labs.ac.in/labs/cse09//images/introduction.jpg">
		</div>	
		
		<!-- The heading for the section can be enclosed in a 
		div tag. -->
		<div id="experiment-article-section-1-heading" class="heading">
		<?php if(isset($data['SubHeading'])) echo $data['SubHeading'] ?>
		</div>
		<!-- Write the section content inside a paragraph 
		element, You can also include images with <img> tag -->
		<div id="experiment-article-section-1-content" class="content">	
		<?php if(isset($data['SubContent'])) echo $data['SubContent'] ?>
		
		</div>


	</section>

	
	
        

      </div>


    <!-- An article can have a sidebar that contain related 
    links and additional material (however it is kept optional 
    at this moment) -->
    <aside id="lab-article-sidebar" class="default">
      <!-- put the content that you want to appear in the 
      sidebar -->	
    </aside>


    <!-- Article footer can display related content and 
    additional links -->						
    <footer id="lab-article-footer" class="default">
      <!-- Put the content that you want to appear here -->
    </footer>

  </article>


  <!-- Links to other labs, about us page can be kept the lab 
  footer-->
   <footer id="lab-footer" class="footer">
    <!-- Put the content here-->
	<a href="http://virtual-labs.ac.in/nmeict/">Sponsered by MHRD (NME-ICT) </a> | <a href="http://virtual-labs.ac.in/licensing/" target="_blank"> Licensing Terms </a>
  </footer>
	
  	
  </div>
  
	
  <!-- Javascript at the bottom for fast page loading -->

  

  
  <!-- ******** ADD/OVERRIDE JAVASCRIPT FILES HERE ********* -->
  

  <!-- ***************************************************** -->
  
</body>
</html>
