if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += "no-touch";
}


// ######  add bubble event
function addChatScene(){
	addBubble();
	$('#mask').addClass('scrolled-mask');
}

function removeChatScene(){
	$("#mask")[0].style.display = 'none'; 
	$("#messages")[0].style.display = 'none'; 
}


var cleanBubble = function(){
  $('body')[0].style.overflow = 'scroll'; 
	hasRemoveBubble = true;
	$('#messages').addClass('scrolled-message');
	$('#mask').removeClass('scrolled-mask');
	$('#olsite')[0].style.display = 'block'
	setTimeout('removeChatScene()', 1000);
}



// ######  add bubble function
var addBubble = function() {

  var messagesEl = document.querySelector('.messages');
  var typingSpeed = 20;
  var loadingText = '<b>•</b><b>•</b><b>•</b>';
  var messageIndex = 0;

  // var getCurrentTime = function() {
  //   var date = new Date();
  //   var hours =  date.getHours();
  //   var minutes =  date.getMinutes();
  //   var current = hours + (minutes * .01);
  //   if (current >= 5 && current < 19) return 'Have a nice day';
  //   if (current >= 19 && current < 22) return 'Have a nice evening';
  //   if (current >= 22 || current < 5) return 'Have a good night';
  // }

  var messages = [
    '你好！ 🎉 ',
    '我是 Martin',
    '如果你看完了这些项目，<br>对我的业余项目仍感兴趣的话',
    '欢迎来我的 👉<a href="http://www.martinrgb.com/" target="blank">旧站</a>👈 参观 <br> 或者 <a id="continue" href="javascript:void(0)" onclick="cleanBubble()"> 继续 </a>浏览 ',
    // 'I\'m currently accepting freelance work.<br> You can contact me at <a href="mailto:hello@julian.gr">hello@julian.gr</a>',
    // '<a target="_blank" href="https://twitter.com/juliangarnier">twitter.com/juliangarnier</a><br><a target="_blank" href="https://codepen.io/juliangarnier">codepen.io/juliangarnier</a><br><a target="_blank" href="https://github.com/juliangarnier">github.com/juliangarnier</a>',
    // getCurrentTime(),
    // '👀 J.'
  ]

  var getFontSize = function() {
    return parseInt(getComputedStyle(document.body).getPropertyValue('font-size'));
  }

  var pxToRem = function(px) {
    return px / getFontSize() + 'rem';
  }

  var createBubbleElements = function(message, position) {
    var bubbleEl = document.createElement('div');
    var messageEl = document.createElement('span');
    var loadingEl = document.createElement('span');
    bubbleEl.classList.add('bubble');
    bubbleEl.classList.add('is-loading');
    // bubbleEl.classList.add('cornered');
    bubbleEl.classList.add(position === 'right' ? 'right' : 'left');
    messageEl.classList.add('message');
    loadingEl.classList.add('loading');
    messageEl.innerHTML = message;
    loadingEl.innerHTML = loadingText;
    bubbleEl.appendChild(loadingEl);
    bubbleEl.appendChild(messageEl);
    bubbleEl.style.opacity = 0;
    return {
      bubble: bubbleEl,
      message: messageEl,
      loading: loadingEl
    }
  }

  var getDimentions = function(elements) {
    return dimensions = {
      loading: {
        w: '4rem',
        h: '2.25rem'
      },
      bubble: {
        w: pxToRem(elements.bubble.offsetWidth + 4),
        h: pxToRem(elements.bubble.offsetHeight)
      },
      message: {
        w: pxToRem(elements.message.offsetWidth + 4),
        h: pxToRem(elements.message.offsetHeight)
      }
    }
  }

  var sendMessage = function(message, position) {
    var loadingDuration = (message.replace(/<(?:.|\n)*?>/gm, '').length * typingSpeed) + 300;
    var elements = createBubbleElements(message, position);
    messagesEl.appendChild(elements.bubble);
    messagesEl.appendChild(document.createElement('br'));
    var dimensions = getDimentions(elements);
    elements.bubble.style.width = '0rem';
    elements.bubble.style.height = dimensions.loading.h;
    elements.message.style.width = dimensions.message.w;
    elements.message.style.height = dimensions.message.h;
    elements.bubble.style.opacity = 1;
    var bubbleOffset = elements.bubble.offsetTop + elements.bubble.offsetHeight;
    if (bubbleOffset > messagesEl.offsetHeight) {
      var scrollMessages = anime({
        targets: messagesEl,
        scrollTop: bubbleOffset,
        duration: 750
      });
    }
    var bubbleSize = anime({
      targets: elements.bubble,
      width: ['0rem', dimensions.loading.w],
      marginTop: ['0.0rem', 0],
      marginLeft: ['-2.5rem', 0],
      duration: 800,
      easing: 'easeOutElastic'
    });
    var loadingLoop = anime({
      targets: elements.bubble,
      scale: [1.05, .95],
      duration: 1100,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad'
    });
    var dotsStart = anime({
      targets: elements.loading,
      translateX: ['-2rem', '0rem'],
      scale: [.5, 1],
      duration: 400,
      delay: 25,
      easing: 'easeOutElastic',
    });
    var dotsPulse = anime({
      targets: elements.bubble.querySelectorAll('b'),
      scale: [1, 1.25],
      opacity: [.5, 1],
      duration: 300,
      loop: true,
      direction: 'alternate',
      delay: function(i) {return (i * 100) + 50}
    });
    setTimeout(function() {
      loadingLoop.pause();
      dotsPulse.restart({
        opacity: 0,
        scale: 0,
        loop: false,
        direction: 'forwards',
        update: function(a) {
          if (a.progress >= 65 && elements.bubble.classList.contains('is-loading')) {
            elements.bubble.classList.remove('is-loading');
            anime({
              targets: elements.message,
              opacity: [0, 1],
              duration: 300,
            });
          }
        }
      });
      bubbleSize.restart({
        scale: 1,
        width: [dimensions.loading.w, dimensions.bubble.w ],
        height: [dimensions.loading.h, dimensions.bubble.h ],
        marginTop: 0,
        marginLeft: 0,
        begin: function() {
          // if (messageIndex <= messages.length) elements.bubble.classList.remove('cornered');
        }
      })
    }, loadingDuration - 50);
  }

  var sendMessages = function() {
    var message = messages[messageIndex];
    if (!message) return;
    sendMessage(message);
    ++messageIndex;
    ++mIndex;
    setTimeout(sendMessages, (message.replace(/<(?:.|\n)*?>/gm, '').length * typingSpeed) + anime.random(900, 1200));
  }

  sendMessages();

}


