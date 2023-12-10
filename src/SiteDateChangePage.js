// SiteDateChangePage.js
import React, { useState } from "react";

const SiteDateChangePage = ({ sites, onDateChange }) => {
  const [selectedSite, setSelectedSite] = useState("");
  const [newInstallationDate, setNewInstallationDate] = useState("");

  const handleDateChange = () => {
    onDateChange(selectedSite, newInstallationDate);
  };

  return (
    <div>
      <h2>Change Installation Date</h2>
      <select onChange={(e) => setSelectedSite(e.target.value)}>
        {sites.map((site) => (
          <option key={site.id} value={site.id}>
            {site.name} - {site.city}
          </option>
        ))}
      </select>
      <input
        type="date"
        onChange={(e) => setNewInstallationDate(e.target.value)}
      />
      <button onClick={handleDateChange}>Change Date</button>
    </div>
  );
};

export default SiteDateChangePage;
