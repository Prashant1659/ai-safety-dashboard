import React, { useState } from 'react';

const IncidentForm = ({ addIncident }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      const newIncident = {
        id: Date.now(), 
        title,
        description,
        severity,
        reported_at: new Date().toISOString()
      };
      addIncident(newIncident);
      setTitle('');
      setDescription('');
      setSeverity('low');
    }
  };

  return (
    <div className="card mt-5 mb-5 shadow">
      <div className="card-body">
        <h4 className="card-title mb-4">Report New Incident</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              rows="3"
              required
            />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success">Submit Incident</button>
        </form>
      </div>
    </div>
  );
};

export default IncidentForm;
