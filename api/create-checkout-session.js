import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end("Method Not Allowed");
    return;
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = req.headers.origin || `https://${req.headers.host}`;
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "1:1 Strategy Call – $100 Commitment Credit" },
            unit_amount: 10000,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/schedule.html`,
      cancel_url: `${origin}/`,
      metadata: { type: "strategy_call" },
    });
    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(400).json({ error: "create_failed" });
  }
}
