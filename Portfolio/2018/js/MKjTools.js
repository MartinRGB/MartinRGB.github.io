var MKRemap = {

    remapLinear: function (value, minO, maxO, minN, maxN) {
        return minN + (maxN - minN) * (value - minO) / (maxO - minO);
    },
    remapZeroOne: function (value, minO, maxO) {
        if (minO == maxO) {
            return 0;
        }
        return (value - minO) / (maxO - minO);
    },

    remapZeroOneClamp: function (value, minO, maxO) {
        return Math.min(Math.max(MKRemap.remapZeroOne(value, minO, maxO), 0), 1);
    },

    slopeFromT: function (t, A, B, C) {
        return 1.0 / (3.0 * A * t * t + 2.0 * B * t + C);
    },
    xFromT: function (t, A, B, C, D) {
        return A * (t * t * t) + B * (t * t) + C * t + D;
    },

    yFromT: function (t, E, F, G, H) {
        var tt = t * t;
        return E * (tt * t) + F * tt + G * t + H;
    },

    splitCubicBezierAlongPercentage: function (p0, p1, p2, p3, p) {

        var p4 = MKjMath.lerp(p0, p1, p);
        var p5 = MKjMath.lerp(p1, p2, p);
        var p6 = MKjMath.lerp(p2, p3, p);
        var p7 = MKjMath.lerp(p4, p5, p);
        var p8 = MKjMath.lerp(p5, p6, p);
        var p9 = MKjMath.lerp(p7, p8, p);

        return [p4, p7, p9, p8, p6];

    },

    cubicBezierPointForPointsAtPercentage: function (p0, p1, p2, p3, t) {

        var u = 1.0 - t;
        var uu = u * u;
        var uuu = uu * u;
        var tt = t * t;
        var ttt = tt * t;
        var x = uuu * p0[0] + 3.0 * uu * t * p1[0] + 3.0 * u * tt * p2[0] + ttt * p3[0];
        var y = uuu * p0[1] + 3.0 * uu * t * p1[1] + 3.0 * u * tt * p2[1] + ttt * p3[1];
        return [x, y];
    },


    splitFactorForNumber: function (num, count, overlap, factor) {
        var multi = (1.0 - overlap) * (count - 1.0);
        multi += 1.0;
        factor *= multi;

        var min = num * (1.0 - overlap);
        var sFac = factor - min;
        sFac = Math.min(Math.max(sFac, 0.0), 1.0);
        return sFac;

    },


    bezierValueForX: function (x, p0, p1, p2, p3) {

        var y0a = p0[1]; // initial y
        var x0a = p0[0]; // initial x
        var y1a = p1[1];    // 1st influence y
        var x1a = p1[0];    // 1st influence x
        var y2a = p2[1];    // 2nd influence y
        var x2a = p2[0];    // 2nd influence x
        var y3a = p3[1]; // final y
        var x3a = p3[0]; // final x

        var A = x3a - 3.0 * x2a + 3.0 * x1a - x0a;
        var B = 3.0 * x2a - 6.0 * x1a + 3.0 * x0a;
        var C = 3.0 * x1a - 3.0 * x0a;
        var D = x0a;

        var E = y3a - 3.0 * y2a + 3.0 * y1a - y0a;
        var F = 3.0 * y2a - 6.0 * y1a + 3.0 * y0a;
        var G = 3.0 * y1a - 3.0 * y0a;
        var H = y0a;

        var currentt = x;

        for (var i = 0; i < 5; i++) {

            var currentx = this.xFromT(currentt, A, B, C, D);

            var currentslope = this.slopeFromT(currentt, A, B, C);
            currentt -= (currentx - x) * (currentslope);
            currentt = Math.min(Math.max(currentt, 0.0), 1.0);
        }

        return this.yFromT(currentt, E, F, G, H);

    },

    bezierYForX: function (x, p1x, p1y, p2x, p2y) {
        return this.bezierValueForX(x, [0.0, 0.0], [p1x, p1y], [p2x, p2y], [1.0, 1.0]);
    },

    bezierEaseIn: function (x) {
        return this.bezierYForX(x, 0.9, 0.0, 0.8, 0.6);
    },
    bezierEaseOut: function (x) {
        return this.bezierYForX(x, 0.2, 0.4, 0.1, 1.0);
    },
    bezierEaseOutStrong: function (x) {
        return this.bezierYForX(x, 0.0, 0.6, 0.05, 1.0);
    },
    bezierEaseInOut: function (x) {
        return this.bezierYForX(x, 0.9, 0.0, 0.1, 1.0);
    },

    interpolateHermite1D: function (p1, p0, p3, p2, t) {
        var tt = t * t;
        var ttt = t * t * t;
        var h1 = 2 * ttt - 3 * tt + 1;
        var h2 = -2 * ttt + 3 * tt;
        var h3 = ttt - 2 * tt + t;
        var h4 = ttt - tt;
        return h1 * p0 + h2 * p3 + h3 * p1 + h4 * p2;
    },

    interpolateHermite2D: function (p1, p0, p3, p2, t) {
        var tt = t * t;
        var ttt = t * t * t;
        var h1 = 2 * ttt - 3 * tt + 1;
        var h2 = -2 * ttt + 3 * tt;
        var h3 = ttt - 2 * tt + t;
        var h4 = ttt - tt;
        var x = h1 * p0[0] + h2 * p3[0] + h3 * p1[0] + h4 * p2[0];
        var y = h1 * p0[1] + h2 * p3[1] + h3 * p1[1] + h4 * p2[1];
        return [x, y];
    }
}



