import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Helmet } from 'react-helmet-async';
import OnboardingPage from './pages/OnboardingPage';
import LoginPage from './pages/LoginPage';
import JoinRoomPage from './pages/JoinRoomPage';
import RoomFeedPage from './pages/RoomFeedPage';
import MyRoomsPage from './pages/MyRoomsPage';
import CreateRoomPage from './pages/CreateRoomPage';
import LecturerPanelPage from './pages/LecturerPanelPage';
import './App.css';

// Your Google OAuth Client ID (Web Client ID from Google Cloud Console)
// TODO: Replace with your actual Web Client ID from Google Cloud Console
// Example: '123456789-abcdefghijk.apps.googleusercontent.com'
const GOOGLE_CLIENT_ID = '531788294144-1ilnampcqrrjianujc9u9q27ts8uqhg3.apps.googleusercontent.com';

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Helmet>
        <title>QBox - Interactive Learning Platform</title>
        <meta name="description" content="QBox is an innovative interactive learning platform that enables real-time collaboration between lecturers and students through virtual rooms." />
        <meta name="keywords" content="QBox, learning platform, interactive education, virtual classrooms, real-time collaboration, online teaching" />
        <meta property="og:title" content="QBox - Interactive Learning Platform" />
        <meta property="og:description" content="Join QBox for engaging, interactive learning experiences with real-time collaboration tools." />
        <meta property="og:image" content="https://qbox-web.vercel.app/favicon.png" />
        <meta property="og:url" content="https://qbox-web.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QBox - Interactive Learning Platform" />
        <meta name="twitter:description" content="Join QBox for engaging, interactive learning experiences with real-time collaboration tools." />
        <meta name="twitter:image" content="https://qbox-web.vercel.app/favicon.png" />
        <link rel="canonical" href="https://qbox-web.vercel.app/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "QBox",
            "description": "An interactive learning platform for anonymous Q&A in classroom sessions",
            "url": "https://qbox-web.vercel.app/",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "creator": {
              "@type": "Organization",
              "name": "QBox Team"
            }
          })}
        </script>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join-room" element={<JoinRoomPage />} />
          <Route path="/room/:roomId" element={<RoomFeedPage />} />
          <Route path="/my-rooms" element={<MyRoomsPage />} />
          <Route path="/create-room" element={<CreateRoomPage />} />
          <Route path="/lecturer/:roomId" element={<LecturerPanelPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
