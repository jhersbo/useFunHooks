"use strict";
exports.__esModule = true;
//Stateful context
var react_1 = require("react");
function useStatefulContext(init) {
    var _a = (0, react_1.useState)(init), state = _a[0], setState = _a[1];
    var StatefulPkg = {
        value: state,
        update: function (val) { return setState(val); }
    };
    var ContextInstance = (0, react_1.createContext)(StatefulPkg);
    return {
        ContextInstance: ContextInstance,
        StatefulPkg: StatefulPkg
    };
}
exports["default"] = useStatefulContext;
