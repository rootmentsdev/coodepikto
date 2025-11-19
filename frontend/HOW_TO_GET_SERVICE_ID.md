# How to Get Your EmailJS Service ID

## Where to Find Your Service ID

### Step 1: Log in to EmailJS Dashboard
1. Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Log in with your EmailJS account

### Step 2: Navigate to Email Services
1. In the left sidebar, click on **"Email Services"** (or go to: https://dashboard.emailjs.com/admin/integration)

### Step 3: Find Your Service
1. You'll see a list of your email services
2. Look for your Gmail service (the one connected to codepikto@gmail.com)
3. Under the service name, you'll see the **Service ID**
   - It will look like: `service_xxxxxxx` or `service_abc123`

### Step 4: Copy the Service ID
1. Click on your Gmail service
2. In the service details page, you'll see:
   - **Service ID**: `service_xxxxxxx` ← Copy this!
   - Service Name: Gmail (or your custom name)
   - Connected Account: codepikto@gmail.com

---

## Example

Your Service ID will look like one of these:
- `service_abc123`
- `service_gmail123`
- `service_xxxxx`

**It always starts with `service_` followed by letters and numbers.**

---

## If You Don't Have a Service Yet

If you haven't created a Gmail service yet:

1. In EmailJS Dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with your Gmail account (codepikto@gmail.com)
6. Grant permissions
7. After connecting, you'll see your **Service ID** on that page

---

## Once You Have Your Service ID

Update your code:

### Option 1: Create .env file (Recommended)
Create `frontend/.env` file:
```
VITE_EMAILJS_SERVICE_ID=service_your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=template_l04h4mb
VITE_EMAILJS_PUBLIC_KEY=uYiBVZwLUUJReowAt
```

### Option 2: Update Contact.jsx directly
Update line 17 in `frontend/src/components/Contact.jsx`:
```javascript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_your_actual_service_id_here';
```

---

## Quick Visual Guide

```
EmailJS Dashboard
├── Email Services ← Click here!
│   └── Gmail Service
│       ├── Service ID: service_xxxxxxx ← Copy this!
│       └── Connected: codepikto@gmail.com
├── Email Templates
│   └── Template ID: template_l04h4mb ✅ (you have this)
└── Account
    └── Public Key: uYiBVZwLUUJReowAt ✅ (you have this)
```

---

## Need Help?

If you can't find it:
1. Make sure you're logged into the correct EmailJS account
2. Check that you've created and connected a Gmail service
3. The Service ID is usually visible on the main Email Services page
4. If you created the service recently, refresh the page

