
//After 3 seconds, changeVisibility of the modal

setTimeout(changeVisibility, 3000);


var visibleModal = document.getElementsByClassName("modal")[0];


//Change the visibility from hidden to visible
function changeVisibility() {

	visibleModal.style.visibility = "visible";
}


//If the user enters their email address and clicks submit, the modal will show "thank you".



var thanksForSubmitting = document.getElementsByClassName("submit")[0];
thanksForSubmitting.addEventListener("click", submitAndThank);

function submitAndThank() {
	var changeText = document.getElementsByClassName("inner-modal-content")[0];
	changeText.innerHTML = "<p>Thanks! You'll be hearing from us soon.</p>";
}


//Listen for a click on the x (span). When the x is clicked, display none again.
var closeModalWindow = document.getElementById("close-modal");
closeModalWindow.addEventListener("click", exitModal);

function exitModal() {
	visibleModal.style.visibility = "hidden";

}

