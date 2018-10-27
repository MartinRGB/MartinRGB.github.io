var Browser = {
    _internal: function () {

        var ua = navigator.userAgent, tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR\/(\d+)/)
            if (tem != null) return 'Opera ' + tem[1];
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);

        this.browser = M.join(' ');
    }(),

    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

    type: browser.split(" ")[0],
    version: this.browser.split(" ")[1],
    isIE: this.type === "IE",
    isChrome: this.type === "Chrome",
    isFireFox: this.type === "Firefox",
    isSafari: this.type === "Safari",

};

var MKjAnimate = {

    _internal: function () {
        var AnimatorBuilder = function () {
            function Timer(call) {
                var running = false;
                var RAF = false;
                var needsPause = false;
                var me = this;
                var call = call;
                var canceller;
                var caller;
                var determineCallback = function () {

                    caller = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;

                    if (caller) {
                        RAF = true;
                        canceller = window.cancelAnimationFrame || window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame;
                    } else {
                        RAF = false;
                        caller = function (callback) {
                            return setInterval(callback);
                        };
                        canceller = function (id) {
                            clearInterval(id);
                        };
                    }

                };
                determineCallback();

                this.pause = function () {
                    if (running) {
                        running = false;
                        canceller(me.id);
                        needsPause = true;

                    }
                }

                this.resume = function () {
                    needsPause = false;
                    if (!running) {
                        running = true;
                        var c = function () {
                            call();
                            if (RAF && !needsPause) {
                                caller(c);
                            }
                        };
                        me.id = caller(c);
                    }
                };

            }

            var running = false;
            var lastTime;
            this.animations = [];
            var me = this;
            var id;
            var removeMe = [];
            var updating = false;

            var alreadyRegistered = function (ob) {

                for (var i = 0, len = me.animations.length; i < len; i++) {
                    if (ob === me.animations[i]) return true;
                }
                return false;
            };

            var addIfNotExistent = function (ob) {

                if (!alreadyRegistered(ob)) {
                    me.animations.push(ob);
                    lastTime = null;
                    timer.resume();
                };
            };

            this.register = function (animation) {
                addIfNotExistent(animation);
            }
            this.deregister = function (animation) {

                if (!animation.allowRemoval) {
                    return;
                }

                if (updating) {
                    var i = removeMe.indexOf(animation);
                    if (i == -1) {
                        removeMe.push(animation);
                    }
                } else {
                    var i = me.animations.indexOf(animation);
                    if (i != -1) {
                        me.animations.splice(i, 1);
                    }
                }

            }

            var accumulator = 0.0;
            var lastTimeUpdate = 0.0;

            var tick = function () {

                if (!lastTime) {
                    lastTime = new Date();
                    lastTimeUpdate = lastTime;
                }

                var now = new Date();
                dt = (now - lastTime) * 0.001;
                lastTime = now;

                accumulator += dt;

                if (accumulator <= 1.0 / 60.0) {
                    return;
                }

                accumulator -= 1.0 / 60.0;
                dt = (now - lastTimeUpdate) * 0.001;
                lastTimeUpdate = now;

                if (dt == 0) return;

                //regular updates

                updating = true;

                for (var i = 0, len = me.animations.length; i < len; i++) {
                    var ani = me.animations[i];
                    if (!ani.paused) {
                        ani.update(dt);
                    } else if (ani.allowRemoval) {

                        removeMe.push(ani);
                    }
                }

                updating = false;

                //post update, some animations might wish to delay writing their results

                for (var i = 0, len = me.animations.length; i < len; i++) {
                    var ani = me.animations[i];
                    if (ani.postUpdate) {
                        ani.postUpdate();
                    }
                }

                //remove animations that are done

                for (var i = 0, len = removeMe.length; i < len; i++) {
                    me.deregister(removeMe[i]);
                }

                removeMe = [];

                if (me.animations.length == 0) {

                    timer.pause();
                }

            };

            var timer = new Timer(tick);


            this.MKjPropertyCSSOpacity = function () {

                this.write = function (value, object) {
                    CSS.genericWrite(object, "opacity", value);
                };

                this.read = function (value, object) {
                    CSS.genericRead(object, "opacity", value);
                };
                this.convergenceThreshold = 0.01;
            };

            this.MKjPropertyCSSBackgroundColor = function () {
                this.write = function (value, object) {
                    CSS.genericWrite(object, "background-color", "rgb(" + Math.round(value[0].toString()) + "," + Math.round(value[1].toString()) + ", " + Math.round(value[2].toString()) + ")");
                };
                this.read = function (value, object) {
                    return CSS.genericRead(object, "opacity", value);
                };
                this.convergenceThreshold = 0.1;
            };

            this.MKjPropertyCSSTransformScale = function () {

                var me = this;
                this.makePropertyString = function (value, object) {
                    return "scale(" + value.toString() + ")";
                };

                this.write = function (value, object) {
                    CSS.genericWrite(object, CSS.normalizeProperty("transform"), this.makePropertyString(value, object));
                };

                this.convergenceThreshold = 0.004;
            };


            this.MKjPropertyCSSPositionLeft = function () {
                var me = this;

                this.makePropertyString = function (value, object) {
                    return +value.toString() + "px";
                };

                this.write = function (value, object) {
                    CSS.genericWrite(object, "left", me.makePropertyString(value, object));

                };

                this.convergenceThreshold = 0.1;
            };
this.MKjPropertyCSSTransformTranslateY = function () {
                var me = this;

                this.makePropertyString = function (value, object) {
                    return "translateY(" + value.toString() + "px)";
                };

                this.write = function (value, object) {
                    CSS.genericWrite(object, CSS.normalizeProperty("transform"), me.makePropertyString(value, object));

                };

                this.convergenceThreshold = 0.01;
            };
            this.MKjPropertyCSSTransformTranslateX = function () {
                var me = this;

                this.makePropertyString = function (value, object) {
                    return "translateX(" + value.toString() + "px)";
                };

                this.write = function (value, object) {
                    CSS.genericWrite(object, CSS.normalizeProperty("transform"), me.makePropertyString(value, object));

                };

                this.convergenceThreshold = 0.01;
            };
            this.MKjPropertyCSSTransformTranslateXY = function () {
                var me = this;

                this.makePropertyString = function (value, object) {
                    return "translate(" + value[0].toString() + "px, " + value[1].toString() + "px)";
                };

                this.write = function (value, object) {
                    CSS.genericWrite(object, CSS.normalizeProperty("transform"), me.makePropertyString(value, object));

                };

                this.convergenceThreshold = 0.5;
            };




            this.Value = {
                length: function (a) {
                    var count = 0.0;
                    for (var i = 0, len = a.length; i < len; i++) {
                        count += a[i] * a[i];
                    }
                    return Math.sqrt(count);
                },
                sub: function (a, b) {
                    for (var i = 0, len = a.length; i < len; i++) {

                        a[i] -= b[i];
                    }
                },
                add: function (a, b) {
                    for (var i = 0, len = a.length; i < len; i++) {
                        a[i] += b[i];
                    }
                },
                mult: function (a, b) {
                    for (var i = 0, len = a.length; i < len; i++) {
                        a[i] *= b;
                    }
                }
            };
        };



        this.Animator = new AnimatorBuilder;
    }(),



    CSS: {

        genericWrite: function (ob, property, string) {
            ob.style[property] = string;

        },
        genericRead: function (ob, property, value) {
            var style = window.getComputedStyle(ob);
            value[0] = ob.style[property];
        },

        setHardwareAccelerationOnForObject: function (ob) {
            if (ob.hasHAon) return;
            ob.hasHAon = true;
            ob.style[CSS.normalizeProperty("transform")] += "translate3d(0,0,0)";
        },

        setClipPathForObject: function (ob, path) {
            ob.style[CSS.normalizeProperty("clip-path")] = path;
        },


        setRotationForObject: function (ob, rotation) {
            ob.style[CSS.normalizeProperty("transform")] += "rotate(" + rotation.toString() + "rad)";
        },

        setTranslationOfObject: function (ob, transform, hardwareAcceleration) {
            if (hardwareAcceleration) {
                ob.style[CSS.normalizeProperty("transform")] = "translate(" + transform[0].toString() + "px," + transform[1].toString() + "px) translate3d(0,0,0)";
            } else {
                ob.style[CSS.normalizeProperty("transform")] = "translate(" + transform[0].toString() + "px," + transform[1].toString() + "px)";
            }
        },
        setTranslationAndScaleOfObject: function (ob, transform, scale, hardwareAcceleration) {

            if (hardwareAcceleration) {
                ob.style[CSS.normalizeProperty("transform")] = "scale(" + scale[0].toString() + "," + scale[1].toString() + ") " + "translate(" + transform[0].toString() + "px," + transform[1].toString() + "px) translate3d(0,0,0)";
            } else {
                ob.style[CSS.normalizeProperty("transform")] = "scale(" + scale[0].toString() + "," + scale[1].toString() + ") " + "translate(" + transform[0].toString() + "px," + transform[1].toString() + "px)";
            }

        },
        setScaleOfObject: function (ob, transform, hardwareAcceleration) {
            if (hardwareAcceleration) {
                ob.style[CSS.normalizeProperty("transform")] = "scale(" + transform[0].toString() + "," + transform[1].toString() + ") translate3d(0,0,0)";
            } else {
                ob.style[CSS.normalizeProperty("transform")] = "scale(" + transform[0].toString() + "," + transform[1].toString() + ")";
            }


        },
        setOpacityOfObject: function (ob, value) {

            var property = CSS.normalizeProperty("opacity");

            if (Info.isIE) {
                ob.style[property] = value.toString();
            } else {
                ob.style[property] = value.toString();
            }

        },

        colorToArray: function (string) {

            if (string[0] == "#") {
                var r = hexToRgb(string);
                return [r.r, r.g, r.b];
            }
        },

        arrayToHex: function (array) {
            return rgbToHex(array[0], array[1], array[2]);
        },

        hexToRgb: function (hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },


        rgbToHex: function (r, g, b) {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },
        rgbStringToArray: function (color) {
            var c = color.split(",");
            var array = [];
            for (var i = 0; i < c.length; i++) {
                var element = c[i];
                var r = /([\d\.]+)/g.exec(element);
                if (r && r.length > 1) {
                    array.push(Number(r[1]));
                }
            }
            return array;
        },

        arrayToRGBAString: function (array) {
            if (array.length == 3) {

                return "rgb(" + Math.round(array[0]).toString() + ", " + Math.round(array[1]).toString() + ", " + Math.round(array[2]).toString() + ")";
            } else if (array.length == 4) {
                return "rgba(" + Math.round(array[0]).toString() + ", " + Math.round(array[1]).toString() + ", " + Math.round(array[2]).toString() + ", " + array[3].toString() + ")";
            }
            return "rgba(255, 255, 0, 1.0)";
        },

        normalizeProperty: function (string) {
            switch (string) {
                case "transform":

                    if (Browser.isSafari) {
                        return "-webkit-transform";
                    }
                    else if (Browser.isIE) {
                        return "-ms-transform";
                    }
                    else {
                        return "transform";
                    }

                    break;
                case "opacity":
                    if (Browser.isIE) {
                        return "opacity";
                    } else {
                        return "opacity";
                    }
                    break;
                case "clip-path":
                    if (Browser.isChrome) {
                        return "-webkit-clip-path";
                    } else {
                        return "clip-path";
                    }
                    break;
                case "transition":
                    if (Browser.isSafari || Browser.isChrome) {
                        return "-webkit-transition";
                    } else {
                        return "transition";
                    }
                    break;

            }
            return string;
        }

    },
    DynamicAnimationGroup: function () {
        var me = this;
        me.done = true;
        this.animations = [];
        this.addAnimation = function (animation) {
            me.animations.push(animation);
            animation.group = me;
        };

        this.pause = function () {
            me.animationCall.pause();
            me.done = true;
        };
        this.resume = function () {
            me.animationCall.unpause();
            me.done = false;
        };

        this.animationCall = new Animation(function (animation) {
            me.update(animation.dt);
        });
        this.animationCall.frequence = "update";
        this.animationCall.pause();

        this.update = function (dt) {

            var counter = 0;
            for (var i = 0, len = me.animations.length; i < len; i++) {
                var animation = this.animations[i];
                if (!animation.done) {
                    animation.update(dt);
                }
                counter += animation.done ? 1 : 0;
            }
            if (me.onUpdate) {
                me.onUpdate();
            };

            if (counter == me.animations.length) {
                me.done = true;
                me.pause();
                if (me.onEnd) {
                    me.onEnd();
                };

            }

        };
    },


    DynamicAnimation: function (object) {
        Object.defineProperty(this, "targetValue", {
            get: function targetValue() {
                return this._targetValue;
            },
            set: function targetValue(value) {
                if (!this._targetValue || !MKjVector.isEqual(value, this._targetValue)) {
                    this._targetValue = value;
                    this.resume();
                }
            }
        });


        this.property = null;
        this.object = object || null;
        this.targetConvergenceFactor = 0.1;
        this.momentumRetentionFactor = 0.8;
        this.linearStep = null;
        this.convergenceThreshold = 0.1;
        this.done = true;
        this.needsWriting = false;
        this.delayWriting = false;
        this.currentValue = null;

        var me = this;

        this.animationCall = new MKjAnimate.Animation(function (animation) {
            me.update(animation.dt);
        });
        this.animationCall.pause();
        this.animationCall.child = this;
        this.animationCall.frequence = "update";

        this.setCurrentValueAndCommit = function (value) {

            this.currentValue = [value];
            me.property.write(me.currentValue, me.object);
        };

        this.pause = function () {
            me.animationCall.pause();
            me.done = true;
        };
        this.resume = function () {
            me.done = false;
            if (me.group) {
                me.group.resume();
            } else {
                me.animationCall.unpause();
            }
        };

        function addPostUpdateOperation() {

            me.propertyName = "transform";
            me.delayWriting = true;

            me.animationCall.postUpdate = function () {

                var updateArray = [];
                var doneCounter = 0;

                for (var i = 0, len = Animator.animations.length; i < len; i++) {
                    if (Animator.animations[i].child) {
                        var ani = Animator.animations[i].child;
                    
                    if (ani.object && ani.object === me.object && ani.propertyName === "transform") {
                        updateArray.push(Animator.animations[i]);
                        ani.needsWriting = false;
                        if (Animator.animations[i].paused) {
                            doneCounter++;
                        }
                    }    
                    }
                    
                }

                var allowRemoval = doneCounter === updateArray.length;

                var finalString = "";

                for (var i = 0, len = updateArray.length; i < len; i++) {
                    var ani = updateArray[i].child;
                    updateArray[i].allowRemoval = allowRemoval;
                    finalString += ani.property.makePropertyString(ani.currentValue, ani.object) + " ";
                }

                if (finalString) {
                    MKjAnimate.CSS.genericWrite(object, MKjAnimate.CSS.normalizeProperty("transform"), finalString);

                };

                if (allowRemoval && me.onEnd) {
                    me.onEnd();
                };
                if (allowRemoval) {
                    me.done = true;
                }
            };

        };


        function unpackArguments(settings) {


            switch (settings.property) {
                case "opacity":
                    me.property = new MKjPropertyCSSOpacity();
                    break;
                case "scale":
                    addPostUpdateOperation();
                    me.property = new Animator.MKjPropertyCSSTransformScale();
                    break;
                case "positionLeft":
                    me.property = new Animator.MKjPropertyCSSPositionLeft();
                    break;
                case "translateY":
                    addPostUpdateOperation();
                    me.property = new Animator.MKjPropertyCSSTransformTranslateY();
                    break;
                case "translateX":
                    addPostUpdateOperation();
                    me.property = new Animator.MKjPropertyCSSTransformTranslateX();
                    break;
                case "translateXY":
                    addPostUpdateOperation();
                    me.property = new MKjPropertyCSSTransformTranslateXY();
                    break;
                case "background-color":
                    me.property = new MKjPropertyCSSBackgroundColor();
                    break;

            }
            if (me.property) {
                me.convergenceThreshold = me.property.convergenceThreshold;

            }
        };

        if (arguments.length > 1) {
            unpackArguments(arguments[1]);
        }

        this.ensureStartCondition = function () {

            if (!me.currentValue) {
                if (me.property) {
                    me.currentValue = me.property.read([], me.object);
                } else {
                    me.currentValue = [0];
                }

            };
            if (!me.lastValue) {
                me.lastValue = me.currentValue.slice();
            }

        };

        this.update = function (dt) {
            if (!me.targetValue) {
                return;
            }
            
            me.needsWriting = true;
            me.ensureStartCondition();

            me.step(dt);

            if (!me.delayWriting && me.property) {
                me.needsWriting = false;
                me.property.write(me.currentValue, me.object);
            }

            if (me.onUpdate) {
                me.onUpdate();
            };

            if (me.hasConverged()) {
                me.animationCall.pause();
                me.currentValue = me.targetValue.slice();

                if (me.targetConvergenceFactor != 0.0 && !me.delayWriting && me.property) {

                    me.property.write(me.targetValue, me.object);
                }
                if (me.onEnd) {
                    me.onEnd();
                };
                me.done = true;
            }

        };

        this.step = function (dt) {

            me.speed = me.currentValue.slice();

            me.speed = MKjVector.sub(me.speed, me.lastValue);

            me.lastValue = me.currentValue.slice();

            var appliedSpeed = me.speed.slice();
            appliedSpeed = MKjVector.mult(appliedSpeed, me.momentumRetentionFactor);

            var goalValue = null;
            if (me.linearStep) {
                goalValue = me.linearStep;
            } else {
                goalValue = me.targetValue.slice();
                goalValue = MKjVector.sub(goalValue, me.currentValue);
                goalValue = MKjVector.mult(goalValue, me.targetConvergenceFactor);
            }

            me.currentValue = MKjVector.add(me.currentValue, appliedSpeed);
            me.currentValue = MKjVector.add(me.currentValue, goalValue);
        };

        this.hasConverged = function () {


            var diffToLast = me.currentValue.slice();

            diffToLast = MKjVector.sub(diffToLast, me.lastValue);

            if (MKjVector.length(diffToLast) > me.convergenceThreshold) {
                
                return false;
            }

            if (me.targetConvergenceFactor != 0.0) {
                var diffToGoal = me.targetValue.slice();
                diffToGoal = MKjVector.sub(diffToGoal, me.currentValue);
                if (MKjVector.length(diffToGoal) > me.convergenceThreshold) {
                    return false;
                }
            }

            return true;
        };
    },


    Animation: function (stepIn, duration, delay) {
        this.step = stepIn;
        this.duration = duration || 1.0;
        this.delay = delay || 0.0;
        this.elapsed = 0.0;
        this.dt = 0.0;
        this.progress = 0.0;
        this.id = 0;
        this.frames = 0;
        this.frequence = "once";
        this.paused = true;
        this.group = null;
        this.allowRemoval = true;
        var me = this;

        this.pause = function () {
            if (!me.paused) {
                Animator.deregister(me);
            };
            me.paused = true;
        };
        this.unpause = function () {
            if (me.paused) {
                Animator.register(me);
            };
            me.paused = false;
        };

        this.reset = function () {
            me.elapsed = 0.0;
            me.frames = 0;
            me.dt = 0.0;
            me.progress = 0.0;
        };

        this.update = function (dt) {

            if (me.delay > 0) {
                me.delay -= dt;

                return;
            }

            me.dt = dt;

            me.elapsed += me.dt;
            me.progress = me.elapsed / me.duration;
            me.progress = Math.min(1.0, me.progress);
            if (me.progress >= 1.0 && me.frequence == "once") {
                me.elapsed = me.duration;
            }

            me.step(me);
            me.frames++;
            if (me.progress == 1 && me.frequence == "once") {
                me.pause();
                me.reset();
            }
        };
        this.unpause();
    },

    animate: function (stepIn, duration, delay) {
        return new MKjAnimate.Animation(stepIn, duration || 1.0, delay || 0.0);
    },

    hideObject: function (object, speed, delay, onDone) {
        CSS.setHardwareAccelerationOnForObject(object);

        animate(function (animation) {
            CSS.setOpacityOfObject(object, 1 - animation.progress)
            if (animation.progress == 1.0 && onDone) {
                onDone();
            }
        }, speed || 1.0, delay || 0.0);
    },
};

