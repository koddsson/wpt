/**
 * Remove the `reftest-wait` class on the document element.
 * The reftest runner will wait with taking a screenshot while
 * this class is present.
 *
 * See https://web-platform-tests.org/writing-tests/reftests.html#controlling-when-comparison-occurs
 */
function takeScreenshot() {
    document.documentElement.classList.remove("reftest-wait");
}

/**
 * Call `takeScreenshot()` after a delay of at least |timeout| milliseconds.
 * @param {number} timeout - milliseconds
 */
function takeScreenshotDelayed(timeout) {
    setTimeout(function() {
        takeScreenshot();
    }, timeout);
}


/**
 * Check a value and if it's false write a failure message to the
 * document then take the screenshot. This is used to implment
 * preconditions for reftests that depend on js
 * @param {bool} value - Value to check for truthiness
 */
function failIfNot(value) {
  if (!value) {
    document.documentElement.textContent = "PRECONDITION FAILED";
    takeScreenshot();
  }
}
