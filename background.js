chrome.runtime.onInstalled.addListener(() => {
  // Set up daily alarm for streak reset
  chrome.alarms.create('dailyReset', {
    periodInMinutes: 1440 // 24 hours
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'dailyReset') {
    const today = new Date().toISOString().split('T')[0];
    chrome.storage.local.get(['lastCommitDate'], (result) => {
      if (result.lastCommitDate !== today) {
        chrome.storage.local.set({ lastCommitDate: null });
      }
    });
  }
});

chrome.runtime.onStartup.addListener(() => {
  const today = new Date().toISOString().split('T')[0];
  chrome.storage.local.get(['lastCommitDate'], (result) => {
    if (result.lastCommitDate !== today) {
      chrome.action.openPopup();
    }
  });
});
