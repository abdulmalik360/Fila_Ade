let selectedProduct = null;


/* =========================
   BUY BUTTON
========================= */

function confirmPurchase(button) {

    // Find the product card containing the clicked button
    const productCard = button.closest(".product-card");

    // Get information from that particular product
    const name = productCard.dataset.name;
    const price = productCard.dataset.price;
    const image = productCard.dataset.image;
    const description = productCard.dataset.description;


    // Store selected product
    selectedProduct = {
        name: name,
        price: price,
        image: image,
        description: description
    };


    // Put product information into confirmation box
    document.getElementById("selectedProductName").textContent = name;

    document.getElementById("selectedProductPrice").textContent = price;

    document.getElementById("selectedProductImage").src = image;


    // Show confirmation box
    const overlay =
        document.getElementById("purchaseOverlay");

    overlay.style.display = "flex";


    // Prevent background scrolling
    document.body.style.overflow = "hidden";
}


/* =========================
   BACK BUTTON
========================= */

function closePurchase() {

    document.getElementById("purchaseOverlay").style.display = "none";

    document.body.style.overflow = "auto";

    selectedProduct = null;
}


/* =========================
   CONTINUE TO WHATSAPP
========================= */

function continuePurchase() {

    if (!selectedProduct) {
        return;
    }


    const whatsappNumber = "2347045197340";


    // Create the WhatsApp message
    const message =
`Hello, I would like to buy this product.

Product: ${selectedProduct.name}

Price: ${selectedProduct.price}

Description: ${selectedProduct.description}

I would love to own this.`;


    // Creating WhatsApp link
    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    // Open WhatsApp
    window.open(whatsappURL, "_blank");


    // Close confirmation box
    closePurchase();
}