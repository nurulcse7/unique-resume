import { Elements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import ChekoutForm from "./ChekoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51M8SDWAdpdqyZqEI3GPyXGXAHFY34VCBkWIZeQFQGDuBk17YHbSiG3LKXRKXMF28VZaJ5dXBJWGRxjEb4RRtH3sQ007LrCOyt9"
);
const Chekout = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };

  return (
    <Elements stripe={stripePromise}>
      <ChekoutForm />
    </Elements>
  );
};

export default Chekout;
