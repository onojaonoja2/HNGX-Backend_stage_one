const express = require('express');
const app = express();
const port = 3000; 

// Middleware to parse query parameters
app.use(express.urlencoded({ extended: false }));

// Endpoint to handle GET requests
app.get('/api', (req, res) => {
  // Get query parameters
  const slack_name = 'Samuel Onoja'; 
  const track = 'backend';

  // Validate query parameters
  if (!slack_name || !track) {
    return res.status(400).json({ error: 'slack_name and track are required query parameters' });
  }

  // Get current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Get current UTC time
  const now = new Date();
  const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000).toISOString().split('.'[0] + 'Z';

  // GitHub URLs
  const githubRepoURL = 'https://github.com/onojaonoja2/HNGX-Backend_stage_one.git';
  const githubFileURL = `${githubRepoURL}/blob/main/app.js.ext`;

  // Response JSON
  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: githubFileURL,
    github_repo_url: githubRepoURL,
    status_code: 200,
  };

  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

