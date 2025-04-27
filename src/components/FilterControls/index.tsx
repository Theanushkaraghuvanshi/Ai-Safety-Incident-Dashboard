import React from "react";

interface FilterControlsProps {
  selectedSeverity: string;
  onChange: (severity: string) => void;
}

const severities = ["All", "Low", "Medium", "High"];

const FilterControls: React.FC<FilterControlsProps> = ({ selectedSeverity, onChange }) => {
  return (
    <div className="d-flex gap-2 mb-3">
      {severities.map((severity) => (
        <button
          key={severity}
          className={`btn ${selectedSeverity === severity ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => onChange(severity)}
        >
          {severity}
        </button>
      ))}
    </div>
  );
};

export default FilterControls;
