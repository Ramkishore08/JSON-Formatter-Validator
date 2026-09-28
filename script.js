function formatJSON() {

    let input = document.getElementById("jsonInput").value;

    try {

        let jsonObject = JSON.parse(input);

        let formatted = JSON.stringify(jsonObject, null, 4);

        document.getElementById("output").textContent = formatted;

        document.getElementById("message").textContent =
            "Valid JSON";

    } catch (error) {

        document.getElementById("message").textContent =
            "Invalid JSON: " + error.message;
    }
}


function minifyJSON() {

    let input = document.getElementById("jsonInput").value;

    try {

        let jsonObject = JSON.parse(input);

        let minified = JSON.stringify(jsonObject);

        document.getElementById("output").textContent = minified;

        document.getElementById("message").textContent =
            "JSON Minified";

    } catch (error) {

        document.getElementById("message").textContent =
            "Invalid JSON: " + error.message;
    }
}


function validateJSON() {

    let input = document.getElementById("jsonInput").value;

    try {

        JSON.parse(input);

        document.getElementById("message").textContent =
            "✓ Valid JSON";

    } catch (error) {

        document.getElementById("message").textContent =
            "✗ Invalid JSON: " + error.message;
    }
}


function clearJSON() {

    document.getElementById("jsonInput").value = "";

    document.getElementById("output").textContent = "";

    document.getElementById("message").textContent = "";
}