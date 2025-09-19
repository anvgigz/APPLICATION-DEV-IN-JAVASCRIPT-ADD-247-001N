
# Lab Report: Functional Programming Patterns

## Implementation Explanation

- **once()**: Uses a closure to track whether the function has been called. Ensures single execution.
- **onceAndAfter()**: Tracks first call and switches to a secondary function for subsequent calls.
- **callNTimes()**: Limits function execution to N times and provides feedback when the limit is reached.
- **Real-world Application**: Simulates a shopping cart and billing system using once and onceAndAfter to prevent duplicate payments and notify users.

## Testing Methodology

- Tested each function with multiple calls.
- Used different argument types and values.
- Verified correct behavior on first and subsequent calls.
- Included edge cases like exceeding call limits.

## Results Summary

- All functions behaved as expected.
- once() and onceAndAfter() correctly handled state.
- callNTimes() provided accurate feedback after limit.
- Real-world billing simulation prevented duplicate payments.

## Reflection

Functional programming patterns like closures and higher-order functions simplify state management and improve code modularity. These patterns are especially useful in scenarios like billing systems, event handling, and API rate limiting.

## Test Results (8/31/2025, 3:42:05 PM)


## Test Results (8/31/2025, 3:42:18 PM)


## Test Results (8/31/2025, 3:43:11 PM)



## Test Results (8/31/2025, 3:43:17 PM)



## Test Results (8/31/2025, 3:43:20 PM)



## Test Results (8/31/2025, 3:43:21 PM)



## Test Results (8/31/2025, 3:45:04 PM)



## Test Results (8/31/2025, 3:45:08 PM)



## Test Results (8/31/2025, 3:45:09 PM)


