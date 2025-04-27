# Ai-Safety-Incident-Dashboard
A clean, responsive web dashboard to view, filter, sort, search, and report AI safety incidents.  
Built using **React**, **TypeScript**, **Vite**, and **Bootstrap 5**.

---

## 📦 Technology Stack

- **Framework**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/)
- **State Management**: Local React component state
- **Bundler/Tooling**: [Vite](https://vitejs.dev/)

## Install Project Dependencies This will install all required libraries (React, Bootstrap, etc.):
```npm install```

## Start the Development Server This will run the project locally
```npm run dev```

After starting successfully, visit:

http://localhost:5173
in your browser to view the dashboard.

## 📋 Core Features Implemented
Here’s what the application can do:

- Display AI Incidents: Shows a list of incidents with title, severity, and report date.

- Filter Incidents: Filter by severity (All, Low, Medium, High).

- Sort Incidents: Sort incidents by reported date (Newest First or Oldest First).

- View Details: Expand/collapse full descriptions for each incident.

- Add New Incident: Submit a form with title, description, and severity. Input validation ensures no empty fields.

- Responsive Design: The dashboard adjusts beautifully on mobile phones, tablets, and desktops.

- Loading Spinner: Shows a spinner while incidents are being processed.

- Search Functionality: Search incidents by title and highlight matching text.

- Toast Notifications: Display a success message when a new incident is reported.

- Empty States: User-friendly messages when no incidents are available.

## 🎨 Design Decisions and Reasoning
- React with TypeScript: Chosen for scalability, better maintainability, and type-safety.

- Bootstrap 5: Used to ensure mobile responsiveness quickly without writing custom CSS.

- Vite: Offers faster development experience compared to older Create React App setups.

- Component Structure: Dashboard functionality is broken into smaller, reusable React components (FilterControls, SortControls, IncidentList, NewIncidentForm) for better code clarity.

- State Management: Since the project is simple, local state was enough; no need for external libraries like Redux.

## ⚡ Challenges Faced
- Combining Filters, Sort, and Search: Ensuring all three work smoothly together without bugs was slightly tricky.

- Maintaining a Clean UI Across Devices: Special care was taken to make sure the dashboard looks good on both mobile and desktop screens.

- Expandable Descriptions: Managing toggle states individually for each incident required careful state management.
