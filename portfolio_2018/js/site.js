var site = {};


(function () {

    var dynamicAnimation = null;
    var lastScroll = 0;
    var scrollDistance = 0;
    var needsLogo = true;

    function addSpinnerToNode(node, inVertical) {
        if (inVertical) {
            var container = document.createElement('div');
            container.classList.add("verticalCenter");
            node.append(container);
            node = container;
        }
        var spinner = document.createElement('img');
        spinner.src = "images/spinner.png";
        spinner.classList.add("spinner");
        node.append(spinner);
        return spinner;
    }

    function loadiFrameOnClick(image) {

        image.onclick = function () {
            image.onclick = null;

            var iFrameSource = null;
            if (iFrameSource = image.getAttribute("data-src")) {
                var iFrame = document.createElement('iframe');
                iFrame.src = iFrameSource;
                var frameID = /player_id=(.*)$/g.exec(iFrame.src);
                if (frameID && frameID.length > 1) {
                    frameID = frameID[1];
                }
                iFrame.id = frameID;


                iFrame.setAttribute('allowFullScreen', '');
                iFrame.setAttribute('webkitallowfullscreen', '');
                iFrame.setAttribute('frameborder', '0');
                iFrame.onload = function () {
                    image.parentNode.remove();

                    if (!Browser.isMobile) {
                        var n = iFrame.src.search("vimeo");
                        if (n != -1) {
                            var player = $f(iFrame);
                            player.addEvent('ready', function () {
                                player.api("play");
                            });
                        }
                    }

                };
                image.parentNode.parentNode.insertBefore(iFrame, image.parentNode);

                for (var i = 0; i < image.parentNode.childNodes.length; i++) {
                    if (image.parentNode.childNodes[i].className == "verticalCenter") {
                        image.parentNode.childNodes[i].firstChild.remove();
                        addSpinnerToNode(image.parentNode.childNodes[i]);
                    }
                }

            }
        }
        if (Browser.isMobile) {
            MKjTools.addVisibilityTrigger(image, function () {
                image.onclick();
            });
        }
    }


    function loadyLazyObjects() {
        var frames = window.document.getElementsByClassName("lazyLoad");
        for (var index = 0; index < frames.length; index++) {
            var f = frames[index];
            var add = function (addMe) {
                if (Browser.isMobile && addMe.parentNode.classList.contains("videoImageStandin")) {

                } else {
                    MKjTools.addVisibilityTrigger(addMe, function () {
                        var spinner = null;
                        if (addMe.nodeName == "IFRAME") {
                            spinner = addSpinnerToNode(addMe.parentNode, true);

                            addMe.onload = function () {
                                addMe.classList.remove("lazyLoad");
                                if (spinner) {
                                    spinner.remove();
    
    
                                }
                            };
                            addMe.setAttribute("src", addMe.attributes["data-src"].value);
                        }

                        if (addMe.nodeName == "IMG") {
                            spinner = addSpinnerToNode(addMe.parentNode, true);


                            addMe.onload = function () {
                                addMe.classList.remove("lazyLoad");
                                if (spinner) {
                                    spinner.remove();
    
    
                                }
                            };
                            addMe.setAttribute("src", addMe.attributes["data-src"].value);
                        }

                        if (addMe.nodeName == "VIDEO") {


                            if(addMe.parentNode.className == "plyr__video-wrapper"){

                                spinner = addSpinnerToNode(addMe.parentNode.parentNode.parentNode, true);

                                addMe.parentNode.parentNode.style.opacity = 0;
                                addMe.oncanplay = function () {
                                    addMe.classList.remove("lazyLoad");
                                    if (spinner) {
                                        spinner.remove();
                                        addMe.parentNode.parentNode.style.opacity = 1;
                                    }
    
    
                                    //addMe.play();
                                };
    
                            }
                            else{

                                spinner = addSpinnerToNode(addMe.parentNode, true);

                                addMe.oncanplay = function () {
                                    addMe.classList.remove("lazyLoad");
                                    if (spinner) {
                                        spinner.remove();
        
                                    }


                                    addMe.play();
                                };

                            }



                            var sourceMP4 = document.createElement("source"); 
                            sourceMP4.type = "video/mp4";
                            // sourceMP4.src = "videos/mt_player.mp4";
                            addMe.appendChild(sourceMP4);
                            sourceMP4.setAttribute("src", addMe.attributes["data-src"].value);
                        }


                    });
                }


            };
            add(f);

            //console.log("f.data-src", f.attributes["data-src"].value);;
        }

    }
    function addLazyButtonLoader() {
        var buttons = window.document.getElementsByClassName("lazyButton");
        for (var i = 0, len = buttons.length; i < len; i++) {
            loadiFrameOnClick(buttons[i]);
        }
    }

    function addVideoPlayManagement() {

        var videos = window.document.getElementsByClassName("managedVideo");
        var lastScroll = 0;
        var visibilityTrigger = function () {
            var scroll = window.pageYOffset || document.documentElement.scrollTop;
            var downScroll = scroll > lastScroll;
            lastScroll = scroll;

            var inView = [];
            for (var i = 0, len = videos.length; i < len; i++) {
                var v = MKjMath.visibilityPercentage(videos[i]);
                if (v >= 1.0) {
                    inView.push(videos[i]);
                } else {
                    videos[i].pause();
                }
            }
            if (inView.length == 1) {
                inView[0].play();
            } else {
                var highE = [];
                var lowE = [];
                var highest = 0;
                var lowest = 1000000000;
                for (var i = 0, len = inView.length; i < len; i++) {
                    var v = inView[i];
                    var elementBox = v.getBoundingClientRect();
                    var m = elementBox.top + elementBox.height * 0.5;
                    if (m >= highest) {
                        if (m == highest) {
                            highE.push(v);
                        } else {
                            highE = [v];
                        }
                        highest = m;
                    }
                    if (m <= lowest) {
                        if (m == lowest) {
                            lowE.push(v);
                        } else {
                            lowE = [v];
                        }
                        lowest = m;
                    }
                }
                var active = downScroll ? highE : lowE;

                for (var i = 0, len = inView.length; i < len; i++) {
                    var v = inView[i];
                    if (active.indexOf(v) != -1) {
                        v.play();
                    } else {
                        v.pause();
                    }
                }
            }

        };
        window.addEventListener("scroll", visibilityTrigger);
        visibilityTrigger();

    }

    function addColorAnimations() {
        var frame = document.getElementById("logoSVG");
        var elements = window.document.body.getElementsByClassName("topBarColorChange");

        var addTrigger = function (element) {
            var visibilityTrigger = function () {
                if (frame) {
                    var frameBox = frame.getBoundingClientRect();
                    var elementBox = element.getBoundingClientRect();
                    if (elementBox.top < frameBox.bottom && elementBox.bottom > frameBox.bottom || needsLogo) {
                        var color = element.getAttribute("topbarColor");
                        needsLogo = false;
                        if (Browser.isMobile) {
                            var mobileColor = null;
                            if (mobileColor = element.getAttribute("topbarColorMobile")) {
                                color = mobileColor;
                            }
                        }
                        Logo.lerpToColor(color)
                    }
                    ;
                }
            };
            window.addEventListener("scroll", visibilityTrigger);
            visibilityTrigger();
        }

        for (var i = 0, len = elements.length; i < len; i++) {
            addTrigger(elements[i]);
        }
    }
    function loaded() {
        loadyLazyObjects();
        addLazyButtonLoader();
        addColorAnimations();
        addVideoPlayManagement();

        if(window.innerWidth < 992){
            setTimeout(function(){
                window.dispatchEvent(new Event('resize'));
             },1000)
        }


    }

    function timeout(ms) {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, ms, 'done');
        });
      }
      

    function onScroll() {

        if (Browser.isMobile) {
            if (!dynamicAnimation) {
                var nav = window.document.body.getElementsByClassName("navbar")[0];
                dynamicAnimation = new MKjAnimate.DynamicAnimation(nav, { "property": "translateY" });
                dynamicAnimation.currentValue = [0];
                dynamicAnimation.momentumRetentionFactor = 0.6;
                dynamicAnimation.targetConvergenceFactor = 0.07;
            }

            var cScroll = document.body.scrollTop;
            scrollDistance += cScroll - lastScroll;
            lastScroll = cScroll;
            if (scrollDistance < -30 || cScroll <= 1) {
                dynamicAnimation.targetValue = [0];
                scrollDistance = 0;
            } else if (scrollDistance > 30) {
                scrollDistance = 0;
                dynamicAnimation.targetValue = [-100];
            }

        }

    }

    window.addEventListener("scroll", onScroll);

    window.addEventListener("load", loaded);


    window.openArticle = function(articleInfo) {
        if (window._articleEl) {
            window._articleEl.remove();
        }

        window._articleEl = document.createElement('div');
        const el = window._articleEl;
        const anchor = document.getElementsByTagName('nav')[0].nextElementSibling;
        el.className = 'article-container';
        document.body.insertBefore(el, anchor);
        Logo.lerpToColor('rgba(0, 0, 0, 1)', 'lock');
        document.body.style.overflowY = 'hidden';
        // history.pushState('', '', '/article');



        const logo = document.getElementById("logo");
        const back_btn = document.getElementById("back-btn");
        logo.style.display = 'none';
        back_btn.style.display = 'block';


        if(window.innerWidth < 992){

            const navBar = document.getElementById("nav-bar");
            navBar.setAttribute('style', 'background-color:transparent !important');
        }

        var i = 0;
        

        articleInfo && articleInfo.forEach(e => {


            i++;

            if(e.id == 'title'){

                const container = document.createElement('div');
                container.className = 'pageHeader';

                const section = document.createElement('section');
                section.className = 'article-section container';
                container.appendChild(section)
                
                const media = document.createElement('div');
                media.className = 'col-md-4 centerContent';
                media.innerHTML = '<h2>' + e.title + '</h2>';
    
                const content = document.createElement('div');
                content.className = 'col-md-6';
                content.innerHTML = '<div class="textBox">' + '<p>' + e.description + '</p>' +  '</div>';
                
                section.appendChild(media);
                section.appendChild(content);
    
                const hr = document.createElement('hr');
                el.appendChild(container);

            }

            if(e.id == 'left'){

                const container = document.createElement('div');

                const section = document.createElement('section');
                section.className = 'article-section container';
                container.appendChild(section);
                
                const media = document.createElement('div');
                media.className = 'col-md-6 centerContent height600';
                media.innerHTML = e.media;
    
                const content = document.createElement('div');
                content.className = 'col-md-6 height600';
                content.innerHTML = '<div class="verticalCenterBig width100">' + e.content + '</div>';

                section.appendChild(media);
                section.appendChild(content);
    
                el.appendChild(container);
            }

            if(e.id == '84left'){

                const container = document.createElement('div');

                const section = document.createElement('section');
                section.className = 'article-section container';
                container.appendChild(section);
                
                const media = document.createElement('div');
                media.className = 'col-md-8 centerContent height600';
                media.innerHTML = e.media;
    
                const content = document.createElement('div');
                content.className = 'col-md-4 height600';
                content.innerHTML = '<div class="verticalCenterBig width100">' + e.content + '</div>';

                section.appendChild(media);
                section.appendChild(content);
    
                el.appendChild(container);
            }
            

            if(e.id == 'right'){
                const container = document.createElement('div');
                container.style.backgroundColor = '#eaeaea'

                const section = document.createElement('section');
                section.className = 'article-section container';
                container.appendChild(section);
                
                const media = document.createElement('div');
                media.className = 'col-md-6 centerContent height600 col-md-push-4';
                media.innerHTML = e.media;
    
                const content = document.createElement('div');
                content.className = 'col-md-6 height600 col-md-pull-4';
                content.innerHTML = '<div class="verticalCenterBig width100">' + e.content + '</div>';

                section.appendChild(media);
                section.appendChild(content);
    
                el.appendChild(container);
            }

            if(e.id == '48right'){
                const container = document.createElement('div');

                const section = document.createElement('section');
                section.className = 'article-section container';
                container.appendChild(section);
                
                const media = document.createElement('div');
                media.className = 'col-md-8 centerContent height600 col-md-push-4';
                media.innerHTML = e.media;
    
                const content = document.createElement('div');
                content.className = 'col-md-4 height600 col-md-pull-8';
                content.innerHTML = '<div class="verticalCenterBig width100">' + e.content + '</div>';

                section.appendChild(media);
                section.appendChild(content);
    
                el.appendChild(container);
            }

            if(e.id == 'double'){
                const container = document.createElement('div');

                const section = document.createElement('section');
                section.className = 'article-section container';
                container.appendChild(section);
                
                const media = document.createElement('div');
                media.className = 'col-md-6 centerContent height600';
                media.innerHTML = e.media;
    
                const content = document.createElement('div');
                content.className = 'col-md-6 centerContent height600';
                content.innerHTML = e.content;

                section.appendChild(media);
                section.appendChild(content);
    
                el.appendChild(container);
            }

            if(e.id == 'fullscreen'){

                const container = document.createElement('div');
                container.style.backgroundColor = 'rgb(41, 43, 47)'

                const section = document.createElement('section');
                section.className = 'article-section container black_container';
                container.appendChild(section);

                const centerContainer = document.createElement('div');
                centerContainer.className = 'centerContent';
                section.appendChild(centerContainer);
                
                const media = document.createElement('div');
                // media.className = 'col-md-6 centerContent height600 col-md-push-6';
                media.innerHTML = e.media;
    
                const content = document.createElement('div');
                // content.className = 'col-md-6 height600 col-md-pull-6';
                content.innerHTML = '<div class="textBox centerTextBox">' + e.content + '</div>';

                centerContainer.appendChild(media);
                centerContainer.appendChild(content);
    
                el.appendChild(container);
            }

            if(e.id == 'iframe'){

                const container = document.createElement('div');
                container.className = 'article-section container iframe_container';
                
                const media = document.createElement('div');
                // media.className = 'col-md-6 centerContent height600 col-md-push-6';
                media.innerHTML = e.media;
                container.appendChild(media);

                const centerContainer = document.createElement('div');
                container.appendChild(centerContainer);
    
                const content = document.createElement('div');
                // content.className = 'col-md-6 height600 col-md-pull-6';
                content.innerHTML = '<div class="textBox centerTextBox">' + e.content + '</div>';
                centerContainer.appendChild(content);


                el.appendChild(container);




            }
        });




    }

    window.onpopstate = function() {
        closeArticle();
    }

    window.closeArticle = function() {
        if (window._articleEl) {
            window._articleEl.remove();
            Logo.lerpToColor('rgba(255, 255, 255, 1)', 'unlock');
            setTimeout(function() {
                window.scrollBy(0, 1);
            }, 0);
            document.body.style.overflowY = '';

            const logo = document.getElementById("logo");
            const back_btn = document.getElementById("back-btn");
            logo.style.display = 'block';
            back_btn.style.display = 'none';

            if(window.innerWidth < 992){

                const navBar = document.getElementById("nav-bar");
                navBar.setAttribute('style', 'background-color:#000 !important');
            }
        }
    }
}());
