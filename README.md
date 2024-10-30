Discount Calculation Tests

This repository contains a set of unit tests for a discount calculation function using Jest. The discount function applies a 10% discount on an order's price retrieved from a mocked database module (db).



Overview

The tests utilize Jest's mocking capabilities to simulate the behavior of the db.getOrder function, which retrieves order details based on an order ID. The tests demonstrate different approaches to mocking, including:
-Overriding Functions: Directly modifying the getOrder function to return a predefined order.
-Using Jest Mock Functions: Employing jest.fn() to create a mock function that returns specified values.
-Mock Implementations: Using jest.fn().mockImplementation() to return different prices based on conditions, showcasing how to handle varied scenarios.




Test Cases

-Basic Mocking: Tests the discount calculation for an order priced at 10, verifying the final price after discount.
-Mock Function Properties: Demonstrates how to inspect the calls made to the mock function and reset its state after each test.
-Multiple Assertions: Checks both the returned value and the parameters passed to the mock function, ensuring the discount process works correctly.
-Conditional Mocking: Implements a mock that returns different prices based on the order ID, validating the discount logic for various scenarios.




Usage

To run the tests, ensure you have Jest installed in your project. You can execute the tests using the following command:
"bash->npm test"
This will run all the test cases defined in the test suite, allowing you to verify the functionality of the discount calculation logic.




Conclusion

These tests provide a robust foundation for ensuring the correctness of the discount functionality and demonstrate effective use of Jest for mocking and testing in JavaScript applications.
