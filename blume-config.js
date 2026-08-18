/* =========================================================================
   BLume Power Technologies — shared Firebase + EmailJS configuration
   Used by index.html, services.html, and admin.html.

   SETUP:
   1. Firebase: console.firebase.google.com → create/open your project
      - Authentication → Sign-in method → enable Email/Password → add your admin user(s)
      - Firestore Database → create (production mode is fine)
      - Project settings → General → Your apps → Web app → copy the config object below
   2. EmailJS: emailjs.com → add an email service → create a template with
      variables {{name}} {{phone}} {{service}} {{details}} → copy the three IDs below
   3. Upload this file alongside index.html, services.html, and admin.html.
   ========================================================================= */

window.blumeFirebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

window.BLUME_EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
window.BLUME_EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
window.BLUME_EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

// Initialize once these are filled in — safe no-op otherwise.
(function () {
  try {
    if (window.blumeFirebaseConfig.apiKey !== "YOUR_API_KEY" && window.firebase) {
      firebase.initializeApp(window.blumeFirebaseConfig);
      window.blumeDb = firebase.firestore();
      if (firebase.auth) window.blumeAuth = firebase.auth();
    }
    if (window.BLUME_EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY" && window.emailjs) {
      emailjs.init(window.BLUME_EMAILJS_PUBLIC_KEY);
    }
  } catch (e) {
    console.warn("BLume Firebase/EmailJS not configured yet:", e);
  }
})();
