var tabWidths = [];
var tabWidthRunningSum = [];
var navOffsets = [];
var tabs = [];
var slides = [];
var captions = [];
var downIndex = 0;
var endValue = 0;
var viewportWidth = 0;
var viewportHeight = 0;
var nav;
var imageWidths = [1172,1172,1172,1172,1172,1172,1172,1172,1172,1172,1172,1172,1172,1172,1172,1172,1172,1172,1172,1172];
var imageHeights = [2077,2077,2077,2077,2077,2077,2077,2077,2077,2077,2077,2077,2077,2077,2077,2077,2077,2077,2077,2077];

// Distance between the center of the image and its optical right edge in the coordinate system of the native image resolution
var captionRightEdges = [426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426,426];

var captionBottomEdges = [674,674,674,674,674,674,674,674,674,674,674,674,674,674,674,674,674,674,674,674];

// Padding added to the bottom in the coordinate system of the slide divs
var applyBottomPaddingToCaption = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

var springSystem = new rebound.SpringSystem();
var mainSpring = springSystem.createSpring();
var downSpring = springSystem.createSpring();

var lastX = 0;
var panVelocity = 0;
var isDragging = false;
var shouldStartDetectingGesture = true;
var isCurrentlyDetectingGesture = false;
var endOfDetectionTimer;
var restartDetectionTimer;

$(document).ready(function($) {
	viewportWidth = $("#wrapper").innerWidth();
	viewportHeight = $("#slides li").innerHeight();

	//不移动到的时候 Pause
	function loadAllGlslCanvas() {
	    var list = document.getElementsByClassName('htmlvideo');
	    if (list.length > 0) {
	        window.videos = [];
	        for (var i = 0; i < list.length; i++) {
	            var sandbox = list[i];
	            sandbox.pause()
	            if (!sandbox.isValid) {
	                window.videos.push(sandbox);
	            }
	        }
	    }
	}
  	loadAllGlslCanvas()


	var totalWidth = calculateTabWidths();

	nav = document.getElementById('nav');
	
	layoutCaptions();
	
	$(window).on('resize', function(){
		layoutCaptions();
	});
	
	// Size the container to fit
	$("#nav").width(totalWidth);

	$("#nav li").each(function(i, val) {
		navOffsets[i] = navOffsetForIndex(i);
		tabs[i] = val;
	});
 
	setupMainSpring();
	setupPanSupport();
	setupTabPressedStates();
	setupArrowKeys();
			
	$("#slides li").each(function(i, val) {
		val.style['webkitTransform'] = 'translate3d(' + viewportWidth * i + 'px, 0, 0)';	
		val.style['MozTransform'] = 'translate3d(' + viewportWidth * i + 'px, 0, 0)';
		slides[i] = val;
	});
	
	// Select the first tab
	selectTabIndex(0, false);

	// Behavior when the tabs are clicked
	var down = [];
	
	$("#nav li").each(function(i, val) {
		$(val).click(function() {
			selectTabIndex(i, true);
		});
		
		$(val).mousedown(function() {
			down[i] = true;
			pressDownOnTabIndex(i);
		});
		
		$(val).mouseup(function() {
			down[i] = false;
			releaseDownOnTabIndex(i);
		});
		
		$(val).mouseleave(function() {
			if (down[i] === true)
				releaseDownOnTabIndex(i);
		});
		
		$(val).mouseenter(function() {
			if (down[i] === true)
				pressDownOnTabIndex(i);
		});	
		
		val.addEventListener('touchstart', function(e) {
			down[i] = true;
			pressDownOnTabIndex(i);
		}, false);
		
		val.addEventListener('touchend', function(e) {
      down[i] = false;
      releaseDownOnTabIndex(i);
		}, false);
		
		val.addEventListener('touchcancel', function(e) {
      down[i] = false;
      releaseDownOnTabIndex(i);
		}, false);
	});
	
	$("#wrapper").mouseup(function() {
		down = [];
	});
	
});

