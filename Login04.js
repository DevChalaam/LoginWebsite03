// Form-Register
document.getElementById("form-container").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "ccc" && password === "ccc") {
        console.log("Login Seccuessfuly Username : ", username, "\n", "Password : ", passwd);
    } else {
        window.alert("Login Flied! \nPassword and Confirm Password not Match");
    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});

const password = document.getElementById("password");

function clickShowPassword() {
    if(password.type == "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}