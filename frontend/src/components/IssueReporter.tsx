import React, { useState } from 'react';

const IssueReporter = () => {
  const [issue, setIssue] = useState('');
  const [report, setReport] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/report-issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ issue })
      });

      if (response.ok) {
        const data = await response.json();
        setReport(data.message);
      } else {
        setReport('Error reporting issue.');
      }
    } catch (error) {
      console.error('Error:', error);
      setReport('Error reporting issue.');
    }
  };

  return (
    <div>
      <h3>Report an Issue</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="Describe the issue..."
        />
        <button type="submit">Report</button>
      </form>
      {report && <p>{report}</p>}
    </div>
  );
};

export default IssueReporter;