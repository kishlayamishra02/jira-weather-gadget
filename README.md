
# ☁️ Jira Weather Gadget — Forge Dashboard App

A smart Forge-based Jira dashboard gadget that displays real‑time weather data based on a user‑configured city and country code.

> 🎯 Designed and developed by **Kishlaya Mishra** for the **Atlassian Forge Quest Hackathon (Apprentice Level)**.

---

## 🌟 Overview

This Jira gadget lets teams see live weather information without leaving their dashboard. After a one‑time configuration, it shows:

- 🌍 City and country  
- 🌦 Weather description  
- 🌡 Temperature and “feels like” temperature  
- 💧 Humidity &nbsp;|&nbsp; 💨 Wind speed  
- 🔁 A manual **Refresh** button for instant updates  

Powered by **Atlassian Forge** (UI Kit) and the [OpenWeatherMap API](https://openweathermap.org/api).

---

## 🛠 Built With

- 🧱 **Atlassian Forge** (Dashboard Gadget module)  
- ⚛️ **React** (Forge UI Kit)  
- ☁️ **OpenWeatherMap API**  
- 🧠 **JavaScript / Node.js**  

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js installed  
- Forge CLI (`npm install -g @forge/cli`)  
- Admin access to an Atlassian cloud site  

### 1 · Install dependencies
```bash
npm install
````

### 2 · Deploy the app

```bash
forge deploy
```

### 3 · Install on your Jira site

```bash
forge install
```

### 4 · Live‑develop with tunnel

```bash
forge tunnel
```

> After making changes, run `forge deploy` to persist them.

---

## 🧠 Key Learnings

* Full‑stack development with Forge UI Kit and Bridge
* Securely calling third‑party APIs within Forge resolvers
* Handling configuration context in Jira dashboard gadgets
* Debugging permission scopes and external egress domains

---

## 📸 Screenshots

*Add dashboard screenshots here once captured.*

---

## 📚 Resources

* [Forge Documentation](https://developer.atlassian.com/platform/forge/)
* [Dashboard Gadget Manifest Guide](https://developer.atlassian.com/platform/forge/manifest-reference/#jira-dashboard-gadget)
* [OpenWeatherMap API Docs](https://openweathermap.org/current)

---

## 👨‍💻 Author

**Kishlaya Mishra**
Computer Science student at BITS Pilani | Passionate about AI, Web Dev & Automation
[GitHub](https://github.com/kishlayamishra02) • [LinkedIn](https://www.linkedin.com/in/kishlayamishra)

---

## 🏆 Hackathon

Built for the **Atlassian Forge Quest Hackathon — Apprentice Level** to showcase Forge’s ability to integrate real‑world APIs into Jira.

---

## 🤝 Support

For Forge help → [Forge Get Help](https://developer.atlassian.com/platform/forge/get-help/)
For weather API questions → [OpenWeather Support](https://openweathermap.org/support)

```

✅ You can now copy this entire block into your `README.md` file directly.

Let me know if you want to add badges, screenshots, or GitHub action workflows too!
```
