
//After 3 seconds, changeVisibility of the modal

setTimeout(changeVisibility, 1000);


var visibleModal = document.getElementsByClassName("modal")[0];


//Change the display of the modal from none to block
function changeVisibility() {

	visibleModal.style.visibility = "visible";
}


//If the user enters their email address and clicks submit, the modal will show "thank you".



//Listen for a click on the x (span). When the x is clicked, display none again.
var closeModalWindow = document.getElementById("close-modal");
closeModalWindow.addEventListener("click", exitModal);

function exitModal() {
	visibleModal.style.visibility = "hidden";

}

