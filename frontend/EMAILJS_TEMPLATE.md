# EmailJS Template Configuration

Use this exact template configuration in your EmailJS dashboard for the Codepikto Studio contact form.

## Template Settings

### Template Name
```
Contact Form - Codepikto Studio
```

### Subject Line
```
New Contact Form Message from {{from_name}}
```

Or use this alternative:
```
Contact Form Submission: {{from_name}}
```

---

## Email Template Content

Copy and paste this template into your EmailJS template editor:

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

---

## Alternative Template (HTML Format)

If you want a more styled HTML template, use this:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #34AFB3; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h2 style="color: #FFFFFF; margin: 0;">New Contact Form Message</h2>
  </div>
  
  <div style="background-color: #F5F5F5; padding: 30px; border-radius: 0 0 8px 8px;">
    <p style="margin-bottom: 20px;">Hello,</p>
    <p style="margin-bottom: 30px;">You have received a new message through the Codepikto Studio website contact form.</p>
    
    <div style="background-color: #FFFFFF; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #34AFB3;">
      <p style="margin: 10px 0;"><strong>Name:</strong> {{from_name}}</p>
      <p style="margin: 10px 0;"><strong>Email:</strong> {{from_email}}</p>
    </div>
    
    <div style="background-color: #FFFFFF; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <p style="margin-top: 0;"><strong>Message:</strong></p>
      <p style="white-space: pre-wrap; margin: 0;">{{message}}</p>
    </div>
    
    <div style="text-align: center; padding-top: 20px; border-top: 1px solid #E5E5E5; margin-top: 30px;">
      <p style="color: #666; font-size: 12px; margin: 0;">
        Reply to: <a href="mailto:{{reply_to}}" style="color: #34AFB3;">{{reply_to}}</a>
      </p>
      <p style="color: #999; font-size: 11px; margin-top: 10px;">
        This email was automatically generated from the contact form on codepikto.studio
      </p>
    </div>
  </div>
</body>
</html>
```

---

## Variable Names Reference

Make sure your template uses these exact variable names (they are case-sensitive):

- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email address
- `{{message}}` - The message content
- `{{reply_to}}` - The reply-to email (same as from_email)
- `{{to_email}}` - The recipient email (codepikto@gmail.com)

---

## Step-by-Step Setup in EmailJS

1. **Log in to EmailJS Dashboard**
   - Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)

2. **Create New Template**
   - Click on **Email Templates** in the left sidebar
   - Click **Create New Template**

3. **Configure Template**
   - **Template Name**: Enter "Contact Form - Codepikto Studio"
   - **Subject**: Enter `New Contact Form Message from {{from_name}}`
   - **Content**: Copy and paste one of the templates above (plain text or HTML)

4. **Save Template**
   - Click **Save** button
   - Note down your **Template ID** (it will look like `template_xxxxxxx`)

5. **Update Your Code**
   - Open `frontend/src/components/Contact.jsx`
   - Replace `YOUR_TEMPLATE_ID` with your actual Template ID
   - Or add it to your `.env` file as `VITE_EMAILJS_TEMPLATE_ID`

---

## Testing the Template

After setting up:

1. Go to your website's contact form
2. Fill out the form with test data
3. Submit the form
4. Check codepikto@gmail.com inbox
5. You should receive an email with all the form details

---

## Troubleshooting

**If emails aren't arriving:**
- Check that all variable names match exactly (case-sensitive)
- Verify your Gmail service is connected properly
- Check your spam/junk folder
- Look at EmailJS dashboard logs for errors
- Make sure your Public Key, Service ID, and Template ID are correct

**If variables aren't showing:**
- Double-check variable names match: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{reply_to}}`
- Make sure you're using double curly braces: `{{variable_name}}`


