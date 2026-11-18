# 🌱 KisanSmart 2.0 - Precision Agriculture & Intelligent Farm Management Platform

A production-grade, full-fledged Smart Agriculture web platform engineered for modern farmers, agricultural extension officers, and agronomists.

Built with **React 18 + Vite + Tailwind CSS**, featuring an installable offline-first **Progressive Web App (PWA)** architecture, multilingual support (**English, తెలుగు, हिन्दी**), real-time **Web Speech recognition & speech synthesis**, and interactive agronomic intelligence engines.

---

## 🚜 Complete Module Overview

### 🌱 Module A: Smart Farmer & Farm Management
- **Multi-Plot GPS Mapping**: Maintains multiple plots/fields per farmer with exact GPS coordinates, acreages, soil textures, and primary irrigation sources.
- **Interactive Satellite Plot Layout**: Visual aerial SVG representation of your farm layout, with live color-coded soil moisture status and crop boundaries.
- **Crop Lifecycle Stepper**: Tracks growth progression across 6 stages from *Land Preparation & Sowing*, *Germination*, *Vegetative*, *Flowering & Fruit Setting*, to *Harvest*.
- **Interactive Plot Controls**: Add new plots, edit existing plots, delete plots, and update farmer credentials (including Kisan Credit Card / Farmer ID).

### 🌾 Module B: AI-Based Crop Recommendation Engine
- **Multivariate Decision Engine**: Evaluates Soil Type, NPK Macronutrient levels (kg/ha), Soil pH, Temperature (°C), Humidity (%), Rainfall (mm), Water Availability, Farm Season (Kharif, Rabi, Zaid), and Crop Rotation Synergy.
- **Resource & Fertilizer Breakdown**: Displays seed rate (kg/acre), fertilizer requirements (Urea, DAP, MOP bags per acre), expected labor man-days, and total water volume.
- **Side-by-Side Crop Comparison**: Modal tool to evaluate the top 2 recommended crops across yield, duration, water needs, and market demand.
- **Quick Scenarios**: One-click presets for *High Rainfall Zone*, *Drought / Low Water*, *High Nitrogen Soil*, and *Alkaline Black Soil*.

### 💧 Module C: Smart Irrigation & Soil Moisture Management
- **IoT Soil Moisture Telemetry**: Live sensor simulation and manual slider input for Volumetric Water Content (VWC %).
- **Connected Weather Postponement Rule**:
  > Automatically overrides scheduled irrigation when precipitation (≥10mm or >65% rain probability) is detected within the next 4–6 hours, preventing root asphyxiation, nutrient leaching, and wasted power.
- **Execute & Log Irrigation**: Action button to run an irrigation cycle, automatically calculating water dispensed (litres) and electricity consumed (kWh), raising soil moisture to optimal level, and appending to the history ledger.
- **Water Savings Metric**: Cumulative tally of water conserved through smart rain postponement.

### 🌦 Module D: Weather-Based Farming Alerts
- **Actionable Agricultural Advisories**: Translates raw meteorology into operational farm rules:
  - 🌧 *Heavy Rain* → Postpone irrigation & foliar broadcast.
  - 🌡 *High Heatwave* → Anti-transpirants, mulching & evening micro-irrigation.
  - 💨 *High Winds (>20 km/h)* → Strict pesticide spray ban against chemical drift.
  - ❄️ *Cold / Frost* → Late-night light sprinkler buffer to prevent frost damage.
- **Weather Scenario Simulator**: Test dynamic farm rules under simulated Heavy Rain, Heatwave, Wind Gusts, or Frost conditions.
- **12-Hour Hourly Radar & 7-Day Agronomic Outlook Matrix**.

### 🦠 Module E: Context-Aware Plant Disease Doctor
- **Live Device Camera & File Upload**: Real-time webcam/smartphone camera video streaming with viewfinder for instant leaf snapshots.
- **7 Comprehensive Pathology Models**:
  1. *Tomato Early Blight (Alternaria solani)*
  2. *Cotton Leaf Curl Virus (Begomovirus)*
  3. *Chili Anthracnose / Dieback (Colletotrichum capsici)*
  4. *Rice Blast (Magnaporthe oryzae)*
  5. *Potato Late Blight (Phytophthora infestans)*
  6. *Wheat Yellow / Stripe Rust (Puccinia striiformis)*
  7. *Maize Northern Corn Leaf Blight (Exserohilum turcicum)*
