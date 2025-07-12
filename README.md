# Abhishek Paliwal's GitHub Pages Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-green)](https://abhishek-paliwal.github.io/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#license)

## 🎨 Overview

This repository hosts **Abhishek Paliwal's personal portfolio website** on GitHub Pages. It's a comprehensive collection of **creative web-based tools** and **wallpaper generators** designed for digital designers, bloggers, and content creators. The website serves as both a showcase of web development skills and a practical toolkit for creating visual content.

**Live Website:** [https://abhishek-paliwal.github.io/](https://abhishek-paliwal.github.io/)

## 📁 Repository Structure

```
abhishek-paliwal.github.io/
├── index.html                          # Main homepage
├── wallpapers-index.html               # Index of all wallpaper tools
├── favicon.ico                         # Website favicon
├── images/                             # Profile and static images
│   └── abhishek-150px.png             # Author profile image
├── sample-screenshots-of-wallpapers/   # Preview images for tools
│   ├── 01-sample-wallpaper-300px-long.jpg
│   ├── 02-sample-wallpaper-300px-long.jpg
│   └── ... (20 sample images)
├── MGGK-recipe-schema-markup-creator/  # Recipe schema generator tool
│   ├── recipe-schema-form-for-MGGK.html
│   ├── mggk-recipe-markup-maker.js
│   └── static/                        # UI framework and assets
└── wallpaper_creators/                # Main collection of design tools
    ├── 01-abhisheks-material-greetings-maker.html
    ├── 02-abhisheks-qlocktype-quote-maker.html
    ├── ... (20 different design tools)
    ├── JSON-templates-for-design/     # Pre-made design templates
    ├── bootstrap-alpha6-js-css/       # Bootstrap framework
    ├── css/                          # Stylesheets and Material Design
    ├── fonts/                        # Custom font collections
    ├── images/                       # Design elements and ornaments
    └── js/                          # JavaScript libraries and scripts
```

## 🛠️ Key Features & Tools

### 🎨 Wallpaper & Design Creators (20 Tools)

The heart of this repository is a collection of **20 interactive web-based design tools** that allow users to create custom graphics, wallpapers, and social media content:

#### **Text & Typography Tools:**
1. **Material Greetings Maker** - Create Material Design style greeting cards
2. **QlockType Quote Maker** - Generate stylized quote graphics with custom typography
3. **BigText SlabType Wallpaper Maker** - Create bold typography wallpapers
4. **Two-Color Gradient Text Quote** - Generate gradient text designs
5. **Highlighted Text Boxes** - Create text with highlighting effects
6. **Overlayed Text Boxes with Drop Shadows** - Add shadowed text overlays

#### **Image & Visual Tools:**
7. **Text on Image (Unsplash)** - Overlay text on Unsplash stock photos
8. **Text on Image (Polygonal)** - Add text to polygonal backgrounds
9. **Shadowed Image Card** - Create cards with shadow effects
10. **Long Shadow Wallpaper** - Generate long shadow graphics
11. **Elegant Retro Shadows** - Create vintage-style shadow effects

#### **Social Media & Content Tools:**
12. **Sponsored Post Cover Image** (MGGK) - Create sponsored content graphics
13. **Pinterest Food Cover Card** (MGGK) - Design food-related Pinterest pins
14. **Custom Image Cover for Blog Posts** (MGGK) - Generate blog post headers
15. **Statistics Card** (CONCEPRO) - Create data visualization cards
16. **Banner Images** (CONCEPRO) - Design web banners

#### **Creative & Artistic Tools:**
17. **Golden Champagne Card** - Create luxury-themed graphics
18. **Big Alphabet Card** - Generate large letter designs
19. **Circular Typography Div** (CONCEPRO) - Create circular text layouts
20. **Instagram-Like Color Grid Maker** - Generate colorful grid patterns
21. **Custom Graphic Book Covers** (CONCEPRO) - Design book cover graphics

### 🍳 MGGK Recipe Schema Markup Creator

A specialized tool for **food bloggers and recipe websites** to generate **Google-compliant Recipe Schema markup** in JSON-LD format. Features include:

- **Structured Data Generation:** Creates Google-recognized recipe markup
- **SEO Optimization:** Improves recipe visibility in search results
- **Complete Recipe Information:** Handles ingredients, instructions, nutrition, timing
- **Video Integration:** Supports YouTube video embedding
- **Real-time Preview:** Shows formatted output as you type

### 📚 Template Library

The repository includes an extensive collection of **pre-designed templates**:

- **40+ JSON Design Templates** categorized by format:
  - Wide & Square formats (25 templates)
  - Long formats for mobile/Pinterest (15 templates)
- **Template Categories:**
  - Business cards and banners
  - Social media graphics
  - Book covers and promotional materials
  - Food photography layouts

## 🔧 Technical Implementation

### **Frontend Technologies:**
- **Pure HTML5/CSS3/JavaScript** - No build process required
- **Material Design Components** - Modern UI framework
- **Materialize CSS** - Responsive design system
- **Bootstrap Alpha 6** - Alternative UI framework
- **Font Awesome Icons** - Comprehensive icon library
- **Google Fonts** - Typography variety

### **JavaScript Libraries:**
- **jQuery 3.7.1** - DOM manipulation and AJAX
- **Materialize.js** - Interactive components
- **FileSaver.js** - Client-side file downloads
- **Moment.js** - Date/time handling
- **Custom Scripts:**
  - `pali-wallpaper-maker1.js` - Core wallpaper generation
  - `pali-qlocktype.js` - Typography effects
  - `pali-bigtext-slabtype.js` - Large text rendering

### **Design Assets:**
- **Custom Font Collection** - 15+ font families including:
  - Circular, Didot, Century Gothic
  - Brush Script, Kingsize, Roboto variants
- **Ornamental Graphics** - 34 decorative elements
- **Material Icons** - Google's icon system

### **Canvas & Graphics:**
- **HTML5 Canvas API** - Real-time graphic generation
- **Client-side Image Processing** - No server dependencies
- **Export Capabilities** - PNG/JPG download functionality

## 🚀 Getting Started

### **Local Development:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhishek-paliwal/abhishek-paliwal.github.io.git
   cd abhishek-paliwal.github.io
   ```

2. **Serve locally:**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

### **Using the Tools:**

1. **Navigate to the main index:** Open `wallpapers-index.html`
2. **Select a design tool:** Click on any wallpaper creator
3. **Customize your design:** Use the interactive controls
4. **Export your creation:** Download as PNG or JPG

### **Recipe Schema Tool:**

1. **Open:** `MGGK-recipe-schema-markup-creator/recipe-schema-form-for-MGGK.html`
2. **Fill in recipe details:** Complete all required fields
3. **Generate markup:** Click "Create recipe markup code"
4. **Copy the code:** Use the generated JSON-LD in your website

## 🎯 Use Cases

### **For Content Creators:**
- Create social media graphics and quote cards
- Design blog post headers and featured images
- Generate Pinterest-optimized food photography layouts
- Build branded promotional materials

### **For Web Developers:**
- Learn HTML5 Canvas manipulation techniques
- Study Material Design implementation
- Understand client-side image processing
- Reference responsive design patterns

### **For Food Bloggers:**
- Generate Google-compliant recipe schema markup
- Improve SEO visibility for recipe content
- Create consistent recipe card formats
- Integrate with WordPress custom fields

### **For Designers:**
- Rapid prototyping of graphic concepts
- Template-based design workflows
- Typography experimentation
- Color scheme exploration

## 🔗 Related Projects

- **[My Ginger Garlic Kitchen](http://www.MyGingerGarlicKitchen.com)** - Food blog utilizing the recipe schema tool
- **[Concepro Digital Marketing](http://www.concepro.com)** - Digital agency tools and templates
- **[AbhishekPaliwal.com](http://www.AbhishekPaliwal.com)** - Personal portfolio website

## 📱 Browser Compatibility

- **Chrome** 60+ (Recommended)
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+

**Note:** Some Canvas-based features require modern browser support for optimal performance.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/new-design-tool`
3. **Make your changes:** Add new tools or improve existing ones
4. **Test thoroughly:** Ensure cross-browser compatibility
5. **Submit a pull request:** Describe your changes and benefits

### **Development Guidelines:**
- Follow the existing code style and structure
- Ensure responsive design principles
- Test on multiple devices and browsers
- Document any new dependencies or features

## 📄 License

This project is licensed under the **MIT License** - see below for details:

```
MIT License

Copyright (c) 2024 Abhishek Paliwal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👤 Author

**Abhishek Paliwal**
- **GitHub:** [@abhishek-paliwal](https://github.com/abhishek-paliwal)
- **Website:** [AbhishekPaliwal.com](http://www.AbhishekPaliwal.com)
- **LinkedIn:** [Abhishek Paliwal](https://linkedin.com/in/abhishekpaliwal)

## 🙏 Acknowledgments

- **Material Design** - Google's design system
- **Materialize CSS** - UI component framework
- **Font Awesome** - Icon library
- **Google Fonts** - Typography resources
- **Unsplash** - Stock photography integration
- **Bootstrap** - CSS framework components

---

**Made with ♥ by Abhishek Paliwal** | Last updated: July 2025