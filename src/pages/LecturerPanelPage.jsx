import { useNavigate } from 'react-router-dom';

export default function LecturerPanelPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Lecturer Panel</h1>
      <p>This feature is coming soon!</p>
      <button className="btn btn-primary" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}
