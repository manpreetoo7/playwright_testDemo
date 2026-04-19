let capturedValue; // Global variable

function captureValue() {
  capturedValue = 42; // Assign value to global variable
  console.log("Value captured:", capturedValue);
}

function accessValue() {
  console.log("Accessed value:", capturedValue); // Access global variable
}

// Usage
captureValue(); // Captures the value
accessValue();  // Accesses the captured value
