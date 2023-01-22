const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MRHqxAXq3QLu27R23gJxyxY7LDdvdnMMTzI5onIsYkcJkVvFakFMU3hkEmTfye6hBlv2Jw46CY11AwK8Kc8hoFz00qtFmX4qG"
);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
