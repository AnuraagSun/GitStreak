# GitStreak Chrome Extension 🚀

Hey there! 👋 Welcome to **GitStreak** – a super cool Chrome extension that helps you keep up your GitHub streak by making daily commits easy-peasy. It pops up a box when you open Chrome, letting you add text or auto-generate random C code to commit to your GitHub repo. No more stressing about breaking your streak! 😎

---

## 📋 Index

- [What’s GitStreak?](#whats-gitstreak-🤔)
- [Generating a Personal Access Token (PAT)](#Generating-a-Personal-Access-Token-(PAT))
- [WARNING](#WARNING)
- [How to Set Up GitHub with GitStreak](#how-to-set-up-github-with-gitstreak-🔧)
- [How to Use GitStreak](#how-to-use-gitstreak-✨)
- [Cool Features](#cool-features-🌟)
- [Troubleshooting](#troubleshooting-🛠️)
- [Folder Structure](#folder-structure-📁)

---

## What’s GitStreak? 🤔

GitStreak is like your daily GitHub buddy! It:
- Shows a pop-up box when you open Chrome.
- Lets you type text to commit to your GitHub repo (like `user_commit_<date>.txt`).
- If you’re lazy (no judgment! 😜), it auto-generates random C code and commits it (like `random_code_<date>.c`).
- Tracks your streak so the pop-up only bugs you once a day after you commit.
- Keeps your GitHub streak alive and kicking! 💪

---

## How to Set Up GitHub with GitStreak 🔧

Before you start, you need to connect GitStreak to your GitHub. Here’s how:

1. **Get a GitHub Token:**
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic).
   - Click "Generate new token."
   - Give it a name (like "GitStreak Token").
   - Check the `repo` box (so it can commit to your repo).
   - Copy the token – keep it safe! 🔒

2. **Load GitStreak in Chrome:**
   - Open Chrome and go to `chrome://extensions/`.
   - Turn on "Developer mode" (top-right corner).
   - Click "Load unpacked" and pick the `GitStreak` folder.
   - You’ll see the GitStreak icon in your toolbar. 🎉

3. **Add GitHub Details in GitStreak:**
   - Click the GitStreak icon or open Chrome to see the pop-up.
   - Fill in these fields:
     - **GitHub Token:** Paste the token you copied.
     - **Repo Owner:** Your GitHub username (e.g., `coolcoder123`).
     - **Repo Name:** The repo where you want commits (e.g., `streak-repo`).
   - These details are saved securely, so you only need to do this once. 😊
---
## Generating a Personal Access Token (PAT)

Generating a **Personal Access Token (PAT)** on GitHub is straightforward, even on the free tier. Here's a step-by-step guide:

---

### **Step 1: Go to GitHub Settings**
1. Log in to your GitHub account.
2. Click your profile icon (top-right corner) → **Settings**.

---

### **Step 2: Navigate to Developer Settings**
1. On the left sidebar, scroll down and click **Developer settings**.
2. Under Developer settings, click **Personal access tokens** → **Tokens (classic)**.

---

### **Step 3: Generate a New Token**
1. Click **Generate new token** → **Generate new token (classic)**.
2. Give your token a descriptive name (e.g., `my-laptop` or `api-tool`).

---

### **Step 4: Set Expiration**
- Choose an expiration period (default is 30 days).  
  💡 For security, **avoid "No expiration"** unless absolutely necessary.

---

### **Step 5: Select Scopes (Permissions)**
Check the permissions your token needs. For most common use cases:
- **Repo**: Full control of private repositories (for Git operations).
- **Workflow**: If using GitHub Actions.
- **Admin:org** (optional): For organization management.  
  🚨 **Only grant necessary permissions** to minimize security risks.

---

### **Step 6: Generate the Token**
1. Scroll to the bottom and click **Generate token**.
2. **Copy the token immediately** (you won’t see it again)!  
   ⚠️ Save it securely (e.g., password manager).

---

### **How to Use the Token**
- **Git Operations**: Use the token instead of your password when pushing/pulling via HTTPS.  
  Example:  
  ```bash
  git clone https://github.com/username/repo.git
  Username: your_github_username
  Password: YOUR_PAT_HERE
  ```

- **API Calls**: Include the token in the `Authorization` header:  
  ```bash
  curl -H "Authorization: Bearer YOUR_PAT_HERE" https://api.github.com/user
  ```

---

### **Security Tips**
- 🔒 **Never share your PAT** (treat it like a password).
- 🔄 Rotate tokens periodically (delete old ones under **Tokens**).
- 🛑 Revoke tokens immediately if compromised.

---

If you need more granular permissions, check GitHub’s [official guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).😊
---
# WARNING :
### ⚠️ **CRITICAL TOKEN SAFETY WARNING** ⚠️  
**Personal Access Tokens (PATs) are as sensitive as passwords!** Mishandling them can lead to:  
- **Account hijacking**  
- **Data breaches**  
- **Malicious code pushes**  
- **Repository deletion**  

---

### 🔐 **Never Ever Do These**  
1. **🚫 Hardcode tokens in code/public repos**  
   - *Risk:* Bots scrape GitHub for exposed tokens.  
   - *Consequence:* Attackers gain full access to your account.  

2. **🚫 Share tokens via email/messaging apps**  
   - *Risk:* Intercepted in transit or leaked later.  

3. **🚫 Grant unnecessary permissions (e.g., `admin:org` for simple CLI use)**  
   - *Risk:* Overprivileged tokens = Bigger blast radius.  

---

### ✅ **Best Practices**  
1. **🔑 Use the *least privileges* needed**  
   - Example: For Git pushes, only enable the `repo` scope.  

2. **⏳ Set short expiration periods** (e.g., 7-30 days)  
   - Rotate tokens like you would passwords.  

3. **🔒 Store tokens securely**  
   - Use a password manager (Bitwarden, 1Password, etc.).  
   - *Never* leave tokens in plaintext files.  

4. **🌐 Use environment variables** for tools/scripts:  
   ```bash
   # Instead of hardcoding:
   export GITHUB_TOKEN="ghp_YourTokenHere"
   ```  

5. **📈 Monitor token usage** in GitHub’s [Security Log](https://github.com/settings/security-log).  

6. **🗑️ Revoke unused tokens immediately** under [Tokens settings](https://github.com/settings/tokens).  

---

### 🚨 **If a Token is Compromised**  
1. **Revoke it NOW** in GitHub settings.  
2. **Audit logs** for suspicious activity.  
3. **Rotate all related credentials** (passwords, other tokens).  

---

```plaintext
💡 Reminder: GitHub tokens bypass 2FA! Treat them like nuclear launch codes.
```

For official guidance, refer to GitHub’s [Token Security Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).  

Stay safe! 🔒
---

## How to Use GitStreak ✨

Using GitStreak is super simple! Here’s what to do:

1. **Open Chrome:**
   - The pop-up box shows up automatically (unless you’ve already committed today).

2. **Add Text (Optional):**
   - Type something in the text box (like "I’m awesome!").
   - If you leave it blank, no worries – it’ll auto-generate C code for you. 🤓

3. **Check GitHub Details:**
   - Make sure your GitHub token, repo owner, and repo name are filled in.
   - If not, add them (see the setup section above).

4. **Commit It:**
   - Click the "Streak It" button.
   - Boom! Your text or C code gets committed to GitHub. 🚀
   - The pop-up closes, and you’re done for the day.

5. **Next Day:**
   - The pop-up comes back the next day if you haven’t committed yet.
   - It resets at midnight, so you can keep your streak going! 🌙

---

## Cool Features 🌟

- **Daily Pop-up:** Shows up every time you open Chrome (but only once after you commit).
- **Custom Text:** Add whatever you want to commit as a `.txt` file.
- **Random C Code:** If you’re out of ideas, it makes cool C code like:
  - Prime number checkers 🔢
  - Matrix math 🧮
  - Linked lists 📜
  - Stacks, queues, and more!
- **Streak Tracking:** Knows if you’ve committed today, so it doesn’t bug you twice.
- **Secure:** Your GitHub token is saved safely in Chrome storage. 🔐
- **Simple Design:** Clean, easy-to-use pop-up box. 😍

---

## Troubleshooting 🛠️

- **Pop-up Not Showing?**
  - Check if GitStreak is enabled in `chrome://extensions/`.
  - Make sure you haven’t already committed today.
  - Restart Chrome to trigger the pop-up.

- **GitHub Commit Fails?**
  - Double-check your GitHub token has `repo` access.
  - Make sure the repo owner and name are correct.
  - Check your internet connection. 🌐

- **Weird C Code?**
  - The C code is designed to work. If it looks odd, it’s just random but functional! 😄

---

## Folder Structure 📁

Here’s what’s in the `GitStreak` folder:

- `manifest.json` – Tells Chrome what the extension does.
- `popup.html` – The pop-up box layout.
- `popup.js` – Makes the pop-up work and talks to GitHub.
- `popup.css` – Makes the pop-up look pretty. 🎨
- `background.js` – Handles daily resets and pop-up triggers.
- `c_generator.js` – Creates random C code magic. ✨
- `icon48.png` & `icon128.png` – Cool icons for the extension.
- `README.md` – This file (hi there! 👋).

---

Here to help you keep that streak alive! 🔥 :)

---

That’s it! Now go rock your GitHub streak with GitStreak. You’ve got this! 💪
