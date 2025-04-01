const currentUser = 'Grace Hopper';

// Welcome message using template literals
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Excited welcome message in uppercase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Short greeting using first initial of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
