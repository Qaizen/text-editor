const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default prompt
  event.preventDefault();
  // Store the event for later use
  const installPromptEvent = event;
  // Show the install button
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
     // Show the installation prompt
     installPromptEvent.prompt();
     // Wait for the user to respond to the prompt
     const choiceResult = await installPromptEvent.userChoice;
     // Check the user's choice
     if (choiceResult.outcome === 'accepted') {
       console.log('PWA installed successfully!');
     } else {
       console.log('PWA installation canceled.');
     }
     // Hide the install button
     butInstall.style.display = 'none';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA installed.');
});
