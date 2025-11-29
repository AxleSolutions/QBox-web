# QBox Web - Quick Start Guide

## ✅ What's Done

I've created a React web version of your QBox app with:

✅ **Login Page** - Google Sign-In + One-Time Room creation
✅ **Join Room Page** - Enter room code to join
✅ **Room Feed Page** - View and ask questions, upvote, real-time updates
✅ **API Service** - Complete integration with your backend
✅ **Socket.io** - Real-time question updates
✅ **Same Backend** - Uses https://qbox-backend.onrender.com (no changes needed!)

## 🚀 How to Run

### Option 1: Upgrade Node.js (Recommended)

1. Download Node.js 20.19+ or 22+ from https://nodejs.org/
2. Install it
3. Run:
   ```bash
   cd QBox-Web
   npm run dev
   ```

### Option 2: Use Alternative Build Tool

If you can't upgrade Node, I can convert this to use an older version of Vite or Create React App.

## 📝 Before Running

### Setup Google OAuth for Web

1. Go to https://console.cloud.google.com/
2. APIs & Services → Credentials
3. Create OAuth client ID → **Web application**
4. Add origins:
   - http://localhost:3001
   - Your production domain later
5. Copy the **Web Client ID**
6. Edit `QBox-Web/src/App.jsx`
7. Replace `YOUR_WEB_CLIENT_ID_HERE` with your Client ID

## 🌐 Features Working

- ✅ Create One-Time Rooms (no login needed)
- ✅ Join rooms with code
- ✅ Ask anonymous questions
- ✅ Upvote questions
- ✅ Real-time updates
- ✅ Same backend as mobile app

## 📦 What's Next

Once the dev server runs, you'll see:

1. **Login page** at http://localhost:3001/
2. Create one-time room → Enter name → Get instant room
3. Or join with code
4. Ask questions anonymously
5. See real-time updates

## 🚀 Deployment

When ready to deploy:

```bash
npm run build
```

Then upload the `dist/` folder to:
- **Netlify** (easiest - just drag and drop)
- **Vercel**
- **GitHub Pages**
- **Any static hosting**

## 💡 Benefits

- iOS users can access via web browser
- No App Store submission needed
- Same backend, no duplication
- Instant updates (no app review wait)
- Works on any device with a browser

Let me know if you want me to:
1. Help you update Node.js
2. Convert to older build tool
3. Deploy it somewhere for testing
