import React, { useEffect, useState } from "react";
import { Incident } from "./types/Incident";
import FilterControls from "./components/FilterControls";
import SortControls from "./components/SortControls";
import IncidentList from "./components/IncidentList";
import NewIncidentForm from "./components/NewIncidentForm";
import "bootstrap/dist/css/bootstrap.min.css";

const mockData: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reportedAt: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reportedAt: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reportedAt: "2025-03-20T09:15:00Z",
  },
];

const App: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [selectedSeverity, setSelectedSeverity] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIncidents(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddIncident = (title: string, description: string, severity: string) => {
    const newIncident: Incident = {
      id: Date.now(),
      title,
      description,
      severity: severity as "Low" | "Medium" | "High",
      reportedAt: new Date().toISOString(),
    };
    const updatedIncidents = [newIncident, ...incidents];
    setIncidents(updatedIncidents);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const filteredIncidents = incidents
    .filter((i) =>
      selectedSeverity === "All" ? true : i.severity === selectedSeverity
    )
    .filter((i) => i.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime()
        : new Date(a.reportedAt).getTime() - new Date(b.reportedAt).getTime()
    );

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">AI Safety Incident Dashboard</h1>

      <NewIncidentForm onAddIncident={handleAddIncident} />

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search incidents..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <FilterControls selectedSeverity={selectedSeverity} onChange={setSelectedSeverity} />
      <SortControls sortOrder={sortOrder} onChange={setSortOrder} />

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <IncidentList incidents={filteredIncidents} searchTerm={searchTerm} />
      )}

      {showToast && (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div className="toast show bg-success text-white">
            <div className="toast-body">
              New incident reported successfully!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
