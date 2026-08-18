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
  apiKey: "AIzaSyD31LX-rFk_Jme6gnx1n6qg8ic3wZSTK3g",
  authDomain: "blume-power-technology.firebaseapp.com",
  projectId: "blume-power-technology",
  storageBucket: "blume-power-technology.firebasestorage.app",
  messagingSenderId: "505398270145",
  appId: "1:505398270145:web:35dfa429e8288f58ec5c40"
};

window.BLUME_EMAILJS_PUBLIC_KEY = "QCG0TzBGCPUlHKe1x";
window.BLUME_EMAILJS_SERVICE_ID = "service_arlambf";
window.BLUME_EMAILJS_TEMPLATE_ID = "template_cz8me08";

// Initialize once these are filled in — safe no-op otherwise.
(function () {
  try {
    if (window.blumeFirebaseConfig.apiKey !== "AIzaSyD31LX-rFk_Jme6gnx1n6qg8ic3wZSTK3g" && window.firebase) {
      firebase.initializeApp(window.blumeFirebaseConfig);
      window.blumeDb = firebase.firestore();
      if (firebase.auth) window.blumeAuth = firebase.auth();
    }
    if (window.BLUME_EMAILJS_PUBLIC_KEY !== "QCG0TzBGCPUlHKe1x" && window.emailjs) {
      emailjs.init(window.BLUME_EMAILJS_PUBLIC_KEY);
    }
  } catch (e) {
    console.warn("BLume Firebase/EmailJS not configured yet:", e);
  }
})();
