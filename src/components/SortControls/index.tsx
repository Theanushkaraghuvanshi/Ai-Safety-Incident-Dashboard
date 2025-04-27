import React from "react";

interface SortControlsProps {
  sortOrder: string;
  onChange: (order: string) => void;
}

const SortControls: React.FC<SortControlsProps> = ({ sortOrder, onChange }) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        value={sortOrder}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default SortControls;
