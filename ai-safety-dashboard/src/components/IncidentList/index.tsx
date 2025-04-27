import React, { useState } from "react";
import { Incident } from "../../types/Incident";

interface IncidentListProps {
  incidents: Incident[];
  searchTerm: string;
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents, searchTerm }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const highlightText = (text: string) => {
    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <mark key={index}>{part}</mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const getBadgeColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-danger";
      case "Medium":
        return "bg-warning text-dark";
      case "Low":
        return "bg-success";
      default:
        return "bg-secondary";
    }
  };

  if (incidents.length === 0) {
    return <p className="text-center text-muted mt-4">No incidents to display.</p>;
  }

  return (
    <div className="row">
      {incidents.map((incident) => (
        <div key={incident.id} className="col-md-6 mb-3">
          <div
            className="card h-100 shadow-sm hover-grow"
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onClick={() => toggleExpand(incident.id)}
          >
            <div className="card-body">
              <h5 className="card-title">{highlightText(incident.title)}</h5>
              <span className={`badge ${getBadgeColor(incident.severity)} mb-2`}>
                {incident.severity}
              </span>
              <p className="card-text">
                <small className="text-muted">
                  {new Date(incident.reportedAt).toLocaleDateString()}
                </small>
              </p>
              {expandedId === incident.id && (
                <p className="card-text">{incident.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncidentList;
