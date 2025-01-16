# Unexpected Null Return in JavaScript Function

This repository demonstrates a common but easily missed bug in JavaScript functions that involve null checks. The `foo` function returns null if either argument is null, which may lead to unexpected behavior if not handled properly.  The solution demonstrates how to address this by using a different return strategy, or validating and defaulting the input values.

## Bug Description:
The function `foo` is designed to add two numbers.  However, it prematurely returns `null` if either input is null. This behavior may not be desirable in all contexts and could lead to unexpected program behavior or errors further down the line, especially if the calling function isn't explicitly checking for a null return value.

## Solution:
The provided solution demonstrates a modified version that handles null input values more gracefully, either by returning 0 or the non-null value for improved function behavior.   Choose the best strategy depending on your specific requirements.

## How to reproduce:
1. Clone this repository.
2. Run the `bug.js` file.
3. Observe the unexpected null outputs in the console.
4. Run `bugSolution.js` to see the corrected outputs.