# 🎮 GamePadX Server (Remote Play PC Server)

![License](https://img.shields.io/badge/License-Proprietary-red.svg)
![Security](https://img.shields.io/badge/Security-Local%20Network%20Only-green.svg)
![Encryption](https://img.shields.io/badge/Encryption-TLS%2FSSL%20RSA--2048-brightgreen.svg)

**GamePadX Server** is a lightweight, high-performance Windows application that pairs with the **GamePadX Android App**. It allows you to transform your smartphone into a virtual Xbox / PlayStation controller, touch mouse, and remote input device for PC gaming.

---

## 🛡️ Windows SmartScreen Warning: Why it Appears & How to Solve It

When launching `GamePadX_Server_Setup.exe` or `GamePadX_Server.exe`, Windows Defender SmartScreen may display the following popup:

![Windows Protected Your PC Screen](https://github.com/user-attachments/assets/96e0891a-d8e3-41c1-a42a-91acd2dd868e)

### ❓ Why is this screen showing?
* **Unsigned Executable**: Windows flags **any** standalone software executable or installer that does not carry a commercial **Code Signing Certificate** (which costs hundreds of dollars annually from vendors like DigiCert).
* **Reputation System**: Microsoft SmartScreen flags files based on download frequency. Until thousands of users download a specific version signature, Windows defaults to showing "Unrecognized App".
* **It does NOT mean the file is a virus or malware.**

---

### 💡 How to Solve & Run the Installer

1. On the **"Windows protected your PC"** screen, click on the **`More info`** text link directly underneath the main message.
2. A new button will appear at the bottom right corner labeled **`Run anyway`**.
3. Click **`Run anyway`** to proceed with installation.

---

## 🔒 100% Honest Privacy & Data Safety Policy (No Jargon, No Lies)

We believe in absolute transparency. Here is the exact truth about how GamePadX Server works, what it touches on your PC, and how your data is handled:

### 1. Zero External Cloud Connections
* **Local Network Only**: GamePadX Server operates **exclusively** on your local home network (LAN / Wi-Fi).
* **No Remote Telemetry**: The server never connects to external servers, cloud databases, analytics providers, or remote tracking systems.
* **No Outsider Access**: People outside your local Wi-Fi router cannot discover or access your PC server.

### 2. Encrypted Data Transmission
* **TLS / SSL Socket Security**: All commands (controller inputs, mouse movements) transmitted between your phone and PC are encrypted using **2048-bit RSA + TLS/SSL sockets**.
* **Interception Protection**: Even if someone else is connected to the same Wi-Fi router, they cannot view or tamper with your controller input stream.

### 3. Safe Credential & Password Storage
* **PBKDF2 Password Hashing**: The PIN / password used to authorize connection between your phone and server is hashed using **PBKDF2-HMAC-SHA256** with a random salt.
* **Local APPDATA Storage**: Config files are saved locally inside `%APPDATA%\GamePadX` on your own computer. No plain-text passwords are ever broadcast or uploaded anywhere.

### 4. What the Server Does & Does NOT Do

| What GamePadX Server DOES | What GamePadX Server DOES NOT DO |
| :--- | :--- |
| ✅ Emulates virtual Xbox / PlayStation controller inputs (`vgamepad` & `ViGEmBus`) | ❌ **No spyware or screen recording** |
| ✅ Handles local keyboard & mouse control | ❌ **No scanning of your personal files or hard drive** |
| ✅ Displays connected device status on a local desktop window | ❌ **No background data selling or crypto-mining** |
| | ❌ **No background auto-updates without user action** |

---

## ⚡ Features & How It Works

* **Virtual Controller Emulation**: Uses the industry-standard **ViGEmBus** driver to emulate real Xbox 360 / DualShock gamepads recognized natively by Steam, Epic Games, EA, PC Game Pass, and emulators.
* **Low Latency Local Input**: UDP auto-discovery for instant connection over Wi-Fi, paired with encrypted TCP socket streams for zero-delay controls.
* **Trackpad & Gestures**: Smooth mouse cursor movements, left/right clicks, and vertical scroll accumulation.

---

## 💻 Installation & Setup

1. **Download Installer**: Download `GamePadX_Server_Setup_v1.exe` from the official release page.
2. **Run Installer**: Follow the SmartScreen bypass steps above if prompted.
3. **Driver Setup**: The installer automatically includes the required **ViGEmBus** driver (`ViGEmBus_1.22.0`). Allow driver installation when prompted.
4. **Pair App**:
   * Open GamePadX Server on your PC.
   * Open the GamePadX App on your Android phone (connected to the same Wi-Fi).
   * Scan the displayed QR Code or enter the 8-digit server PIN.

---

## 🛠️ Uninstallation

If you ever wish to remove the server:
1. Go to Windows **Settings > Apps > Installed apps** (or Control Panel > Programs and Features).
2. Select **GamePadX Server** and click **Uninstall**.
3. The clean uninstaller will automatically close running server instances, unregister background tasks, and clean up local configuration files.

---

## 📄 Copyright & Licensing

Copyright © GamePadX. All rights reserved.  
GamePadX Server is **proprietary software**. Unauthorized copying, redistribution, or modification of the binary releases is prohibited.
