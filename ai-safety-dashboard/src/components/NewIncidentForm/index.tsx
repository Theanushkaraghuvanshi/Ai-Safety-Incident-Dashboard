import React, { useState } from "react";

interface NewIncidentFormProps {
  onAddIncident: (title: string, description: string, severity: string) => void;
}

const NewIncidentForm: React.FC<NewIncidentFormProps> = ({ onAddIncident }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    onAddIncident(title, description, severity);
    setTitle("");
    setDescription("");
    setSeverity("Low");
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body mb-4 shadow-sm">
      <h5 className="mb-3">Report New Incident</h5>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default NewIncidentForm;
