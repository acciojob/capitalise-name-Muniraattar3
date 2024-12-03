<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Convert to Uppercase</title>
</head>
<body>
  <label for="fname">Enter your name:</label>
  <input type="text" id="fname" />

  <script>
    // Add an event listener for the "blur" event (when the input field loses focus)
    document.getElementById("fname").addEventListener("blur", function () {
      // Convert the value of the input field to uppercase
      this.value = this.value.toUpperCase();
    });
  </script>
</body>
</html>
