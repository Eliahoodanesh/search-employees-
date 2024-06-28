import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LeafletMap from '../components/LeafletMap';

const EmployeeDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { employee } = location.state || {}; // קבלת פרטי העובד מה-state של ה-React Router

  if (!employee) {
    return <div>לא נמצאו פרטים על העובד.</div>;
  }

  const { latitude, longitude } = employee.location.coordinates;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">פרטים על: {`${employee.name.first} ${employee.name.last}`}</h1>
      <div className="text-center">
        <img src={employee.picture.large} alt={`${employee.name.first} ${employee.name.last}`} className="img-thumbnail" style={{ width: '150px', height: '150px' }} />
        <p>גיל: {employee.dob.age}</p>
        <p>ארץ: {employee.location.country}</p>
        <p>עיר: {employee.location.city}</p>
        <p>אימייל: {employee.email}</p>
        <p>טלפון: {employee.phone}</p>
        <div style={{ margin: '20px 0' }}>
          <LeafletMap latitude={latitude} longitude={longitude} />
        </div>
        <button className="btn btn-primary mt-2" onClick={() => navigate(-1)}>חזור</button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
