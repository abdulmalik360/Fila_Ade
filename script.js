// Vehicle search

const vehicleSearch = document.getElementById("vehicleSearch");
const vehicleCategories = document.querySelectorAll(".vehicle-category");

vehicleSearch.addEventListener("input", function () {

    const searchText = this.value.toLowerCase().trim();

    vehicleCategories.forEach(category => {

        const name = category
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (name.includes(searchText)) {
            category.style.display = "flex";
        } else {
            category.style.display = "none";
        }

    });

});


/* =====================================
   QUICK MESSAGE
===================================== */

function setMessage(message) {

    const messageBox =
        document.getElementById("sellerMessage");

    messageBox.value = message;

    messageBox.focus();
}


/* =====================================
   CALL SELLER
===================================== */

function callSeller() {

    const sellerPhone = "+2347045197340";

    window.location.href = "tel:" + sellerPhone;
}


/* =====================================
   REQUEST CALL BACK
===================================== */

function requestCallback() {

    alert(
        "Your callback request has been sent to the seller."
    );
}


/* =====================================
   START CHAT
===================================== */

function startChat() {

    const message =
        document.getElementById("sellerMessage").value.trim();

    if (message === "") {

        alert("Please write a message first.");

        return;
    }

    // Your WhatsApp number
    const whatsappNumber = "2347045197340";

    // Message that will be opened in WhatsApp
    const whatsappMessage =
        "Hello, My name is ____. I am interested in buying a cap on your website.\n\n" +
        message;

    // Create WhatsApp link
    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
}