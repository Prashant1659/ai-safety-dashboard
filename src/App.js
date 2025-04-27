import React, { useState } from 'react';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import FilterControls from './components/FilterControls';

const initialIncidents = [
  { id: 1, title: 'Biased Recommendation Algorithm', description: 'Algorithm favored certain demographics...', severity: 'Medium', reported_at: '2025-03-15T10:00:00Z' },
  { id: 2, title: 'LLM Hallucination in Critical Info', description: 'LLM provided incorrect safety info...', severity: 'High', reported_at: '2025-04-01T14:30:00Z' },
  { id: 3, title: 'Minor Data Leak via Chatbot', description: 'Chatbot exposed non-sensitive user metadata...', severity: 'Low', reported_at: '2025-03-20T09:15:00Z' }
];

function App() {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');

  const addIncident = (newIncident) => {
    setIncidents([...incidents, newIncident]);
  };

  const filteredIncidents = incidents.filter(incident => severityFilter === 'all' || incident.severity.toLowerCase() === severityFilter);

  const sortedIncidents = filteredIncidents.sort((a, b) => {
    return sortOrder === 'newest'
      ? new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
      : new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime();
  });

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">AI Safety Incident Dashboard</h1>
      
      <FilterControls
        severityFilter={severityFilter}
        setSeverityFilter={setSeverityFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <IncidentList incidents={sortedIncidents} />

      <IncidentForm addIncident={addIncident} />
    </div>
  );
}

export default App;
