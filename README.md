# 🌿 Paradise Nursery - Houseplant Shopping Web App

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux)
![Status](https://img.shields.io/badge/Status-Deployed-brightgreen)

**Paradise Nursery** is a responsive, single-page houseplant shopping app built using **React**, **Redux Toolkit**, and **Vite**. Browse a variety of houseplants, add them to your cart, and manage quantities before checkout — all in a seamless experience.

🔗 **Live Demo**: [https://badalrai21.github.io/paradise-nursery-IBM/](https://badalrai21.github.io/paradise-nursery-IBM/)

---

## 🌱 Features

- 🖼️ Attractive Landing Page with background and CTA
- 🪴 Product Listing with 6+ houseplants and Add to Cart buttons
- 🛒 Real-time Shopping Cart with quantity updates and dynamic totals
- 📦 Redux-powered cart state
- 🔄 Dynamic cart icon in header
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚀 Deployed via GitHub Pages

---

## 📁 Project Structure

paradise-nursery/
├── public/
├── src/
│ ├── assets/ # Images (plants, backgrounds)
│ ├── components/ # Header, buttons
│ ├── pages/ # LandingPage, ProductPage, CartPage
│ ├── data/ # products.js
│ ├── redux/ # store.js, cartSlice.js
│ ├── App.jsx
│ └── main.jsx
├── dist/ # Production build (after build)
├── package.json
├── vite.config.js
└── README.md


---

## 🛠️ Installation & Development

1. Clone the repo:
   ```bash
   git clone https://github.com/badalrai21/paradise-nursery-IBM.git
   cd paradise-nursery-IBM
```bash
npm install
npm run dev
```

🚀 Deployment (GitHub Pages)
Add this line to your package.json:
```
json
Copy
Edit
```
"homepage": "https://badalrai21.github.io/paradise-nursery-IBM"
Your vite.config.js must include:

js
Copy
Edit
export default defineConfig({
  base: '/paradise-nursery-IBM/',
  plugins: [react()],
});
Then build and deploy:

bash
Copy
Edit
npm run build
npm run deploy
Ensure images in your products.js use relative imports:

js
Copy
Edit
import snake from '../assets/snake.jpg';
export default [{ id: 1, name: 'Snake Plant', image: snake, ... }]
📃 License
This project is licensed under the MIT License.

👤 Author
Badal Kumar
GitHub: @badalrai21

🙏 Acknowledgements
IBM SkillsBuild Frontend Course

React, Redux Toolkit & Vite community
