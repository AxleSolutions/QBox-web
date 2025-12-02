import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
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
