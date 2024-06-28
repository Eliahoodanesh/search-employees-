import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tmu1 from '../img/tmu1.jpg';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [employees, setEmployees] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=10`);
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      const data = await response.json();
      setEmployees(data.results);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleAddToFavorite = (employee) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(employee);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <div className="container mt-5">
      <img src={tmu1} alt='logo' className='background-image'></img>
      <h1 className="text-center">חיפוש עובדים</h1> {/* מרכז את הכותרת */}
      <div className="search-container d-flex justify-content-center mb-3">
        <div className="input-group" style={{ maxWidth: '500px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="חפש"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleSearch}>חיפוש</button>
          </div>
        </div>
      </div>
      <ul className="list-group">
        {employees.map(employee => (
          <li key={employee.login.uuid} className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <h5>{`${employee.name.first} ${employee.name.last}`}</h5>
                <p>גיל: {employee.dob.age}</p>
                <p>מיקום: {`${employee.location.city}, ${employee.location.country}`}</p>
              </div>
              <div>
                <img src={employee.picture.medium} alt={`${employee.name.first} ${employee.name.last}`} className="img-thumbnail" style={{ width: '100px', height: '100px' }} />
                <button onClick={() => handleAddToFavorite(employee)} className="btn btn-outline-danger mt-2">הוסף למועדפים</button>
                <Link
                  to={`/employee/${employee.login.uuid}`}
                  state={{ employee }} // העברת פרטי העובד דרך ה-state של ה-React Router
                  className="btn btn-secondary mt-2"
                >
                  פרטים נוספים
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
