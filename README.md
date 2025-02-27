# GitStreak Chrome Extension 🚀

Hey there! 👋 Welcome to **GitStreak** – a super cool Chrome extension that helps you keep up your GitHub streak by making daily commits easy-peasy. It pops up a box when you open Chrome, letting you add text or auto-generate random C code to commit to your GitHub repo. No more stressing about breaking your streak! 😎

---

## 📋 Index

- [What’s GitStreak?](#whats-gitstreak-🤔)
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
