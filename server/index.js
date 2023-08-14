import express from "express";
import Stripe from "stripe";
// import { keys } from "../keys.js";

const stripe = new Stripe(
  "sk_test_51M7YkzGshYRC4YtBEFZbIGgVs7EwCqJoiDmR7ZB1UQhKGUYULJPxSwEtDlUhoHYnRkJrj5oOIhGu2w2VcIGVBhhz00oMBStoNX",
  {
    apiVersion: "2020-08-27",
  }
);
const app = express();
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 3000,
    currency: "usd",
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.post("/create-customer", async (req, res) => {
  try {
    const { email, name, metadata } = req.body;

    const customer = await stripe.customers.create({
      email,
      name,
      metadata,
    });

    res.json({ customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(3000, () => console.log("Server up"));