var MKjMath = {

    PointsToPolygonClipPath: function (path, percentage) {
        var rString = "polygon(";
        var append = percentage ? "%" : "px";
        for (var index = 0, len = path.length; index < len; index++) {
            rString += path[index][0].toString() + append + " ";
            rString += path[index][1].toString() + append;
            if (index != len - 1) {
                rString += ",";
            }
        }
        rString += ")";
        return rString;
    },

    HSBtoRGB: function (h, s, b) {
        var max = Math.floor(b * 0.01 * 255.0);
        var min = Math.floor(max * (1.0 - (s * 0.01)));

        if (h == 360.0) {
            h = 0;
        }

        if (s == 0) {
            var w = b * 255.0 * 0.01;
            return [w, w, w];
        } else {
            var _h = Math.floor(h / 60.0);
            if (_h == 0) {
                return [max, Math.floor(min + h * (max - min) / 60.0), min];
            } else if (_h == 1) {
                return [Math.floor(max - (h - 60.0) * (max - min) / 60.0), max, min];
            } else if (_h == 2) {
                return [min, max, Math.floor(min + (h - 120.0) * (max - min) / 60.0)];
            } else if (_h == 3) {
                return [min, Math.floor(max - (h - 180.0) * (max - min) / 60.0), max];
            } else if (_h == 4) {
                return [Math.floor(min + (h - 240.0) * (max - min) / 60.0), min, max];
            } else if (_h == 5) {
                return [max, min, Math.floor(max - (h - 300) * (max - min) / 60.0)];
            } else if (_h == 6) {
                return [max, Math.floor(min + h * (max - min) / 60.0), min];
            }

        }

    },

    RGBtoHSB: function (r, g, b) {

        r = r / 255.0;
        g = g / 255.0;
        b = b / 255.0;

        var h, s, v = 0;
        v = Math.max(r, g, b);
        var m = Math.min(r, g, b);

        var diff = v - m;

        if (diff == 0) {
            h = s = 0.0
        } else {

            s = diff / v;

            var r2 = (v - r) / diff;
            var g2 = (v - g) / diff;
            var b2 = (v - b) / diff;

            if (r == v) {
                h = (g == m ? 5.0 + b2 : 1.0 - g2);
            } else if (g == v) {
                h = (b == m ? 1.0 + r2 : 3.0 - b2);
            } else {
                h = (r == m ? 3.0 + g2 : 5.0 - r2);
            }
            h /= 6.0;
        }


        return [h * 360, s * 100, v * 100];
    },

    angleSignedBetweenVectors: function (v1, v2) {


        var angle = Math.atan2(v2[1], v2[0]) - Math.atan2(v1[1], v1[0]);

        return angle;
    },
    aspectRatio: function (size) {
        return size.width / size.height;
    },

    scalarForSizeToFitSize: function (sizeToScale, sizeToFit) {
        if (MKjMath.aspectRatio(sizeToScale) > MKjMath.aspectRatio(sizeToFit)) {
            return sizeToFit.width / sizeToScale.width;
        } else {
            return sizeToFit.height / sizeToScale.height;
        }
    },
    scalarForSizeToFillSize: function (sizeToScale, sizeToFit) {
        if (MKjMath.aspectRatio(sizeToScale) > MKjMath.aspectRatio(sizeToFit)) {
            return sizeToFit.height / sizeToScale.height;

        } else {
            return sizeToFit.width / sizeToScale.width;
        }
    },

    isElementInViewport: function (element, viewBox) {
        var elementbBox = element.getBoundingClientRect();
        var view = viewBox || MKjTools.viewport();
        return elementbBox.bottom > 0 && elementbBox.top <= view.height;
    },

    visibilityPercentage: function (element, viewBox) {
        var elementbBox = element.getBoundingClientRect();
        var view = viewBox || MKjTools.viewport();

        if (elementbBox.bottom > 0 && elementbBox.top <= view.height) {
            var percentage = elementbBox.bottom / elementbBox.height;
            var percentageTop = Math.max(view.height - elementbBox.top, 0) / elementbBox.height;
            var p = Math.min(percentage, percentageTop);
            return Math.max(Math.min(1.0, p), 0);
        }
        return 0;
    },

    hasTraversedScreenInPercentage: function (element, viewBox) {

        var elementbBox = null;
        try {
            elementbBox = element.getBoundingClientRect();
        } catch (e) {
            elementbBox = { top: element.offsetTop, bottom: element.offsetTop };
        };


        var view = viewBox || MKjTools.viewport();

        if (elementbBox.bottom <= 0) return 0;
        else if (elementbBox.top >= view.height) return 1;

        return MKRemap.remapZeroOneClamp(elementbBox.top, -elementbBox.height, view.height);

    },

    doLinesIntersect: function (pointA1, pointA2, pointB3, pointB4) {
        var intersection = MKjMath.intersectionPointOfLines(pointA1, pointA2, pointB3, pointB4);
        return intersection[0] != 0 || intersection[1] != 0;
    },

    intersectionPointOfLines: function (pointA1, pointA2, pointB3, pointB4) {
        var ua = (pointB4[0] - pointB3[0]) * (pointA1[1] - pointB3[1]) - (pointB4[1] - pointB3[1]) * (pointA1[0] - pointB3[0]);
        var d = (pointB4[1] - pointB3[1]) * (pointA2[0] - pointA1[0]) - (pointB4[0] - pointB3[0]) * (pointA2[1] - pointA1[1]);

        if (d == 0) {
            return [0, 0];
        }

        var ua_k = ua / d;
        if (ua_k < 0 || ua_k > 1) return [0, 0];
        var ub = (pointA2[0] - pointA1[0]) * (pointA1[1] - pointB3[1]) - (pointA2[1] - pointA1[1]) * (pointA1[0] - pointB3[0]);
        var ub_k = ub / d;
        if (ub_k < 0 || ub_k > 1) return [0, 0];

        var x = pointA1[0] + ua_k * (pointA2[0] - pointA1[0]);
        var y = pointA1[1] + ua_k * (pointA2[1] - pointA1[1]);

        return [x, y];

    },

    removeIntersectionsInPath: function (path) {

        var newPath = [];
        for (var k = 0, len = path.length; k < len; k++) {

            var p1 = k == 0 ? path[len - 1] : path[k - 1];
            var p2 = path[k];
            var p3 = k == len - 1 ? path[0] : path[k + 1];

            for (var j = 0, len = path.length; j < len; j++) {

                if (j == k) continue;
                if (j == k + 1) continue;

                var c1 = j == 0 ? path[len - 1] : path[j - 1];
                var c2 = path[j];

                var inter1 = MKjMath.intersectionPointOfLines(p1, p2, c1, c2);
                var inter2 = MKjMath.intersectionPointOfLines(p2, p3, c1, c2);

                var remove = false;
                if (!MKjVector.isEqual(inter1, [0, 0])) {
                    remove = true;
                    newPath.push(inter1);

                }
                if (!MKjVector.isEqual(inter2, [0, 0])) {
                    remove = true;
                    newPath.push(inter2);

                }
                if (!remove) {
                    newPath.push(p2);
                }
            }
        }
        return newPath;
    },

    closestPointOnLine: function (lineA, lineB, point) {

        var vecB = MKjVector.sub(lineB, lineA);

        return MKjVector.dot(point, vecB) / MKjVector.dot(vecB, vecB);


    },

    degToRad: function (angle) {

        return (angle * Math.PI) / 180.0;
    },

    radToDeg: function (angle) {

        return (angle * 180.0) / Math.PI;
    },

    lerpReg: function (a, b, factor) {
        return a + (b - a) * factor;
    },

    lerp: function (a, b, factor) {
        if (a instanceof Array) {
            var rArray = [];
            for (var i = 0, length = a.length; i < length; i++) {
                rArray.push(MKjMath.lerp(a[i], b[i], factor));
            }
            return rArray;
        } else {
            return MKjMath.lerpReg(a, b, factor);
        }
    },

    addOffsetToPoints: function (points, offset) {
        for (var i = 0, length = points.length; i < length; i++) {
            points[i] = MKjVector.add(points[i], offset);
        }
        return points;
    },

    lerpFunction: function (a, b, percentages) {
        var rArray = [];
        for (var i = 0, length = a.length; i < length; i++) {
            rArray.push(MKjMath.lerp(a[i], b[i], percentages(i)));
        }
        return rArray;
    },

    offsetPathByAmount: function (path, amount, percentages) {

        var returnPath = [];

        for (var i = 0, length = path.length; i < length; i++) {

            var index = i;
            var indexPrev = i == 0 ? length - 1 : i - 1;
            var indexNext = i == length - 1 ? 1 : i + 1;

            var p0 = path[indexPrev];
            var p1 = path[index];
            var p2 = path[indexNext];

            var line = MKjVector.normalize(MKjVector.sub(p2, p1));

            var normal = MKjVector.normalize([-line[1], line[0]]);


            var tangent1 = MKjVector.normalize(MKjVector.sub(p1, p0));

            tangent1 = MKjVector.normalize(MKjVector.add(tangent1, line));

            var miter = [-tangent1[1], tangent1[0]];
            var miterLength = amount / MKjVector.dot(normal, miter);

            if (!isFinite(miterLength)) {
                miterLength = amount;
            }
            miterLength = Math.max(Math.min(miterLength, Math.abs(amount * 5.0)), -Math.abs(amount * 5.0));

            miter = MKjVector.mult(miter, miterLength);

            var intersection;

            if (MKjVector.isEqual(p0, p1)) {

                intersection = MKjVector.add(p1, MKjVector.mult(normal, amount));
            } else if (MKjVector.isEqual(p1, p2)) {

                var normal = MKjVector.normal(p1, p0);
                normal = MKjVector.mult(normal, amount);
                intersection = MKjVector.add(p1, normal);
            } else {
                intersection = MKjVector.add(p1, miter);
            }

            returnPath.push(intersection);

        }
        return returnPath;
    },
    thickenPath: function (path, amount, percentageFunction) {


        var returnPath = new Array(path.length * 2 + 2);

        var backCounter = path.length * 2 + 1;

        for (var i = 0, length = path.length; i < length; i++) {

            var index = i;
            var indexPrev = i == 0 ? 0 : i - 1;
            var indexNext = i == length - 1 ? i : i + 1;

            var p0 = path[indexPrev];
            var p1 = path[index];
            var p2 = path[indexNext];

            var line = MKjVector.normalize(MKjVector.sub(p2, p1));

            var normal = MKjVector.normalize([-line[1], line[0]]);


            var tangent1 = MKjVector.normalize(MKjVector.sub(p1, p0));

            tangent1 = MKjVector.normalize(MKjVector.add(tangent1, line));

            var useAmount = amount;

            var miter = [-tangent1[1], tangent1[0]];
            var miterLength = useAmount / MKjVector.dot(normal, miter);

            if (!isFinite(miterLength)) {
                miterLength = useAmount;
            }
            miterLength = Math.max(Math.min(miterLength, Math.abs(amount * 50.0)), -Math.abs(amount * 50.0));
            miterLength = 3;

            var useAmountLegacy = useAmount;
            if (percentageFunction) {

                var cIndex = 0;
                if (i <= 1) {
                    cIndex = 0;
                } else if (i >= path.length - 2) {
                    cIndex = (path.length - 4) / 3 + 1;
                } else {
                    cIndex = Math.ceil((i - 1.0) / 3.0);
                }

                var results = percentageFunction(cIndex);
                miterLength = results[0];
                var useLegacy = results[1];
                if (!useLegacy) {
                    useAmount = miterLength;
                }
            }

            miter = MKjVector.mult(miter, miterLength);

            var intersection;
            var intersection2;



            if (MKjVector.isEqual(p0, p1)) {
                intersection = MKjVector.add(p1, MKjVector.mult(normal, useAmount));
                intersection2 = MKjVector.sub(p1, MKjVector.mult(normal, useAmount));
            } else if (MKjVector.isEqual(p1, p2)) {
                var normal = MKjVector.normal(p1, p0);
                normal = MKjVector.mult(normal, useAmount);
                intersection = MKjVector.add(p1, normal);
                intersection2 = MKjVector.sub(p1, normal);
            } else {
                intersection = MKjVector.add(p1, miter);
                intersection2 = MKjVector.sub(p1, miter);
            }



            returnPath[i] = intersection;
            returnPath[backCounter--] = intersection2;

        }

        var lastPointA = returnPath[path.length - 1];
        var lastPointB = returnPath[path.length + 2];

        returnPath[path.length] = MKjMath.lerp(lastPointA, lastPointB, 0.0);
        returnPath[path.length + 1] = MKjMath.lerp(lastPointA, lastPointB, 0.0);

        return returnPath;
    },

    calculateDistanceOfSegmentsInBezierPath: function (path) {
        var segmentsList = [];
        segmentsList.push(0);

        var length = 0;
        var steps = 2;
        var step = 1.0 / steps;
        for (var i = 0, pLength = path.length; i < pLength - 1; i += 3) {

            var lastPoint = path[i];
            for (var j = step; j <= 1.0; j += step) {
                var nPoint = MKRemap.cubicBezierPointForPointsAtPercentage(path[i], path[i + 1], path[i + 2], path[i + 3], j);
                var cLength = MKjVector.length(MKjVector.sub(nPoint, lastPoint));
                length += cLength;
                lastPoint = nPoint;
            }
            segmentsList.push(length);
        }
        for (var i = 0, pLength = segmentsList.length; i < pLength; i += 1) {
            segmentsList[i] = segmentsList[i] / length;
        }

        return segmentsList;
    },

    calculateDistanceOfSegmentsInPoints: function (path) {
        var segmentsList = [];
        segmentsList.push(0);

        var length = 0;
        var lastPoint = path[0];
        for (var i = 1, pLength = path.length; i < pLength; i++) {

            length += MKjVector.length(MKjVector.sub(path[i], lastPoint));
            lastPoint = path[i];
            segmentsList.push(length);
        }
        for (var i = 0, pLength = segmentsList.length; i < pLength; i += 1) {
            segmentsList[i] = segmentsList[i] / length;
        }
        return segmentsList;
    },

    insertPointInPolylineAtPercentage: function (path, segments, percentage) {

        if (MKjMath.firstIndexOfExactValue(percentage, segments) != -1) {
            return;
        }

        var insertIndex = 0;
        for (var i = 1, len = segments.length; i < len; i++) {
            if (segments[i] > percentage) {
                insertIndex = i - 1;
                break;
            }
        }

        var nextIndex = insertIndex + 1;
        var cPercent = segments[insertIndex];
        var nPercent = segments[nextIndex];
        var localPercent = MKRemap.remapZeroOneClamp(percentage, cPercent, nPercent);
        var nPoint = MKjMath.lerp(path[insertIndex], path[nextIndex], localPercent);
        segments.splice(nextIndex, 0, percentage);
        path.splice(nextIndex, 0, nPoint);
    },

    getSubPathAtPercentagesOfPoints: function (start, end, path, segments) {

        var nPath = path.slice();
        var nSegs = segments.slice();
        MKjMath.insertPointInPolylineAtPercentage(nPath, nSegs, start);
        MKjMath.insertPointInPolylineAtPercentage(nPath, nSegs, end);

        var startIndex = MKjMath.lastIndexOfExactValue(start, nSegs);
        var endIndex = MKjMath.firstIndexOfExactValue(end, nSegs);

        var returnPath = [];
        for (var i = startIndex; i < endIndex + 1; i++) {
            returnPath.push(nPath[i]);
        }
        return returnPath;

    },


    firstIndexOfExactValue: function (value, array) {
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] == value) return i;
        }
        return -1;
    },
    lastIndexOfExactValue: function (value, array) {
        var index = -1;
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] == value) index = i;
        }
        return index;
    },

    valueLyingBetweenTheseValueIndices: function (value, array) {
        for (var j = 0, len = array.length; j < len; j++) {

            var cSeg = array[j];

            if (value > cSeg) {

            }
            else if (value == cSeg) {
                return { startIndex: j, endIndex: j };
            }
            else if (value < cSeg) {
                var prevIndex = Math.max(0, j - 1);
                return { startIndex: prevIndex, endIndex: j };
            }

        }
    },

    getSubPathAtPercentagesOfPathWithPercentSegments: function (start, end, path, segments, info, forceMiddle) {

        var nPath = path.slice();
        var nSegs = segments;


        MKjMath.addPointInBezierPathAtPercentage(nPath, nSegs, start);
        if (forceMiddle) {
            MKjMath.addPointInBezierPathAtPercentage(nPath, nSegs, forceMiddle);
        }
        MKjMath.addPointInBezierPathAtPercentage(nPath, nSegs, end);

        var startIndex = MKjMath.lastIndexOfExactValue(start, nSegs);
        var endIndex = MKjMath.firstIndexOfExactValue(end, nSegs);
        var finalPath = [];

        if (info) {
            info.startIndex = Math.max(0, startIndex);
            info.endIndex = endIndex;
        }

        for (var i = startIndex * 3; i <= endIndex * 3; i++) {
            finalPath.push(nPath[i]);
        }
        return finalPath;

    },

    getPointInBezierPathAtPercentage: function (path, distanceList, percentage, protectDistances) {

        if (MKjMath.firstIndexOfExactValue(percentage, distanceList) != -1) {
            return;
        }


        percentage = Math.max(Math.min(1.0, percentage), 0.0);

        var stepper = 0;
        var cPercentage = 0;
        while (cPercentage < percentage) {
            cPercentage = distanceList[stepper++];
            if (cPercentage >= percentage) {
                stepper -= 2;
                stepper = Math.max(0, stepper);
            }
        }

        var cIndex = stepper;
        var nextIndex = stepper + 1;

        var localPercent = MKRemap.remapZeroOneClamp(percentage, distanceList[cIndex], distanceList[nextIndex]);
        return MKRemap.cubicBezierPointForPointsAtPercentage(path[cIndex * 3], path[cIndex * 3 + 1], path[cIndex * 3 + 2], path[cIndex * 3 + 3], localPercent);

    },

    addPointInBezierPathAtPercentage: function (path, distanceList, percentage, protectDistances) {

        if (MKjMath.firstIndexOfExactValue(percentage, distanceList) != -1) {
            return;
        }

        var changeDistances = protectDistances || true;

        percentage = Math.max(Math.min(1.0, percentage), 0.0);

        var stepper = 0;
        var cPercentage = 0;
        while (cPercentage < percentage) {
            cPercentage = distanceList[stepper++];
            if (cPercentage >= percentage) {
                stepper -= 2;
                stepper = Math.max(0, stepper);
            }
        }

        var cIndex = stepper;
        var nextIndex = stepper + 1;

        var localPercent = MKRemap.remapZeroOneClamp(percentage, distanceList[cIndex], distanceList[nextIndex]);
        var nPoint = MKRemap.splitCubicBezierAlongPercentage(path[cIndex * 3], path[cIndex * 3 + 1], path[cIndex * 3 + 2], path[cIndex * 3 + 3], localPercent, true);
        path.splice(stepper * 3 + 1, 2, nPoint[0], nPoint[1], nPoint[2], nPoint[3], nPoint[4]);

        if (changeDistances) {
            distanceList.splice(stepper + 1, 0, percentage);
        }

        return path;
    },

    shortenBezierPath: function (path, distanceList, percentage) {

        if (percentage == 1) {
            return path;
        }


        var stepper = 1;
        var cPercentage = 0;
        while (percentage > cPercentage) {
            cPercentage = distanceList[stepper++];
        }
        stepper -= 2;
        stepper = Math.max(0, stepper);

        var cIndex = stepper;
        var nextIndex = stepper + 1;
        var cStep = distanceList[cIndex];
        var nextStep = distanceList[nextIndex];
        var localPercent = MKRemap.remapZeroOneClamp(percentage, cStep, nextStep);
        var nPoint = MKRemap.splitCubicBezierAlongPercentage(path[cIndex * 3], path[cIndex * 3 + 1], path[cIndex * 3 + 2], path[cIndex * 3 + 3], localPercent);
        var nPath = [];
        for (var i = 0, pLength = cIndex * 3; i <= pLength; i++) {
            nPath.push(path[i]);
        }
        nPath.push(nPoint[0]);
        nPath.push(nPoint[1]);
        nPath.push(nPoint[2]);

        return nPath;
    }

}

