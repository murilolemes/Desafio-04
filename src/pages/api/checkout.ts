import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function checkout(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { lineItems } = req.body

  if (!lineItems) {
    return res.status(400).json({ error: 'Products not found.' })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItems,
  })

  return res.status(201).json({
    checkouUrl: checkoutSession.url,
  })
}
