# JavaScript Null Handling Bug

This repository demonstrates a subtle bug in JavaScript related to null value handling in a simple addition function.

## Bug Description
The `foo` function adds two numbers. It correctly handles `null` inputs by returning 0. However, in situations where a null value is not expected, this behavior might lead to issues.

## How to reproduce
Clone this repository and run `bug.js`. Observe the output for different inputs, including `null` values.

## Solution
The `bugSolution.js` file provides a possible solution by adding explicit checks or using a more appropriate default value (like NaN) rather than 0.