var MKjVector = {

    rotateAroundOrigin: function (a, origin, angle) {

        var v = MKjVector.sub(a, origin);
        v = MKjVector.rotate(v, angle);
        return [v[0] + origin[0], v[1] + origin[1]];
    },


    rotate: function (a, angle) {

        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        return [a[0] * cos - a[1] * sin, a[0] * sin + a[1] * cos];
    },

    length: function (a) {

        if (a instanceof Array) {

            var count = 0.0;
            for (var i = 0, len = a.length; i < len; i++) {
                count += a[i] * a[i];

            }

            return Math.sqrt(count);
        } else return a;

    },

    normalize: function (v) {
        var length = Vector.length(v);
        if (length == 0) return [0, 0];

        var array = [];
        for (var i = 0, len = v.length; i < len; i++) {
            array.push(v[i] / length);
        }

        return array;
    },


    sub: function (a, b) {

        if (a instanceof Array) {
            var array = []
            for (var i = 0, len = a.length; i < len; i++) {
                array.push(a[i] - b[i]);
            }

            return array;
        } else {

            return a - b;
        }

    },

    add: function (a, b) {
        if (a instanceof Array) {
            var array = []
            for (var i = 0, len = a.length; i < len; i++) {
                array.push(a[i] + b[i]);
            }
            return array;
        } else return a + b;
    },

    mult: function (a, b) {
        if (a instanceof Array) {
            var array = [];
            for (var i = 0, len = a.length; i < len; i++) {
                array.push(a[i] * b);
            }
            return array;
        } else return a * b;
    },

    dot: function (a, b) {
        if (a instanceof Array) {
            var sum = 0;
            for (var i = 0, len = a.length; i < len; i++) {
                sum += a[i] * b[i];
            }
            return sum;
        } else return a * b;
    },

    isEqual: function (a, b) {
        if (a instanceof Array) {
            for (var i = 0, len = a.length; i < len; i++) {
                if (a[i] != b[i]) return false;
            }
            return true;
        } else {
            return a == b;
        }
    },

    rotatePerp: function (a) {
        return [a[1], -a[0]];
    },

    normal: function (a, b) {
        var p = MKjVector.sub(b, a);
        p = MKjVector.rotatePerp(p);
        var length = MKjVector.length(p);
        if (length == 0) return [0, 0];
        else return MKjVector.mult(p, 1.0 / length);
    }

}



