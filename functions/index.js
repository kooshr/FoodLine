import express from "express";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51M7YkzGshYRC4YtBEFZbIGgVs7EwCqJoiDmR7ZB1UQhKGUYULJPxSwEtDlUhoHYnRkJrj5oOIhGu2w2VcIGVBhhz00oMBStoNX",
  {
    apiVersion: "2022-11-15",
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

app.listen(3000, () => console.log("Server up"));
