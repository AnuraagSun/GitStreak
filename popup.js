document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('userInput');
  const streakButton = document.getElementById('streakButton');
  const statusDiv = document.getElementById('status');
  const githubTokenInput = document.getElementById('githubToken');
  const repoOwnerInput = document.getElementById('repoOwner');
  const repoNameInput = document.getElementById('repoName');

  // Load saved GitHub settings
  chrome.storage.local.get(['githubToken', 'repoOwner', 'repoName'], (result) => {
    if (result.githubToken) githubTokenInput.value = result.githubToken;
    if (result.repoOwner) repoOwnerInput.value = result.repoOwner;
    if (result.repoName) repoNameInput.value = result.repoName;
  });

  streakButton.addEventListener('click', async () => {
    const inputText = userInput.value.trim();
    const githubToken = githubTokenInput.value.trim();
    const repoOwner = repoOwnerInput.value.trim();
    const repoName = repoNameInput.value.trim();
    const today = new Date().toISOString().split('T')[0];

    // Save GitHub settings
    chrome.storage.local.set({ githubToken, repoOwner, repoName });

    // Validate GitHub settings
    if (!githubToken || !repoOwner || !repoName) {
      statusDiv.textContent = 'Please enter GitHub token, repo owner, and repo name.';
      return;
    }

    // Check if commit has already been made today
    chrome.storage.local.get(['lastCommitDate'], async (result) => {
      if (result.lastCommitDate === today) {
        statusDiv.textContent = 'Commit already made today!';
        return;
      }

      let content = inputText;
      let fileName = `user_commit_${today}.txt`;

      // If no input, generate random C code
      if (!content) {
        content = generateRandomCCode();
        fileName = `random_code_${today}.c`;
      }

      // Commit to GitHub
      try {
        await commitToGitHub(fileName, content, `Daily streak commit for ${today}`, githubToken, repoOwner, repoName);
        statusDiv.textContent = 'Commit successful!';
        chrome.storage.local.set({ lastCommitDate: today });
        window.close(); // Close popup after commit
      } catch (error) {
        statusDiv.textContent = 'Error: ' + error.message;
      }
    });
  });
});

async function commitToGitHub(fileName, content, message, token, owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${fileName}`;
  const encodedContent = btoa(unescape(encodeURIComponent(content))); // Base64 encode content

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message,
      content: encodedContent
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to commit to GitHub');
  }
}
