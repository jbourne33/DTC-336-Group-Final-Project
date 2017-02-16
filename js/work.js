$( window ).load(function() {
	//-----------------------------
	//GLOBAL VARIABLES
	//-----------------------------
	var tutorial = 0; //variable for tracking current page of tutorial
	var pageCount = 0; //variable for tracking current "page" of piece
	var whichVideo = 0; //variable for switching video, if necessary
	var inputNo = 0; //variable for checking if piece is currently animating
	var button1Pressed = 0;
	var button2Pressed = 0;
	var button3Pressed = 0;
	
	$("#wrapper").fadeIn(2000);
	
	//-----------------------------
	//GLOBAL FUNCTIONS
	//-----------------------------
	
	//Create random percentage movement for fireflies
	function rand() {
		var sign = Math.floor(Math.random() * 2);
		var n = Math.floor(Math.random() * 5);
		var movement = "";
		
		if (sign == 0) {
			movement = "-=" + n + "%";
		} else if (sign == 1) {
			movement = "+=" + n + "%";
		}

		return movement;
	}
	
	//Animate Firefly Movement
	function animateFireflies(fireflyId) {
		var topMove = rand();
		var leftMove = rand();
	
		$(fireflyId).animate({
			left: leftMove,
			top: topMove
		}, 1000, function() {
			// Animation complete.
		});
	}
	
	//Randomize Start Position
	function randomizeStart(fireflyId) {
		var topPosition = Math.floor(Math.random() * 75) + "%";
		var leftPosition = Math.floor(Math.random() * 75) + "%";
		
		$(fireflyId).css("left",leftPosition);
		$(fireflyId).css("top",topPosition);
	}
	




	//SET INTERVALS FOR FIREFLY ANIMATIONS
	setInterval(function(){
		animateFireflies("#firefly1");
		animateFireflies("#firefly2");
		animateFireflies("#firefly3");
	}, 1000);
	
	setTimeout(function() {
		setInterval(function(){
			animateFireflies("#firefly4");
			animateFireflies("#firefly5");
			animateFireflies("#firefly6");
		}, 1000);
	}, 200);
	
	setTimeout(function() {
		setInterval(function(){
			animateFireflies("#firefly7");
			animateFireflies("#firefly8");
			animateFireflies("#firefly9");
		}, 1000);
	}, 500);

	setTimeout(function() {
		setInterval(function(){
			animateFireflies("#firefly10");
			animateFireflies("#firefly11");
			animateFireflies("#firefly12");
		}, 1000);
	}, 700);

	setTimeout(function() {
		setInterval(function(){
			animateFireflies("#firefly13");
			animateFireflies("#firefly14");
			animateFireflies("#firefly15");
		}, 1000);
	}, 1200);
	
	
	//RANDOMIZE START POSITIONS OF FIREFLIES
	randomizeStart("#firefly1");
	randomizeStart("#firefly2");
	randomizeStart("#firefly3");
	randomizeStart("#firefly4");
	randomizeStart("#firefly5");
	randomizeStart("#firefly6");
	randomizeStart("#firefly7");
	randomizeStart("#firefly8");
	randomizeStart("#firefly9");
	randomizeStart("#firefly10");
	randomizeStart("#firefly11");
	randomizeStart("#firefly12");
	randomizeStart("#firefly13");
	randomizeStart("#firefly14");
	randomizeStart("#firefly15");
	
	

	//-----------------------------
	//FUNCTIONS FOR "ENTER" KEY.
	//-----------------------------
	$.key("enter", function() {
		if (inputNo != 1) {
			$("#jplayer-music1").jPlayer("play");
			$("#jplayer-music2").jPlayer("play");
			$("#jplayer-music3").jPlayer("play");
			$("#jplayer-music4").jPlayer("play");
		}//end of animation check
	});


	//-----------------------------
	//FUNCTIONS FOR "LEFT ARROW" KEY.
	//-----------------------------
	$.key("left", function() {
		if (button3Pressed == 0) {
			button3Pressed = 1;
			$("#jplayer-music4").jPlayer("volume", 1);
			$(".firefly-image").attr("src","Fireflys/purpleff.gif");
		}
		else if (button3Pressed == 1) {
			button3Pressed = 0;
			$("#jplayer-music4").jPlayer("volume", 0.01);
			$(".firefly-image").attr("src","Fireflys/standardff.gif");
		}
	});


	//-----------------------------
	//FUNCTIONS FOR "RIGHT ARROW" KEY.
	//-----------------------------
	$.key("right", function() {
		if (button1Pressed == 0) {
			button1Pressed = 1;
			$("#jplayer-music2").jPlayer("volume", 1);
			$(".firefly-image").attr("src","Fireflys/redff.gif");
		}
		else if (button1Pressed == 1) {
			button1Pressed = 0;
			$("#jplayer-music2").jPlayer("volume", 0.01);
			$(".firefly-image").attr("src","Fireflys/standardff.gif");
		}
	});


	//-----------------------------
	//FUNCTIONS FOR "UP ARROW" KEY.
	//-----------------------------
	$.key("up", function() {
		if (button2Pressed == 0) {
			button2Pressed = 1;
			$("#jplayer-music3").jPlayer("volume", 1);
			$(".firefly-image").attr("src","Fireflys/greenff.gif");
		}
		else if (button2Pressed == 1) {
			button2Pressed = 0;
			$("#jplayer-music3").jPlayer("volume", 0.01);
			$(".firefly-image").attr("src","Fireflys/standardff.gif");
		}
	});


	//-----------------------------
	//FUNCTIONS FOR "DOWN ARROW" KEY.
	//-----------------------------
	$.key("down", function() {
		if (inputNo != 1) {
			
		}//end of animation check
	});


	//-----------------------------
	//FUNCTIONS FOR "R" KEY.
	//-----------------------------
	$.key("r", function() {
		if (inputNo != 1) {
			
		}//end of animation check
	});


	//-----------------------------
	//FUNCTIONS FOR "L" KEY.
	//-----------------------------
	$.key("l", function() {
		if (inputNo != 1) {
		
		}//end of animation check
	});
	
	
	//-----------------------------
	//FUNCTIONS FOR "ESC" KEY.
	//-----------------------------
	$.key("esc", function() {
		
	});


	//-----------------------------
	//LOOPING AUDIO PLAYER
	//-----------------------------
	$("#jplayer-music1").jPlayer({
		ready: function() {
			$(this).jPlayer("setMedia", {
				mp3: "audio/mtm-drumsandbass.mp3"
			})
			//'click' event when kinect senses person in range, another click
			//event should stop the music loop and refresh the page.
			var kickoff = function () {
			$("#jplayer-music1").jPlayer("play");
				document.documentElement.removeEventListener(kickoff, true);
			};
			document.documentElement.addEventListener(kickoff, true);
		},
		loop: false,
		swfPath: "/js"
	});
	

	$("#jplayer-music2").jPlayer({
		ready: function() {
			$(this).jPlayer("setMedia", {
				mp3: "audio/mtm-horns.mp3"
			})
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
			var kickoff = function () {
			$("#jplayer-music2").jPlayer("play");
				document.documentElement.removeEventListener(click, kickoff, true);
			};
			document.documentElement.addEventListener(click, kickoff, true);
		},
		loop: false,
		swfPath: "/js"
	});

	$("#jplayer-music3").jPlayer({
		ready: function() {
			$(this).jPlayer("setMedia", {
				mp3: "audio/mtm-piano.mp3"
			})
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
			var kickoff = function () {
			$("#jplayer-music3").jPlayer("play");
				document.documentElement.removeEventListener(click, kickoff, true);
			};
			document.documentElement.addEventListener(click, kickoff, true);
		},
		loop: false,
		swfPath: "/js"
	});
	
	//Cowbell .mp3 will live here
	$("#jplayer-music4").jPlayer({
		ready: function() {
			$(this).jPlayer("setMedia", {
				mp3: "audio/mtm-cowbell.mp3"
			})
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
			var kickoff = function () {
			$("#jplayer-music4").jPlayer("play");
				document.documentElement.removeEventListener(click, kickoff, true);
			};
			document.documentElement.addEventListener(click, kickoff, true);
		},
		loop: false,
		swfPath: "/js"
	});


	$("#jplayer-music1").jPlayer("play");
	$("#jplayer-music2").jPlayer("volume", 0);
	$("#jplayer-music3").jPlayer("volume", 0);
	$("#jplayer-music4").jPlayer("volume", 0);
	//setTimeout(location.reload(),66000)




//-----------------------Tasks to be done still  ------------------------------
//-------------------------	
// 1) 
//	setTimeout(location.reload(),75000)
// have Jon do a location.reload() after the credits roll in his jquery or whatever
//on an interval of 75000 milliseconds activate javascript location.reload()
// activate this with an 'R' press
//-------------------------
// 2) Firefly animation
//	create a set-interval setInterval(function(){
	//$("firefly1")
//		$( "#clickme" ).click(function() {
  //		$( "#book" ).animate({
		//"Fireflys/giftestsmall.gif"
    //		opacity: 0.90,
    //		left: "+=50",
    //		height: "toggle"
  //		}, 5000, function() {
  //		// Animation complete.
  //});
//});
////		combine with jquery's animate
//	}, 5000 in milliseconds):

//Math.random()*55





//	http://jplayer.org/latest/developer-guide/#jPlayer-option-volume	
	
	//USE TO FADE OUT MUSIC
	//$('#jplayer-music').jPlayerFade().out(4500);

	//USE TO PLAY SINGLE SOUND
	//var audio = $("#main-menu-button")[0];
	//audio.play();
	
});