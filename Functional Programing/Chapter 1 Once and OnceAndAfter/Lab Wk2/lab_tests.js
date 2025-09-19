const { once, onceAndAfter, callNTimes, calculateTotal, processBilling } = require('./lab_functions');

// Test once()
function testFunction(message) {
    console.log("Function called with:", message);
}
const testOnce = once(testFunction);
testOnce("First call");
testOnce("Second call");
testOnce("Third call");

// Test onceAndAfter()
function success(message) {
    console.log("SUCCESS:", message);
}
function warning(message) {
    console.log("WARNING: Already processed", message);
}
const processData = onceAndAfter(success, warning);
processData("user data");
processData("user data");
processData("user data");

// Test callNTimes()
function logMessage(message) {
    console.log("Message:", message);
}
const limitedLog = callNTimes(logMessage, 3);
limitedLog("First");
limitedLog("Second");
limitedLog("Third");
limitedLog("Fourth");
limitedLog("Fifth");

// Real-world billing test
calculateTotal();
processBilling();
processBilling();
processBilling();


