const catchAsyncError = require("../middlewares/catchAsyncError");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncError(async (req, res, next) => {
  // Code for processing regular payments
});

exports.processMembershipPayment = catchAsyncError(async (req, res, next) => {
  const { membershipPlanId } = req.body; // Assuming you pass the membership plan ID

  // Retrieve membership plan details based on the membershipPlanId
  const membershipPlan = membershipPlans.find(
    (plan) => plan.id === membershipPlanId
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: membershipPlan.price * 100, // Convert price to cents
    currency: "usd",
    description: `Membership Plan: ${membershipPlan.name}`,
    metadata: { integration_check: "membership_payment" },
    // You may need additional information for membership payment
  });

  res.status(200).json({
    success: true,
    client_secret: paymentIntent.client_secret,
  });
});
