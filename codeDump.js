function rand(fireflyId, direction) {
		var sign = Math.floor(Math.random() * 2);
		var n = Math.floor(Math.random() * 5);
		var movement = "";
		var currentTop = parseInt($(fireflyId).css('top'), 10);
		
		var currentLeft = parseInt($(fireflyId).css('left'), 10);
		var parentWidth = $(fireflyId).offsetParent().width();
		var leftPercent = 100*currentLeft/parentWidth;

		if (direction == "top") {
			if (sign == 0) {
				movement = "-=" + n + "%";
			} else if (sign == 1) {
				movement = "+=" + n + "%";
			}
		} else if (direction == "left") {
			if (leftPercent < 5) {
				sign = 1;
				n = 5;
			} else if (leftPercent > 90) {
				sign = 0;
				n = 5;
			}
		
			if (sign == 0) {
				movement = "-=" + n + "%";
			} else if (sign == 1) {
				movement = "+=" + n + "%";
			}
		}
		
		

		return movement;
	}
	
	function animateFireflies(fireflyId) {
		var topMove = rand(fireflyId, "top");
		var leftMove = rand(fireflyId, "left");
	
		$(fireflyId).animate({
			left: leftMove,
			top: topMove
		}, 1000, function() {
			// Animation complete.
		});
	}