"use strict";
exports.__esModule = true;
exports.useFollowPointer = void 0;
var react_1 = require("react");
function useFollowPointer(ref) {
    var prevPointRef = (0, react_1.useRef)();
    var _a = (0, react_1.useState)(prevPointRef.current), point = _a[0], setPoint = _a[1];
    (0, react_1.useEffect)(function () {
        prevPointRef.current = point;
    }, [point]);
    (0, react_1.useEffect)(function () {
        if (!ref.current)
            return;
        var handleScrollY = function () {
            return window.scrollY;
        };
        var handleScrollX = function () {
            return window.scrollX;
        };
        var handlePointerMove = function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            var element = ref.current;
            var x = (clientX - element.offsetLeft - element.offsetWidth / 2) + handleScrollX();
            var y = (clientY - element.offsetTop - element.offsetHeight / 2) + handleScrollY();
            setPoint({ x: x, y: y });
        };
        window.addEventListener("scroll", handleScrollY);
        window.addEventListener("scroll", handleScrollX);
        window.addEventListener("pointermove", handlePointerMove);
        return function () {
            window.removeEventListener("scroll", handleScrollY);
            window.removeEventListener("scroll", handleScrollX);
            window.removeEventListener("pointermove", handlePointerMove);
        };
    });
    return point;
}
exports.useFollowPointer = useFollowPointer;
