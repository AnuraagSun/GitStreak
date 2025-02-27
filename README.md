# GitStreak Chrome Extension 🚀

Never break your GitHub streak again! Commit daily via text or auto-generated C code with one click. 🔥

---

## 📋 Table of Contents  
- [What is GitStreak?](#what-is-gitstreak-)  
- [Setup Guide](#setup-guide-)  
- [Token Security Warning](#-token-security-warning-)  
- [How to Use](#how-to-use-)  
- [Features](#features-)  
- [Troubleshooting](#troubleshooting-)  
- [Project Structure](#project-structure-)  

---

## What is GitStreak? 🤔

A Chrome extension that:  
✅ Shows daily pop-up reminders  
✅ Lets you commit custom text or auto-generated C code  
✅ Securely stores your GitHub credentials  
✅ Tracks 24-hour commit cooldown  

---

## Setup Guide 🔧

### Step 1: Get GitHub Token
1. Go to [GitHub Tokens](https://github.com/settings/tokens)  
2. Click **Generate new token (classic)**  
3. Configure:  
   - Name: `GitStreak`  
   - Expiration: 30 days (recommended)  
   - Permissions: **repo** (ONLY THIS!)  
4. Copy token immediately ⚠️  

### Step 2: Install Extension
```bash
1. Open Chrome → chrome://extensions  
2. Enable "Developer mode" (top-right)  
3. Click "Load unpacked" → Select extension folder
```

### Step 3: Configure GitStreak
<img src="https://i.imgur.com/7QZJg8J.png" width="300" alt="GitStreak config screenshot">  

Fill in pop-up fields:  
- **GitHub Token:** Your copied token  
- **Repo Owner:** Your GitHub username  
- **Repo Name:** Target repository  

---

## ⚠️ Token Security Warning 🔐

**NEVER:**  
🚫 Commit tokens to code  
🚫 Share via email/chat  
🚫 Grant extra permissions  

**ALWAYS:**  
🔑 Store in password manager  
🔄 Rotate every 30 days  
👁️ Monitor [access logs](https://github.com/settings/security-log)  

**If compromised:**  
1. Revoke token IMMEDIATELY  
2. Audit repository actions  
3. Generate new token  

---

## How to Use ✨

1. **Open Chrome** → See pop-up  
2. **Choose commit type:**  
   - Type text → `user_commit_YYYY-MM-DD.txt`  
   - Leave blank → `random_code_YYYY-MM-DD.c`  
3. Click **Streak It!** → Done! 🎉  

<img src="https://i.imgur.com/5XwDk9i.gif" width="500" alt="Demo">  

---

## Features 🌟

| Feature                | Description                                  |
|------------------------|----------------------------------------------|
| Auto C Code            | Generates working C programs (math, DS, algos) |
| Secure Storage         | Encrypted Chrome storage for tokens         |
| Daily Lock             | Only prompts once per 24 hours              |
| Cross-Platform         | Works with public/private repos             |

---

## Troubleshooting 🛠️

**Issue** | **Fix**  
---|---  
No pop-up | 1. Check extension permissions<br>2. Reload Chrome  
Commit fails | 1. Verify repo exists<br>2. Check token permissions  
C code errors | Expected behavior - focus on streak, not code quality  

---

## Project Structure 📂

```
gitstreak/
├── manifest.json
├── popup/
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
├── background.js
├── c_generator/
│   ├── templates/
│   └── generator.js
└── icons/
    ├── icon48.png
    └── icon128.png
```


