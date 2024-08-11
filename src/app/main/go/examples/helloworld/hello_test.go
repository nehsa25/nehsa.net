package main

import (
	"testing"
)

func TestHelloWorld(t *testing.T) {
	// Replace with your actual function that prints "Hello, World!"
	expectedOutput := "Hello, World!"

	actualOutput := getHelloWorldOutput()

	if actualOutput != expectedOutput {
		t.Errorf("Expected output: %s, but got: %s", expectedOutput, actualOutput)
	}
}