- **Crop Stage Impact Correlation**:
  > Directly assesses the active crop's growth stage (e.g. warning that infection during flowering causes 40-55% flower drop).
- **Dual Treatment Protocols**: Complete biological/organic options alongside chemical prescriptions with precise dilution per litre.
- **Weather-Integrated Spray Window**: Evaluates current wind speed and rainfall to prescribe the exact safe spray window.

### 🧪 Module F: Digital Soil Health Management Card (SHC)
- **Soil Health Scoring (0–100)**: Grades fertility based on N, P, K, pH, Organic Carbon (OC %), and Micronutrients (Zinc, Boron, Sulphur).
- **Nutrient Deficiency Analysis**: Detects deficient, optimal, or excess nutrient levels with targeted corrective advice.
- **Targeted Fertilizer Prescription**: Calculates required bags of Urea (46% N), DAP (18-46-0), and MOP (60% K) per acre.
- **Soil Test History Ledger**: Add new laboratory soil test entries with immediate dynamic graph updates.
- **Printable Soil Health Certificate**: Formats a government-standard Soil Health Card ready for printing or PDF export.

### 🧑‍🌾 Module G: Personalized Kisan AI Assistant
- **Plot-Aware Contextual Agronomist**: Pre-loaded with your active plot's live crop, growth stage, soil moisture, and local weather.
- **Interactive Multi-Turn Chatbot**: Contextually answers queries like *"Should I water my tomato crop today?"* or *"What fertilizer dose for flowering stage?"*.
- **Text-to-Speech (TTS)**: Reads out answers aloud in natural accents.
- **Speech-to-Text Voice Input**: Farmers can speak in English, Telugu, or Hindi.

### 📊 Module H: Farm Analytics & Profit Management
- **Input Cost Tracking**: Seeds, Fertilizers, Pesticides, Labour, Irrigation/Power, Machinery, and Transport.
- **Harvest & Sales Ledger**: Quantity harvested (Quintals), Selling rate, Mandi location, and Gross Revenue.
- **KPI Dashboards**: Total Cost, Gross Harvest Revenue, Net Profit/Loss, Profit Margin (%), Cost per Acre, Yield per Acre, and Return on Investment (ROI %).
- **Plot-Based Filtering**: View finances for all plots combined or isolate single plots.
- **CSV Data Export**: One-click download of the complete financial statement.

### 💰 Module I: Mandi Market Prices & Selling Intelligence
- **Live Mandi Rates**: Daily minimum, maximum, and modal prices across regional agricultural market committees for Tomato, Cotton, Chili, Paddy, and Maize.
- **14-Day Price Trend Charts**: Visual SVG trend graphs showing market price momentum.
- **Interactive "Where Should I Sell?" Calculator**:
  - Input harvest lot size (quintals) and select transport vehicle (Light Pickup, Tractor Trolley, Heavy Truck).
  - Computes Gross Revenue, 2-Way Fuel/Transport Freight, Market Cess (1%), and **Net Take-Home Cash in Hand** for every nearby market yard.
  - Highlights top-profit mandi with the extra cash advantage.

### 📱 Module J: Multilingual & Voice Interface
- **Three Languages**: **English**, **తెలుగు (Telugu)**, and **हिन्दी (Hindi)** with full UI localization.
- **Voice Assistant Overlay**: High-accessibility modal with pulsing audio visualizer, speech recognition, and synthesized voice readout.

### 📡 Module K: Offline / Low-Connectivity Mode
- **Client-Side Persistence**: Stores farmer profiles, plot data, soil records, and financial entries in `localStorage`.
- **Progressive Web App (PWA)**: Installable on Android, iOS, and Desktop with `manifest.json` and `sw.js` offline asset caching.
- **Offline Sync Queue**: Queues transactions while working in the field and provides one-click sync back to cloud servers when connectivity is restored.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

Server runs by default at `http://localhost:3000`.
