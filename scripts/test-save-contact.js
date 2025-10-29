const fs = require('fs').promises;
const path = require('path');

async function save() {
  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'contact-submissions.json');
  await fs.mkdir(dataDir, { recursive: true });
  let submissions = [];
  try {
    const existing = await fs.readFile(filePath, 'utf8');
    submissions = JSON.parse(existing);
    if (!Array.isArray(submissions)) submissions = [];
  } catch (err) {
    // ignore
  }
  const entry = {
    name: 'Scripted Test User',
    email: 'script-test@example.com',
    message: 'This is a test entry created by test-save-contact.js',
    timestamp: new Date().toISOString(),
  };
  submissions.push(entry);
  await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), 'utf8');
  console.log('Saved test submission to', filePath);
}

save().catch(err => { console.error(err); process.exit(1); });