setupMainSpring = function() {
	mainSpring.setSpringConfig(rebound.SpringConfig.fromQcTensionAndFriction(4.5, 5.7));
	
	mainSpring.addListener({	
	    onSpringUpdate: function (spring) {
    	// Progress from 0 to n
    	var progress = spring.getCurrentValue();

    	// Slide the tabs over
   		var xTranslation = transitionForProgressInSteps(progress,navOffsets);
   		
   		// Pixel snap when the spring is nearing rest on non-retina displays
   		if (Math.abs(spring.getVelocity()) < 0.05 && window.devicePixelRatio < 1.1)
   			xTranslation = Math.floor(xTranslation);
	   		
			nav.style['webkitTransform'] = 'translate3d(' + xTranslation + 'px, 0, 0)';
			nav.style['MozTransform'] = 'translate3d(' + xTranslation + 'px, 0, 0)';
			
			// Other transitions
			$("#slides li").each(function(i, val) {
				var slideProgress = 1 - Math.abs(progress - i);
				
				// Slide and scale the images
				if (slideProgress > 0) { // Only bother if the slide is visible
					// Slide and scale
					var x = (i * viewportWidth) - (progress * viewportWidth);
					
					// Filter the progress through an ease out curve and use that to control scaling
					var easeOutSlideProgress = (slideProgress < 1) ? slideProgress*(2-slideProgress) : 1;
					var scale = transitionForProgressInRange(easeOutSlideProgress,0.45,1.0);
					
					val.style['webkitTransform'] = 'translate3d(' + x + 'px, 0, 0) scale(' + scale +')';
					val.style['MozTransform'] = 'translate3d(' + x + 'px, 0, 0) scale(' + scale +')';
					
					// Fade in the caption when nearing rest
					if (i < captions.length) {
						var captionOpacity = transitionForProgressInRange(slideProgress,-8.0,1.0);
						captions[i].style['opacity'] = captionOpacity;
					}
				} 
								
				// Hide the off-screen images so they don't reveal themselves if you resize the browser
				val.style['opacity'] = (slideProgress > 0) ? 1.0 : 0.0;

				// Show the current tab as black, others grey
				var tabOpacity = transitionForProgressInRange(clampedProgress(slideProgress),0.25,1,0);
				tabs[i].style['opacity'] = tabOpacity;	
			});
		}        
	});
}

setupPanSupport = function() {
	var item = document.getElementById('slides');
	item.addEventListener('touchstart', function(e) {
		var touch = e.touches[0];
		startDragging(touch.pageX);
	}, false);
	
	item.addEventListener('touchmove', function(e) {
	    e.preventDefault(); // Stop vertical rubberbanding on iOS
	
		var touch = e.touches[0];	
		continueDragging(touch.pageX);
	}, false);
	
	item.addEventListener('touchend', function(e) {
		endTrackingInputMode("drag");
	}, false);
	
	item.addEventListener('touchcancel', function(e) {
		endTrackingInputMode("drag");
	}, false);
	
	item.addEventListener('mousedown', function(e) {
		startDragging(e.clientX);
	}, false);
	
	item.addEventListener('mousemove', function(e) {
		if (isDragging)
			continueDragging(e.clientX);
	}, false);
	
	item.addEventListener('mouseup', function(e) {
		endTrackingInputMode("drag");
	}, false);
	
	item.addEventListener('mouseleave', function(e) {
		if (isDragging)
			endTrackingInputMode("drag");
	}, false);
	
	window.addEventListener('wheel', function(e) {
    scrollWithVelocity(e.wheelDeltaX);
	}, false);
}

scrollWithVelocity = function(velocity) {
  var slip = 0.1; // Slow down scrolling so we don't have to do WoF
  var dampenedVelocity = velocity * slip;
  
  var previousVelocity = panVelocity;
  panVelocity = dampenedVelocity;
  
  // New scroll gesture when the difference between the current and previous velocity is greater than a certain amount
  var changeInVelocity = Math.abs((previousVelocity / slip) - velocity);
  var velocityDidSignificantlyChange = changeInVelocity > 300;
//      console.log("first frame. prev/slip: "+(previousVelocity / slip)+" delta: "+velocity+" total: "+changeInVelocity);
  if (velocityDidSignificantlyChange && (Math.abs(previousVelocity) > 0.001)) {
    console.log("new swipe");
  }
  
  
  if (shouldStartDetectingGesture) {
    shouldStartDetectingGesture = false;
    isCurrentlyDetectingGesture = true;
    
    endOfDetectionTimer = setTimeout(function() {
      isCurrentlyDetectingGesture = false;
      endTrackingInputMode("desktop-scroll");

      restartDetectionTimer = setTimeout(function() {
        shouldStartDetectingGesture = true;
      }, 1000);
    }, 150);
  }
  
  if (isCurrentlyDetectingGesture) {
    continueTrackingWithDelta(dampenedVelocity);
  }
}

startDragging = function(x) {
	lastX = x;
	isDragging = true;
	viewportWidth = $("#wrapper").innerWidth();
	mainSpring.setAtRest();
}

continueDragging = function(x) {
	panVelocity = x - lastX;
	lastX = x;
	
	continueTrackingWithDelta(panVelocity);
}

