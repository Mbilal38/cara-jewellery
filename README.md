# Cara Fine Jewellery - Frontend Assessment

This project is a high-end, responsive e-commerce frontend built as a technical assessment. It focuses on a clean, luxury aesthetic, reusable component architecture, and modular code practices.

##  Live Demo
[Insert your Vercel deployment link here]

## 🛠 Tech Stack
* **Framework:** React (Vite)
* **Styling:** CSS Modules
* **Icons:** Lucide React
* **State Management:** React Hooks
* **Language:** JavaScript (ES6+)

##  Key Features
* **Component-Based Architecture:** Fully modular UI components for easy maintenance.
* **Responsive Design:** Mobile-first approach with grid and flexbox layouts.
* **Luxury UI/UX:** Custom typography, hover effects, and elegant dark-overlay image handling.
* **Performance:** Optimized asset loading with Vite.
* **Mock Data:** Product sections are rendered dynamically using JSON data.

## 🏗 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Mbilal38/cara-jewellery.git](https://github.com/Mbilal38/cara-jewellery.git)

Navigate to the project folder:

Bash
cd react-practice
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev

---
### Folder Structure
react-practice/
│
├── public/
│   ├── assets/              # Images for hero, categories, products, carousels
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/              # Static SVG assets & brand icons
│   │
│   ├── components/          # Reusable layout & global UI components
│   │   ├── announcement-bar.jsx
│   │   ├── header.jsx
│   │   └── footer.jsx
│   │
│   ├── data/                # Mock JSON data for dynamic rendering
│   │   ├── best-seller-data.json
│   │   ├── carousel-data.json
│   │   └── new-arrivals-data.json
│   │
│   ├── sections/            # Feature-specific page sections
│   │   ├── banner.jsx
│   │   ├── BestSeller.jsx
│   │   ├── Categories.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ImageText.jsx
│   │   ├── NewArrivals.jsx
│   │   ├── NewsLetter.jsx
│   │   ├── ProductCarousel.jsx
│   │   └── trust-bar.jsx
│   │
│   ├── styles/              # Scoped CSS styles for components & sections
│   │   ├── announcement-bar.css
│   │   ├── banner.css
│   │   ├── BestSeller.css
│   │   ├── Categories.css
│   │   ├── footer.css
│   │   ├── header.css
│   │   ├── HeroSection.css
│   │   ├── ImageText.css
│   │   ├── NewArrivals.css
│   │   ├── NewsLetter.css
│   │   ├── ProductCarousel.css
│   │   └── trust-bar.css
│   │
│   ├── App.css              # Global layout styles & overrides
│   ├── App.jsx              # Main application root component
│   ├── index.css            # Tailwind / Global baseline styles
│   └── main.jsx             # React entry point
│
├── .gitignore               # Ignored files & folders for Git
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML document template
├── package.json             # Dependencies & project scripts
├── README.md                # Project documentation & setup instructions
└── vite.config.js           # Vite bundler configuration

### 2. Code Review Checklist (Assessment Prep)
The assignment evaluator will be looking for specific professional standards. Based on our work, here is how your code stacks up:

*   **✅ Reusable Components:** You have successfully moved logic into `components/` and `sections/`. *Check:* Ensure every repeated element (like the `trust-bar` or `footer` links) uses props if it needs to be dynamic.
*   **✅ JSON Data Usage:** You are using `data/` files to map over items (like in `NewArrivals.jsx`). This is excellent and shows you know how to handle data-driven UI.
*   **✅ Responsiveness:** We used `grid-template-columns` and `flex-direction` to ensure the layout shifts correctly. *Tip:* Open your browser inspector and test the mobile/tablet views one last time to ensure no horizontal scrolling.
*   **✅ Clean Code:** You have removed dead code and properly named your functions and classes (e.g., `catagory-content`, `footer-brand`). 
*   **✅ Accessibility:** You included alt tags on images and proper semantic tags (`<section>`, `<h3>`, `<ul>`). This is a huge plus for reviewers.

### Final Deployment Step
Since you have pushed to GitHub:
1.  Go to [Vercel](https://vercel.com/dashboard).
2.  Click **Add New...** -> **Project**.
3.  Import your `cara-jewellery` repository.
4.  **Important:** Since your code is inside a `react-practice` folder, make sure the **Root Directory** setting in Vercel is set to `react-practice`.
5.  Click **Deploy**.

**You are ready to submit!** Good luck with the assessment—the UI you’ve built is professional and clean.