var hasBubble,hasRemoveBubble = false;
var mIndex = 0;
var scrollTop = 0;

// ######  on Ready
$(document).ready(function(){
    removeChatScene()


	// ######  on Scroll
	$(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    
		$('.counter').html(scrollTop);
		console.log(scrollTop)
		if (scrollTop >= 100) {
			$('#nav').addClass('scrolled-nav');
			$('#logo').addClass('scrolled-logo');
			$('#logo-span').addClass('scrolled-span');
			$('#logo-colorful').addClass('scrolled-color');
			$('#olsite').addClass('scrolled-olsite');
		} else if (scrollTop < 100) {
			$('#nav').removeClass('scrolled-nav');
			$('#logo').removeClass('scrolled-logo');
			$('#logo-span').removeClass('scrolled-span');
			$('#logo-colorful').removeClass('scrolled-color');
			$('#olsite').removeClass('scrolled-olsite');

    } 
    
    if(scrollTop + $(window).height() > ($(document).height() - 50) && !hasBubble)  {
      $("#mask")[0].style.display = 'block'; 
      $("#messages")[0].style.display = 'block'; 
      hasBubble = true;
      $('body')[0].style.overflow = 'hidden'; 
      setTimeout('addChatScene()', 1000);

    }

		// if($(window).width() > 1225){

		// 	if(scrollTop >= 450 && !hasBubble){

		// 		$("#mask")[0].style.display = 'block'; 
		// 		$("#messages")[0].style.display = 'block'; 
		// 		hasBubble = true;
    //     $('body')[0].style.overflow = 'hidden'; 
		// 		setTimeout('addChatScene()', 1000);

		// 	}

		// 	if(mIndex == 4 && scrollTop < 450 && !hasRemoveBubble){
		// 		cleanBubble();
		// 	}

		// }

		// else if($(window).width() > 790){
		// 	if(scrollTop >= 1060 && !hasBubble){

		// 		$("#mask")[0].style.display = 'block'; 
		// 		$("#messages")[0].style.display = 'block'; 
		// 		hasBubble = true;
    //     $('body')[0].style.overflow = 'hidden'; 
		// 		setTimeout('addChatScene()', 1000);

		// 	}

		// 	if(mIndex == 4 && scrollTop < 1060 && !hasRemoveBubble){
		// 		cleanBubble();
		// 	}
		// }

		
	}); 

});



