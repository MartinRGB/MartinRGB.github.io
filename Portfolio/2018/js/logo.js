var Logo = {};
(function () {
    var colorAnimation = null;
    var goalColor;
    var currentColor = [1.0, 1.0, 1.0, 0.0];
    var nextColor = null;
    var allObjects = null;
    var getObjects = function () {
        if (!allObjects) {
            var array = [];
            var getSVG = function (element) {
                for (var i = 0; i < element.childNodes.length; i++) {
                    var child = element.childNodes[i];
                    if (child.nodeName == "svg") {
                        array.push(child);
                    } else if (child.childNodes && child.childNodes.length > 0) {
                        getSVG(child);
                    }
                }
            }
            var nav = document.getElementsByClassName("navbar")[0];
            getSVG(nav);
            var logoSVGs = MKjTools.SVG.getChildrenOfSVGWithID("logo");
            var nonLogoSVGs = [];
            for (var i = 0; i < array.length; i++) {
                var SVG = array[i];
                nonLogoSVGs = nonLogoSVGs.concat(MKjTools.SVG.getChildrenOfSVG(SVG));
            }
            allObjects = [logoSVGs, nonLogoSVGs];
        }
    };

    Logo.lerpToColor = function (color, lock) {
        if (lock === 'lock') {
            this.__locked = true;
        } else if (lock === 'unlock') {
            this.__locked = false;
        } else {
            if (this.__locked) return;
        }

        //return;
        if (goalColor == color) {
            nextColor = null;
            return;
        }
        if (colorAnimation) {
            nextColor = color;
            return;
        }
        getObjects();
        goalColor = color;

        if (colorAnimation) {
            colorAnimation.pause();
        }

        var targetColor = MKjAnimate.CSS.rgbStringToArray(color);

        var cArray = [MKjTools.shuffledCopy(allObjects[0]), MKjTools.shuffledCopy(allObjects[1])];

        colorAnimation = MKjAnimate.animate(function (animation) {

            var progress = animation.progress;

            for (var j = 0; j < cArray.length; j++) {
                var subArray = cArray[j];
                for (var index = 0, len = subArray.length; index < len; ++index) {
                    var p = MKRemap.splitFactorForNumber(index, subArray.length, 0.8, progress);
                    p = MKRemap.bezierEaseOut(p);
                    var c = MKjMath.lerp(currentColor, targetColor, p);
                    var ob = subArray[index];
                    var useFill = ob.getAttribute("fill");
                    var attribute = "fill";
                    if (useFill == "none") {
                        attribute = "stroke";
                    } else {
                        ob.setAttribute("stroke", "none");
                    }

                    ob.setAttribute(attribute, MKjAnimate.CSS.arrayToRGBAString(c));

                }
            }

            if (progress == 1.0) {
                currentColor = targetColor;
                colorAnimation = null;
                if (nextColor) {
                    Logo.lerpToColor(nextColor);
                }
            }
        }, 0.5, 0);


    }
} ())

