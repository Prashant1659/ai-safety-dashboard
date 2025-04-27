import React, { useState } from 'react';

const IncidentList = ({ incidents }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleDetails = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="mt-4">
      {incidents.map(incident => (
        <div key={incident.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{incident.title}</h5>
            <p className="card-text">
              <strong>Severity:</strong> {incident.severity} | <strong>Reported:</strong> {new Date(incident.reported_at).toLocaleDateString()}
            </p>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => toggleDetails(incident.id)}
            >
              {expanded === incident.id ? 'Hide Details' : 'View Details'}
            </button>
            {expanded === incident.id && (
              <p className="mt-3">{incident.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncidentList;
