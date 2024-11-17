import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  const eventType = evt.type

  if (eventType === 'user.created') {
    const {
        id: clerkId,
        username: username,
        email_addresses: [{
            email_address: email
        }],
        first_name: firstName,
        last_name: lastName,
        image_url: imageUrl,
        created_at: createdAt,
        updated_at: updatedAt,
        last_active_at: lastActiveAt
    } = evt.data

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            clerkId,
            username,
            email,
            firstName,
            lastName,
            imageUrl,
            createdAt,
            updatedAt,
            lastActiveAt
        }),
    });
    
  } else if (eventType === 'user.updated') {
    const {
        id: clerkId,
        username: username,
        email_addresses: [{
            email_address: email
        }],
        first_name: firstName,
        last_name: lastName,
        image_url: profilePicture,
        updated_at: updatedAt,
        last_active_at: lastActive
    } = evt.data

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/update/${evt.data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clerkId,
          username,
          email,
          firstName,
          lastName,
          profilePicture,
          updatedAt,
          lastActive
        }),
    });
  } else if (eventType === 'user.deleted') {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/delete/${evt.data.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clerkId: evt.data.id,
        }),
    });
  }

  return new Response('Webhook received', { status: 200 })
}