
# GitStreak Chrome Extension 🚀

Keep your GitHub streak alive effortlessly! GitStreak prompts you to make daily commits via text or auto-generated C code. Perfect for maintaining your green grid. 🌱

---

## 📋 Table of Contents
- [What is GitStreak?](#what-is-gitstreak-)
- [Quick Start Guide](#quick-start-guide-)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Security Guide](#security-guide-)
  - [PAT Generation](#-generating-a-personal-access-token-pat)
  - [Token Safety](#-critical-token-safety-warning)
- [Usage Guide](#usage-guide-)
- [Features](#features-)
- [Troubleshooting](#troubleshooting-)
- [Project Structure](#project-structure-)

---

## What is GitStreak? 🤖

A Chrome extension that helps you maintain GitHub streaks by:
- 🗓️ Daily reminders when you open Chrome
- ✍️ Manual text commits (`user_commit_<date>.txt`)
- 🤖 Auto-generated C code commits (`random_code_<date>.c`)
- 🔒 Secure token storage in Chrome's local storage
- ⏰ 24-hour cooldown period to prevent duplicate commits

---

## Quick Start Guide 🚦

### Prerequisites
- Chrome browser (v90+)
- GitHub account
- Repository write permissions

### Installation
1. **Get GitHub Token**  
   *(See [PAT Generation](#-generating-a-personal-access-token-pat) below)*

2. **Load Extension in Chrome**
   ```bash
   chrome://extensions/ → Enable "Developer mode" → Load unpacked → Select extension folder
   ```

3. **Configure GitStreak**
   ```yaml
   Click extension icon → Enter:
   - GitHub Token: ghp_YourTokenHere
   - Repo Owner: your_username
   - Repo Name: target_repository
   ```

---

## Security Guide 🔐

### 🔑 Generating a Personal Access Token (PAT)
1. GitHub Settings → Developer Settings → Personal access tokens
2. Permissions: **repo** (full control)
3. Expiration: 30 days (recommended)
4. Store securely: Use password managers like Bitwarden/1Password

### ⚠️ Critical Token Safety Warning
**Never:**
- 🚫 Commit tokens to version control
- 🚫 Share via unencrypted channels
- 🚫 Grant unnecessary permissions

**Always:**
- 🔄 Rotate tokens monthly
- 👁️ Monitor via [GitHub Security Log](https://github.com/settings/security-log)
- 🗑️ Revoke compromised tokens immediately

---

## Usage Guide 🎮

1. **Daily Prompt**  
   Popup appears on Chrome launch (if no commit today)

2. **Commit Options**  
   ```bash
   [Option 1] Enter custom text → Creates .txt file
   [Option 2] Leave blank → Generates C code
   ```

3. **Commit Workflow**  
   ```mermaid
   graph LR
   A[Open Chrome] --> B{Commit Today?}
   B -->|No| C[Enter Text/Generate Code]
   C --> D[Streak It!]
   D --> E[GitHub Commit]
   B -->|Yes| F[Quiet Mode]
   ```

---

## Features 🌟

| Feature                | Description                                  |
|------------------------|----------------------------------------------|
| Smart Reminders        | Only prompts once per 24 hours              |
| C Code Generator       | Creates functional programs (linked lists, math ops) |
| Secure Storage         | Encrypted token storage in Chrome            |
| Cross-Platform         | Works with all GitHub repos (public/private) |

---

## Troubleshooting 🛠️

**Issue** | **Solution**
---|---
Popup not appearing | 1. Check extension permissions<br>2. Verify `background.js` is active
Commit failures | 1. Validate PAT permissions<br>2. Check repo name spelling
C code errors | Intentionally minimal validation - focus on streak, not code quality

---

## Project Structure 📂

```bash
GitStreak/
├── manifest.json       # Extension metadata
├── popup/              # UI components
│   ├── popup.html
│   ├── popup.css
│   └── popup.js       # Commit logic
├── background.js       # Daily reset handler
├── c_generator/       # Code generation
│   ├── templates/
│   └── generator.js
└── icons/              # Extension artwork
```