continueTrackingWithDelta = function(delta) {
  panVelocity = delta;

  var progress = progressForValueInRange(delta,0,-viewportWidth);
  
  var currentValue = mainSpring.getCurrentValue();
  
  // Rubberband when beyond the scroll boundaries
  if ((currentValue + progress) < 0 || (currentValue + progress) > tabs.length - 1)
  	progress *= 0.5;
  
  mainSpring.setCurrentValue(currentValue + progress);
  mainSpring.setAtRest();
}

endTrackingInputMode = function(inputMode) {
	var currentPosition = mainSpring.getCurrentValue();
	var startPosition = endValue;

	var positionDelta = currentPosition - startPosition;
	var swipingTowardsCurrentPage = (positionDelta > 0 && panVelocity > 0) || (positionDelta < 0 && panVelocity < 0);	
	var passedVelocityTolerance = (Math.abs(panVelocity) > 3);
	var passedDistanceTolerance = (Math.abs(positionDelta) > 0.3);
	
	if (inputMode == "desktop-scroll") {
	  passedDistanceTolerance = true;
	}
	
	var shouldAdvance = (passedDistanceTolerance || passedVelocityTolerance) && !swipingTowardsCurrentPage;
	var directionIsForward = (panVelocity <= 0);
	
	if (shouldAdvance) {
	  var targetIndex;
	  
	  if (currentPosition == startPosition) { // Current position is integral i.e. no tracking
      targetIndex = directionIsForward ? currentPosition + 1 : currentPosition - 1;
	  } else {
  	  targetIndex = directionIsForward ? Math.ceil(currentPosition) : Math.floor(currentPosition);
	  }
	  
		selectTabIndex(targetIndex, true);
	} else {
		selectTabIndex(startPosition, true);	    	
	}
	
	var normalizedVelocity = progressForValueInRange(panVelocity,0,-viewportWidth);
	mainSpring.setVelocity(normalizedVelocity * 30);
	panVelocity = 0;
	isDragging = false;
}

layoutCaptions = function() {
	var slideItems = $("#slides li");
	viewportWidth = slideItems.innerWidth();
	viewportHeight = slideItems.innerHeight();

	$(".caption").each(function(i, val) {
		captions[i] = val;

		var scale = calculateContentScaleForIndex(i);	

		var x = (viewportWidth / 2.0) + captionRightEdges[i] * scale;
		var y = ((viewportHeight / 2.0) - (captionBottomEdges[i] * scale)) * -1;
		
		var leftPadding = parseInt($(val).css("padding-left"), 10);	
		
		if (applyBottomPaddingToCaption[i]) {
			y -= leftPadding;
		}
		
		x = Math.round(x);
		y = Math.round(y);

		val.style['webkitTransform'] = 'translate3d(' + x + 'px, ' + y + 'px, 0)';	
		val.style['MozTransform'] = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
		
		captions[i].style.visibility = "visible";
	});
}

setupTabPressedStates = function() {
	downSpring.setSpringConfig(rebound.SpringConfig.fromQcTensionAndFriction(100, 5.5));
	
	downSpring.addListener({
		onSpringUpdate: function (spring) {
			var progress = spring.getCurrentValue();
			var scale = transitionForProgressInRange(progress,1.0,0.92);
			tabs[downIndex].style['webkitTransform'] = 'scale('+scale+')';
			tabs[downIndex].style['MozTransform'] = 'scale('+scale+')';
		}
	});
}

pressDownOnTabIndex = function(index) {
	downIndex = index;

	$("#nav li").each(function(i, val) {
		if (i === index) {
			downSpring.setEndValue(1);
		}
	});
}

releaseDownOnTabIndex = function(index) {
	$("#nav li").each(function(i, val) {
		if (i === index) {
			downSpring.setEndValue(0);
		}
	});
}

selectTabIndex = function(i, animated) {
	if (i < 0)
		i = 0;
	else if (i > tabs.length - 1)
		i = tabs.length - 1;


	  //控制播放
	  videos.forEach((sandbox,index)=>{
	  	if(i!=index) {
	  		sandbox.pause()
	  	} else {
	  		sandbox.play()
	  	}
	  })

	if (animated) {
		viewportWidth = $("#wrapper").innerWidth();
		endValue = i;
		mainSpring.setEndValue(i);
	} else {
		mainSpring.setCurrentValue(i);
	}
}

navOffsetForIndex = function(i) {
	if (i > 0) {
		var offset = (tabWidthRunningSum[i-1] + (tabWidths[i] / 2.0)) * -1;
	} else {
		var offset = ((tabWidths[i] / 2.0)) * -1;
	}
	return offset;
}

