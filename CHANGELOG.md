### CHANGELOG
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com), and this project adheres to [Semantic Versioning](https://semver.org).

## 1.9.0 - 

### 🔨 FIXED
- Chart for Home Assistant 2025.2.0+

---

## 1.8.3 - 2024-12-06

### 🔨 FIXED
- Not loading custom card due to dependecy issues

---

## 1.8.2 - 2024-09-26

### 🧹 Cleanup
- Package lock from yarn to pnpm
- Bumped various build/dev packages

---

## 1.8.1 - 2024-06-20

### 🔨 FIXED
- Fix chart by @MarcHagen in #6

---

## 1.8.0 - 2024-06-10

### 🔨 FIXED
- Update card to work with 2024.4.0+ by @MarcHagen in #5

---

## 1.7.1 - 2021-05-30

### ✨ NEW
- Adding precipitation probability (if exists in a weather object)

### 🔨 FIXED
- Language not getting updated. This was not properly initialized.

### 🧹 Cleanup
- Don't require sun
- Small code format cleanup

---

## 1.7.0 - 2021-05-30

### ✨ NEW
- Rewritten to TypeScript

### 📝 DOCUMENTATION
- Rewritten changelog, only formatting

### 🧹 Removed
- Language as an option. Now uses Home Assistant selected language.

---

## 1.6.3 - 2020-04-05

### 🔨 FIXED
- Fixed icons under graph looking weird ([#1](https://github.com/MarcHagen/weather-card/issues/1))

---

## 1.6.2 - 2020-02-17

### ✨ NEW
- Added option for locale
- Added wind force for metric (Bft)
- Added 1.0.2 version of animated icons
- General cleanup

### 🔨 FIXED
- Fixed wierd spacing for weather icons

---

## 1.6.1 - 2020-02-17

### 🔨 FIXED
- Hotfix error on string compare

---

## 1.6.0 - 2020-02-17

### ✨ NEW
- Adding WindForce for metric

---

## 1.5.0

### ✨ NEW
- Added graph possibility
- Added number of forecast values

---

## 1.2.0

### ✨ NEW
- Added UI editor
- Hide forecast when not available

---

## 1.1.0

### ✨ NEW
- Added sun rise and set times
- Added option for `name`

### 🔨 FIXED
- Some styling tweaks

---

1.0.1

### ✨ NEW
- Added state `clear-night` @AVirtualL
- Use hosted icons, option to use local icons with `icons:`
- Used local Lit @iantrich

### 🔨 FIXED
- Fixes for RTL @AVirtualL
