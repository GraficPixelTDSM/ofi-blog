
const DOM_ELEMENT_IDS = {
    component: (codeId) => `py_${codeId}`,
    graphicsResult: (codeId) => `${codeId}_graphics`,
    outputDiv: (codeId) => `${codeId}_brython_result`,
    aceEditor: (codeId) => `${codeId}_editor`,
    turtleSvgContainer: (codeId) => `${codeId}_svg`,
    scriptSource: (codeId) => `${codeId}_src`
}

const BRYTHON_NOTIFICATION_EVENT = 'bry_notify'
const CLOSE_TURTLE_MODAL_EVENT = 'close_turtle_modal'
const TURTLE_IMPORTS_TESTER = /(^from turtle import)|(^import turtle)/m


export {
    DOM_ELEMENT_IDS,
    BRYTHON_NOTIFICATION_EVENT,
    CLOSE_TURTLE_MODAL_EVENT,
    TURTLE_IMPORTS_TESTER
}