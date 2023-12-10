// App.js
import React from "react";
import SiteDateChangePage from "./SiteDateChangePage";
import AutoAssignPage from "./AutoAssignPage";
import electricians from "./electricianData.json";
import sites from "./rawSiteData.json";

const App = () => {
  const findAvailableElectricians = (grievance) => {
    return electricians.filter(
      (e) => e.grievanceElectrician === grievance && e.assignedSites.length < 3
    );
  };

  const assignElectricianToSite = (electrician, site) => {
    console.log(electrician, " ", site);
    electrician?.assignedSites.push({
      siteName: site.name,
      assignDate: new Date().toISOString(),
    });
    site.assignedElectrician?.push({
      electricianName: electrician.name,
      assignDate: new Date().toISOString(),
    });
  };

  const handleDateChange = (siteId, newInstallationDate) => {
    const site = sites.find((s) => s.id === siteId);
    if (site) {
      console.log(site);
      site.installationDate = newInstallationDate;
    }
  };

  const handleAutoAssign = () => {
    console.log(sites);
    sites.forEach((site) => {
      const availableGrievanceElectricians = findAvailableElectricians(true);
      const availableGeneralElectricians = findAvailableElectricians(false);

      if (site.grievance && availableGrievanceElectricians.length > 0) {
        assignElectricianToSite(availableGrievanceElectricians[0], site);
      } else if (!site.grievance && availableGeneralElectricians.length > 0) {
        assignElectricianToSite(availableGeneralElectricians[0], site);
      }
    });
  };

  return (
    <div>
      <SiteDateChangePage sites={sites} onDateChange={handleDateChange} />
      <AutoAssignPage onAutoAssign={handleAutoAssign} electricians={electricians} />
    </div>
  );
};

export default App;