calculateTabWidths = function() {
	var totalWidth = 0;
	
	$("#nav li").each(function(i, val) {
	    tabWidths[i] = $(val).innerWidth();
	    tabWidthRunningSum[i] = tabWidths[i];
	    
	    if (i > 0) {
		    tabWidthRunningSum[i] = tabWidthRunningSum[i] + tabWidthRunningSum[i-1];
	    }
	    
	    totalWidth += tabWidths[i];
	});
	
	return totalWidth;
}

calculateContentScaleForIndex = function(i) {
	var contentWidth = imageWidths[i];
	var contentHeight = imageHeights[i];

	var scale = ((viewportWidth / viewportHeight) > (contentWidth / contentHeight)) ? (viewportHeight / contentHeight) : (viewportWidth / contentWidth);
	return scale;
}

setupArrowKeys = function() {
	var initialPress = true;
	var isRubberbanding = false;

	$(document).keydown(function(e){
		var currentIndex = endValue;
		var positionTolerance = 0.001;
		var maxRubberbandDistance = 0.03; // Normalized

	    if (e.keyCode == 37) { // Left arrow key
	    	var inRubberbandableRegion = mainSpring.getCurrentValue() < positionTolerance;
	    	
	    	if (inRubberbandableRegion && initialPress) {
	    		isRubberbanding = true;
	    		mainSpring.setEndValue(mainSpring.getCurrentValue() - maxRubberbandDistance);
	    	} 
	    	else if (!inRubberbandableRegion) {
	    		isRubberbanding = false;
	    		selectTabIndex(currentIndex - 1, true);
	    	}
	    }
	    
	    else if (e.keyCode == 39) { // Right arrow key
	    	var inRubberbandableRegion = mainSpring.getCurrentValue() > ((tabs.length - 1) - positionTolerance);
	    
			if (inRubberbandableRegion && initialPress) {
				isRubberbanding = true;
				mainSpring.setEndValue(mainSpring.getCurrentValue() + maxRubberbandDistance);
			} 
			else if (!inRubberbandableRegion) {
				isRubberbanding = false;
				selectTabIndex(currentIndex + 1, true);
			}
	    }
	    
	    initialPress = false;
	});

	// When rubberbanding, snap back to the correct rest value on key up
	$(document).keyup(function(e){
		var currentIndex = endValue;
		
		if (e.keyCode == 37 && isRubberbanding) { // Left arrow key
			selectTabIndex(currentIndex - 1, true);
		}
		else if (e.keyCode == 39 && isRubberbanding) { // Right arrow key
			selectTabIndex(currentIndex + 1, true);
		}
		
		isRubberBanding = false;
		initialPress = true;
	});
}

// Utilities

progressForValueInRange = function(value, startValue, endValue) {
	return (value - startValue) / (endValue - startValue);
}

transitionForProgressInRange = function(progress, startValue, endValue) {
	return startValue + (progress * (endValue - startValue));
}

clampedProgress = function(progress) {
	if (progress < 0)
		progress = 0;
	else if (progress > 1)
		progress = 1;
		
	return progress;
}

// Progress: Float value from 0 - # of steps
// Steps: Array of step values 
//
// Example:
// Progress: 1.5, Steps: 100, 200, 250, Result: 225

transitionForProgressInSteps = function(progress, steps) {
	var transition = -1;
	
	// Bail if there's fewer than two steps
	if (steps.length < 2) { return transition };
	
	// If the progress is before the beginning of the range, extrapolate from the first and second steps.
	if (progress < 0) {
		transition = transitionForProgressInRange(progress, steps[0], steps[1]);
	}

	// If the progress is after the end of the range, extrapolate from the second last and last steps.
	else if (progress > (steps.length - 1)) {
		normalizedProgress = progressForValueInRange(progress, Math.floor(progress), Math.floor(progress)+1);
		normalizedProgress = normalizedProgress + 1;
		transition = transitionForProgressInRange(normalizedProgress, steps[(steps.length - 2)], steps[(steps.length - 1)]);
	}
	
	// Supress potential NaNs
	else if (progress == (steps.length - 1) || progress == 0) {
		transition = steps[progress];
	}
	
	// Otherwise interpolate between steps
	else {
		normalizedProgress = progressForValueInRange(progress, Math.floor(progress), Math.floor(progress)+1);
		transition = transitionForProgressInRange(normalizedProgress, steps[Math.floor(progress)], steps[Math.floor(progress)+1]);
	}
	
	return transition;
}