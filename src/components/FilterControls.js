import React from 'react';

const FilterControls = ({ severityFilter, setSeverityFilter, sortOrder, setSortOrder }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex gap-2">
        <select
          className="form-select"
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value)}
        >
          <option value="all">All Severities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <select
          className="form-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterControls;
