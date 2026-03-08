---
title: Privacy Policy — Score Buddy for Phase 10
description: Privacy policy for Score Buddy for Phase 10. Your data stays on your device.
image: icon.svg
---

# Privacy Policy for Score Buddy

**Effective Date:** March 6, 2026  
**Last Updated:** March 8, 2026

[← Home](https://scottbreendev.github.io/scorebuddyforphase10/) · [Support](https://scottbreendev.github.io/scorebuddyforphase10/support.html)

---

## 1. Overview

Score Buddy ("the app") is a Phase 10 score tracking companion for iOS. We are committed to protecting your privacy. This policy explains what data is collected, how it is used, and your rights as a user.

**Short version:** Your game data stays on your device. We collect only anonymous analytics to improve the app. We do not sell your data. We do not collect your name, email, or any personal information.

---

## 2. Data We Collect

### 2.1 Data You Provide (Stored Locally Only)

The following data is created by you and stored **only on your device** using SwiftData (Apple's local database framework):

| Data | Purpose | Leaves your device? |
|---|---|---|
| Player names | Track scores | No — local only |
| Game scores and round history | Score tracking | No — local only |
| Phase progress per player | Game tracking | No — local only |
| Location tags on games (optional) | Location-based stats | No — local only |
| Skip card actions | Skip tracking stats | No — local only |

This data is included in your device's **iCloud Backup** if you have iCloud Backup enabled in iOS Settings. Score Buddy does not control or access your iCloud Backup — it is managed entirely by Apple.

### 2.2 Analytics Data (Firebase Analytics)

Score Buddy uses **Firebase Analytics** (provided by Google) to collect **anonymous, aggregated usage data**. This helps us understand how the app is used so we can improve it.

We use `FirebaseAnalyticsWithoutAdId`, which means:
- ❌ No advertising identifier (IDFA) is collected
- ❌ No cross-app tracking
- ❌ You will **not** see an "App Tracking Transparency" permission prompt from this app

**What Firebase Analytics collects automatically:**
- App open / session start events
- App version and iOS version
- Device type (e.g. iPhone, iPad) — never a specific device identifier
- Country / region (coarse, from IP address — IP address itself is not stored)
- In-app purchase events (anonymous — product ID and price tier only, not linked to your Apple ID)
- Crash-free user rate

**Custom events we log:**

| Category | Events |
|---|---|
| Game | Game started / completed, round recorded, skip tracked |
| Monetisation | Paywall viewed (which feature triggered it), purchase completed, purchases restored |
| Features | Location tagged on a game, location insights viewed, which Insights sub-tab viewed |
| Location permission | Location permission requested / result |
| Players | Player added (manual entry or from Contacts), player customisation saved (avatar type, colour changed) |
| Feedback | Whether the user responded positively or negatively to the in-app rating prompt (no name or identity attached) |

None of these events include player names, scores, location names, or any content you enter into the app.

**Firebase Analytics Data Retention:** Google retains event-level data for 2 months and aggregated reporting data for up to 14 months, per Google's standard policy. See [Google's Privacy Policy](https://policies.google.com/privacy) for details.

### 2.3 Contacts (Optional)

If you choose to link a player to a contact, Score Buddy requests access to your Contacts. We only read the name and profile picture of contacts you explicitly select. Contact data is stored locally on your device and is never transmitted to any server.

### 2.4 Location (Optional)

If you choose to tag a game with a location, Score Buddy requests "When In Use" location access. We use **reduced accuracy** (approximate location only) and perform reverse geocoding to generate a human-readable location name (e.g. "Melbourne, Australia"). The approximate coordinates and generated name are stored locally on your device. Location data is never transmitted to any server other than Apple's CoreLocation reverse geocoding service.

---

## 3. Data We Do NOT Collect

- ❌ Your name, email address, or Apple ID
- ❌ Player names or any content you enter
- ❌ Precise location
- ❌ Advertising identifiers (IDFA / GAID)
- ❌ Health or financial data
- ❌ Photos or camera access

---

## 4. Third-Party Services

| Service | Provider | Purpose | Privacy Policy |
|---|---|---|---|
| Firebase Analytics | Google LLC | Anonymous usage analytics | [policies.google.com/privacy](https://policies.google.com/privacy) |
| Firebase Crashlytics | Google LLC | Anonymous crash reports | [policies.google.com/privacy](https://policies.google.com/privacy) |
| App Store / StoreKit | Apple Inc. | In-app purchases | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| iCloud Backup | Apple Inc. | Device backup (user-controlled) | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |

Score Buddy does not use any advertising networks, social media SDKs, or data brokers.

---

## 5. In-App Purchases

Score Buddy offers a one-time "Score Buddy Pro" in-app purchase. All purchase transactions are handled entirely by Apple via StoreKit. We receive only an anonymous transaction verification token from Apple — we never see your payment details, Apple ID, or any personal information related to the purchase.

Firebase Analytics logs the purchase event with the product ID (`com.pinecode.scorebuddy.pro.lifetime`) and price tier only, with no link to your identity.

---

## 6. Children's Privacy

Score Buddy is a family-friendly card game score tracker suitable for all ages. We do not knowingly collect personal information from children under 13. The analytics we collect are anonymous and do not include any personal data.

---

## 7. Data Security

All game data is stored locally on your device using Apple's SwiftData framework, protected by your device's security (Face ID / Touch ID / passcode). We do not operate any servers that store your personal data.

Firebase Analytics data is transmitted to Google over HTTPS and is subject to Google's security practices.

---

## 8. Your Rights

Since Score Buddy does not collect or store personal data on our servers, there is no personal data for us to provide, correct, or delete on request. All locally stored data (your games, players, scores) can be deleted by:
- Deleting individual players or games from within the app
- Deleting the app from your device (removes all local SwiftData)

To opt out of Firebase Analytics, you can disable "Share iPhone Analytics" in **iOS Settings → Privacy & Security → Analytics & Improvements**.

---

## 9. Changes to This Policy

We may update this policy from time to time. When we do, we will update the "Last Updated" date at the top. For significant changes, we will note it in the app's release notes.

---

## 10. Contact

If you have questions about this privacy policy, please contact:

**Score Buddy Support**  
Email: [scott.breen.dev@outlook.com](mailto:scott.breen.dev@outlook.com)  
Support page: [scorebuddyforphase10/support](https://scottbreendev.github.io/scorebuddyforphase10/support.html)

---

*Score Buddy is an unofficial scoring companion and is not affiliated with or endorsed by Mattel, Inc. Phase 10 is a trademark of Mattel, Inc.*
