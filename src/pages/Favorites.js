import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1); // Remove the item at index
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Update localStorage
    setFavorites(updatedFavorites); // Update state
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">מועדפים</h1>
      {favorites.length === 0 ? (
        <p className="text-center">אין פריטים במועדפים</p>
      ) : (
        <ul className="list-group">
          {favorites.map((employee, index) => (
            <li key={index} className="list-group-item mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{`${employee.name.first} ${employee.name.last}`}</h5>
                  <p>גיל: {employee.dob.age}</p>
                  <p>מיקום: {`${employee.location.city}, ${employee.location.country}`}</p>
                </div>
                <div>
                  <img
                    src={employee.picture.medium}
                    alt={`${employee.name.first} ${employee.name.last}`}
                    className="img-thumbnail"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <button className="btn btn-danger ml-3" onClick={() => removeFromFavorites(index)}>
                    מחק
                  </button>
                  {/* קישור לעמוד פרטים נוספים */}
                  <Link
                    to={`/employee/${employee.login.uuid}`}
                    state={{ employee }}
                    className="btn btn-info mt-2 ml-3"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <span className="mr-2">פרטים נוספים</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0 1A9 9 0 1 1 8-1a9 9 0 0 1 0 18z"/>
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897-.287 1.068.52 1.14.597.05.929-.176 1.021-.69.008-.043.018-.087.029-.131l.34-1.63.287-.082c.294-.07.352-.176.288-.469l-.738-3.468c-.194-.897-.287-1.068.52-1.14.597-.05.929.176 1.021.69.008.043.018.087.029.131l.34 1.63.287-.082c.294-.07.352-.176.288-.469l-.738-3.468c-.194-.897-.287-1.068.52-1.14.597-.05.929.176 1.021.69.008.043.018.087.029.131l.34 1.63.287-.082c.294-.07.352-.176.288-.469l-.738-3.468c-.194-.897-.287-1.068.52-1.14.597-.05.929.176 1.021.69.008.043.018.087.029.131l.34 1.63.287-.082c.294-.07.352-.176.288-.469l-.738-3.468c-.194-.897-.287-1.068.52-1.14.597-.05.929.176 1.021.69.008.043.018.087.029.131l.34 1.63.287-.082c.294-.07.352-.176.288-.469l-.738-3.468c-.194-.897-.287-1.068.52-1.14.597-.05.929.176 1.021.69.008.043.018.087.029.131l.34 1.63.287-.082c.294-.07.352-.176.288-.469l-.738-3.468c-.194-.897-.287-1.068.52-1.14.597-.05.929.176 1.021.69.008.043.018.087.029.131l.34 1.63.287-.082c.294-.07.352-.176.288-.469l-.738-3.468c-.194-.897-.287-1.068.52-1.14.597-.05.929.176 1.021.69.008.043.018.087.029.131l.34 1.63.287-.082c.294-.07.352-.176.288-.469l-.738-3.468c-.194-.897-.287-1.068.52-1.14.597-.05.929.176 1.021.69.008.043.018.087.029.131l.34 1.63.287-.082c.294-.07.352-.176.288-.469l-.738-3.468c-.194-.897-.287-1.068.52-1.14.597-.05.929.176 1.021.69.008.043.018.087.029.131l.34 1.63.287-.082c.294-.07.352-.176.288-.469zM8.002 6.132a.623.623 0 1 1 1.246 0 .623.623 0 0 1-1.246 0z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
