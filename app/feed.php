<?php

	$feed = simplexml_load_file('http://cloud.tfl.gov.uk/TrackerNet/LineStatus');
	$current_time = time();

	if (file_exists('feed.xml'))
	{
	    $feed_updated = filemtime('feed.xml'); //gets the time for the feed file creation
	    
	    if($current_time - $feed_updated >= 30) { //if it is greater than 30secs
	    	$feed->asXML('feed.xml'); //create a new feed
	    } else {
	    	$feed = simplexml_load_file('feed.xml'); //load existing feed
	    }
	    
	}
	elseif ($feed)
	{
		// $feed is valid, save it
	    $feed->asXML('feed.xml');
	}
	else
	{
	    die('No available feed');
	}

	$data = json_encode($feed); //json string


	if(array_key_exists('callback', $_GET)){

	    header('Content-Type: text/javascript; charset=utf8');
	    header('Access-Control-Allow-Origin: http://www.example.com/');
	    header('Access-Control-Max-Age: 3628800');
	    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

	    $callback = $_GET['callback'];
	    echo $callback.'('.$data.');';

	}else{
	    // normal JSON string
	    header('Content-Type: application/json; charset=utf8');

	   	echo $data;
	}

?>