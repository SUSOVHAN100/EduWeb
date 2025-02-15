const searchToggle = document.getElementById('search-toggle');
const searchBox = document.getElementById('search-box');

// Toggle search box visibility
searchToggle.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click from propagating to the document
  searchBox.classList.toggle('active');
});

// Close search box when clicking outside
document.addEventListener('click', (event) => {
  if (!searchBox.contains(event.target) && !searchToggle.contains(event.target)) {
    searchBox.classList.remove('active');
  }
});





// Get the cart button and modal elements
document.addEventListener('DOMContentLoaded', function () {
  const cartButton = document.querySelector('.header-action-btn[aria-label="cart"]');
  const cartModal = document.getElementById('cart-modal');
  const closeModal = document.querySelector('.close-modal');

  if (!cartButton || !cartModal || !closeModal) {
    console.error('One or more elements are missing!');
    return;
  }

  // Function to open the modal
  function openCartModal() {
    cartModal.style.display = 'block';
    // Add a small delay to allow the display change to take effect
    setTimeout(() => {
      cartModal.classList.add('active');
    }, 10);
  }

  // Function to close the modal
  function closeCartModal() {
    cartModal.classList.remove('active');
    // Wait for the transition to complete before hiding the modal
    setTimeout(() => {
      cartModal.style.display = 'none';
    }, 300); // Match the duration of the CSS transition
  }

  // Event listener for the cart button
  cartButton.addEventListener('click', openCartModal);

  // Event listener for the close button
  closeModal.addEventListener('click', closeCartModal);

  // Close the modal if the user clicks outside of it
  window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
      closeCartModal();
    }
  });
});













// const tryForFreeBtn = document.querySelector('.btn.has-before'); // "Try it for free" button
// const chatbotContainer = document.getElementById('chatbot-container');
// const closeChatbotBtn = document.getElementById('close-chatbot');
// const chatbotMessages = document.getElementById('chatbot-messages');
// const chatbotInput = document.getElementById('chatbot-input');
// const sendChatbotMessageBtn = document.getElementById('send-chatbot-message');

// // Open chatbot when "Try it for free" is clicked
// tryForFreeBtn.addEventListener('click', () => {
//   chatbotContainer.style.display = 'block';
// });
// tryForFreeBtn.addEventListener('click', () => {
//     chatbotContainer.hidden = false; // Show the chatbot
// });
// // Close chatbot when the close button is clicked
// closeChatbotBtn.addEventListener('click', () => {
//     chatbotContainer.hidden = true; // Hide the chatbot
// });
// // Close chatbot when the close button is clicked
// closeChatbotBtn.addEventListener('click', () => {
//   chatbotContainer.style.display = 'none';
// });

// // Send message to the chatbot
// sendChatbotMessageBtn.addEventListener('click', async () => {
//   const userMessage = chatbotInput.value.trim();
//   if (!userMessage) return;

//   // Add user message to chat
//   addMessage('user', userMessage);
//   chatbotInput.value = '';

//   // Send message to OpenAI's API
//   const botResponse = await sendToOpenAI(userMessage);

//   // Add bot's response to chat
//   addMessage('bot', botResponse);
// });

// // Function to add a message to the chat
// function addMessage(sender, message) {
//   const messageElement = document.createElement('div');
//   messageElement.classList.add('message', sender);
//   messageElement.textContent = message;
//   chatbotMessages.appendChild(messageElement);
//   chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the bottom
// }


// async function sendToOpenAI(message) {
//   const apiKey = 'AIzaSyC59AUWNcm_OiaJPkd3DJ0eMUXwG8IAcWY';
//   const apiUrl = 'https://gemini.google.com/app?hl=en-IN';

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo', // Use the GPT-3.5 model
//         messages: [{ role: 'user', content: message }],
//       }),
//     });

//     const data = await response.json();
//     return data.choices[0].message.content; // Extract the bot's response
//   } catch (error) {
//     console.error('Error:', error);
//     return 'Sorry, something went wrong. Please try again.';
//   }
// }




//////////////////////////////////////////////////////////////////////////