var MKjTools = {

    addVisibilityTrigger: function (element, onTrigger, gamut) {
        gamut = gamut || 1.0;
        var gH = gamut * 0.5;

        var visibilityTrigger = null;

        var removeVisibilityTrigger = function () {
            window.removeEventListener("scroll", visibilityTrigger);
        }

        visibilityTrigger = function () {

            var percent = MKjMath.hasTraversedScreenInPercentage(element);
            if (percent > 0.5 - gH && percent < 0.5 + gH) {
                onTrigger();
                removeVisibilityTrigger();
            }
            ;
        };
        window.addEventListener("scroll", visibilityTrigger);
        visibilityTrigger();
    },

    addPermanentVisibilityTrigger: function (element, onTrigger) {
        var shown = false;

        visibilityTrigger = function () {

            var percent = MKjMath.hasTraversedScreenInPercentage(element);
            if (percent >= 0.0 && percent < 1.0) {
                if (!shown) {
                    shown = true;
                    onTrigger("show");
                } else {
                    onTrigger("update");
                }

            } else if (shown) {
                shown = false;
                onTrigger("hide");
            }

        };
        window.addEventListener("scroll", visibilityTrigger);
    },
    rectContainsPoint: function (rect, point) {

        var endX = rect[0] + rect[2];
        var endY = rect[1] + rect[3];
        if (point[0] < rect[0] || point[0] > endX) return false;
        if (point[1] < rect[1] || point[1] > endY) return false;
        return true;
    },


    loadContent: function (url, onLoaded) {

        var AJAX_req = new XMLHttpRequest();
        AJAX_req.open("GET", url, true);
        AJAX_req.onreadystatechange = function () {
            if (AJAX_req.readyState == 4 && AJAX_req.status == 200) {
                var response = AJAX_req.responseText;
                onLoaded(response);
            }
        }
        AJAX_req.send();
    },

    randomElement: function (array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    shuffledCopy: function (a) {
        var array = a.slice();
        var nArray = [];
        while (array.length > 0) {
            var random = Math.floor(Math.random() * array.length);
            nArray.push(array[random]);
            array.splice(random, 1);
        }
        return nArray;
    },

    viewport: function () {
        var e = window
            , a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width: e[a + 'Width'], height: e[a + 'Height'] }
    },

    SVG: {

        getSVGObjectsWithAttribute: function (attribute) {
            var array = [];
            var SVGs = window.document.querySelectorAll("object");
            for (var i = 0, len = SVGs.length; i < len; i++) {

                if (SVGs[i].type == "image/svg+xml") {

                    var children = SVGs[i].contentDocument.rootElement.children;

                    for (var j = 0, len2 = children.length; j < len2; j++) {
                        var c = children[j];
                        if (c.getAttribute(attribute)) {
                            array.push(c);
                        }
                    }
                }
            }
            return array;
        },


        getSVGObjectsWithClass: function (className) {
            var array = [];
            var SVGs = window.document.querySelectorAll("object");
            for (var i = 0, len = SVGs.length; i < len; i++) {

                if (SVGs[i].type == "image/svg+xml" && SVGs[i].contentDocument != null) {

                    var debugObjects = SVGs[i].contentDocument.getElementsByClassName(className);

                    for (var j = 0, length = debugObjects.length; j < length; j++) {
                        debugObjects[j].root = SVGs[i];
                        array.push(debugObjects[j]);
                    }
                }
            }

            var docSVGs = window.document.getElementsByClassName(className);
            for (var i = 0, len = docSVGs.length; i < len; i++) {
                array.push(docSVGs[i]);
            }

            return array;
        },

        getChildrenOfSVG: function (SVG) {
            var array = [];
            for (var i = 0, len = SVG.childNodes.length; i < len; i++) {
                var n = SVG.childNodes[i];
                if (n.nodeName != "defs" && n.nodeName != "#text") {
                    array.push(n);
                }
            }
            return array;
        },

        getChildrenOfSVGWithID: function (idName) {
            var SVG = window.document.getElementById(idName);
            if (SVG) {
                return MKjTools.SVG.getChildrenOfSVG(SVG);
            }
            return [];
        },

        getSVGChildrenOfObjectsWithClass: function (className) {
            var array = [];
            var SVGs = window.document.getElementsByClassName(className)

            for (var i = 0, len = SVGs.length; i < len; i++) {
                if (SVGs[i].type == "image/svg+xml" && SVGs[i].contentDocument != null) {
                    var debugObjects = SVGs[i].contentDocument.childNodes
                    for (var j = 0, length = debugObjects.length; j < length; j++) {
                        if (debugObjects[j].nodeName == "svg") {
                            var cSVG = debugObjects[j];
                            var svgKids = cSVG.children || cSVG.childNodes
                            for (var k = 0, length2 = svgKids.length; k < length2; k++) {
                                var kid = svgKids[k];
                                if (kid.nodeName != "defs" && kid.nodeName != "#text") {
                                    array.push(kid);
                                }
                            }
                        }
                    }
                }
            }
            return array;
        },

        getSVGObjectWithID: function (idName) {
            var SVGs = window.document.querySelectorAll("object");

            for (var i = 0, len = SVGs.length; i < len; i++) {
                if (SVGs[i].type == "image/svg+xml") {

                    if (SVGs[i].contentDocument) {

                        var debugObjects = SVGs[i].contentDocument.getElementById(idName);

                        if (debugObjects) return debugObjects;
                    }
                }
            }

            var other = window.document.getElementById(idName);
            return other;

        }
    }
};


