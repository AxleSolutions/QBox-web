import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { roomsAPI } from '../services/api';
import './CreateRoomPage.css';

export default function CreateRoomPage() {
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState('');
  const [questionsVisible, setQuestionsVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleCreateRoom = async () => {
    if (roomName.trim().length === 0) {
      alert('Please enter a room name');
      return;
    }

    setLoading(true);

    try {
      const response = await roomsAPI.createRoom(roomName.trim(), questionsVisible);

      if (response.success) {
        const createdRoom = response.data;
        navigate(`/lecturer/${createdRoom._id}`, {
          state: {
            roomId: createdRoom._id,
            roomCode: createdRoom.roomCode,
            roomName: createdRoom.roomName,
            roomStatus: createdRoom.status,
            questionsVisible: createdRoom.questionsVisible
          }
        });
      } else {
        alert(response.message || 'Failed to create room');
      }
    } catch (error) {
      let errorMessage = 'Unable to create room';
      
      if (error.response) {
        errorMessage = error.response.data?.message || 'Server error';
      } else if (error.request) {
        errorMessage = 'Cannot reach server. Check your connection.';
      }
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-room-page">
      <div className="create-room-content">
        {/* Header */}
        <div className="header">
          <h1 className="title">Create Room</h1>
          <p className="description">
            Set up a new Q&A session for your students
          </p>
        </div>

        {/* Room Name Input */}
        <div className="input-group">
          <label className="input-label">Room Name</label>
          <input
            type="text"
            className="room-name-input"
            placeholder="e.g., Computer Science 101"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            maxLength={50}
          />
          <p className="input-hint">This name will be visible to students who join</p>
        </div>

        {/* Question Visibility Toggle */}
        <div className="visibility-section">
          <label className="visibility-label">Question Visibility</label>
          <p className="visibility-hint">
            Control whether students can see each other's questions
          </p>
          
          <div className="toggle-container">
            <button
              className={`toggle-option ${questionsVisible ? 'active' : ''}`}
              onClick={() => setQuestionsVisible(true)}
            >
              <span className="toggle-icon">👁️</span>
              <span className="toggle-text">Visible</span>
              <span className="toggle-description">
                Students can see all questions
              </span>
            </button>

            <button
              className={`toggle-option ${!questionsVisible ? 'active' : ''}`}
              onClick={() => setQuestionsVisible(false)}
            >
              <span className="toggle-icon">🔒</span>
              <span className="toggle-text">Private</span>
              <span className="toggle-description">
                Only you see all questions
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="button-container">
        <button
          className="primary-button"
          onClick={handleCreateRoom}
          disabled={roomName.trim().length === 0 || loading}
        >
          {loading ? 'Creating...' : 'Create & Share Code'}
        </button>
        
        <button
          className="ghost-button"
          onClick={() => navigate('/my-rooms')}
        >
          Back
        </button>
      </div>
    </div>
  );
}
