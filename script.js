// this code makes the submit button function. It takes the value of the textbox and makes it into an alert.
document.getElementById('submit-button').addEventListener('click', myfunction)

function myfunction () {
  alert(document.getElementById('message').value)
}
