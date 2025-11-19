# EmailJS Setup Guide

To enable email functionality in the contact form, follow these steps:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** as your service provider
4. Follow the instructions to connect your Gmail account (codepikto@gmail.com)
5. Note down your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. **See EMAILJS_TEMPLATE.md for the complete template configuration**

Quick template:

**Template Name:** Contact Form - Codepikto Studio
**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello,

You have received a new message through the Codepikto Studio website contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}

Email: {{from_email}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to: {{reply_to}}

This email was automatically generated from the contact form on codepikto.studio
```

**Important:** Use these exact variable names:
- `{{from_name}}`
- `{{from_email}}`
- `{{message}}`
- `{{reply_to}}`

4. Save the template and note down your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxx`)
3. Copy this key

## Step 5: Update the Code
1. Open `frontend/src/components/Contact.jsx`
2. Replace the following constants with your actual values:
   - `EMAILJS_SERVICE_ID` - Your Service ID from Step 2
   - `EMAILJS_TEMPLATE_ID` - Your Template ID from Step 3
   - `EMAILJS_PUBLIC_KEY` - Your Public Key from Step 4

## Alternative: Using Environment Variables (Recommended for Production)

For better security, you can use environment variables:

1. Create a `.env` file in the `frontend` directory:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update `Contact.jsx` to use environment variables:
```javascript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

3. Add `.env` to your `.gitignore` file to keep your keys secure

## Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check your Gmail inbox (codepikto@gmail.com) for the message

## Troubleshooting
- Make sure all IDs and keys are correct
- Check that your Gmail service is connected properly
- Verify your template uses the correct variable names ({{from_name}}, {{from_email}}, {{message}})
- Check the browser console for any error messages

