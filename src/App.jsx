import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Hero from "./components/Hero";
import KeyAchievements from "./components/KeyAchievements";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const handleDownloadPDF = async () => {
    const originalMain = document.querySelector('main');
    if (!originalMain) return;

    // 1. Clone the main content
    const clonedMain = originalMain.cloneNode(true);

    // 2. Create a specific container for PDF generation
    const pdfContainer = document.createElement('div');
    pdfContainer.className = 'pdf-mode'; 
    pdfContainer.appendChild(clonedMain);

    // 3. Append to body so it renders (off-screen/z-index)
    document.body.appendChild(pdfContainer);

    // 4. Setup jsPDF
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [1920, 1080],
      hotfixes: ['px_scaling']
    });

    // 5. Iterate and Capture each slide
    // Need to wait for images/fonts? Usually cloning works if loaded.
    const slides = clonedMain.querySelectorAll('.slide');
    
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        
        try {
            const canvas = await html2canvas(slide, {
                scale: 2, 
                useCORS: true,
                backgroundColor: '#ffffff',
                width: 1920,
                height: 1080,
                windowWidth: 1920,
                windowHeight: 1080,
                x: 0,
                y: 0,
                scrollX: 0,
                scrollY: 0
            });

            const imgData = canvas.toDataURL('image/jpeg', 0.95);

            if (i > 0) {
                doc.addPage([1920, 1080], 'landscape');
            }
            
            doc.addImage(imgData, 'JPEG', 0, 0, 1920, 1080);
            
        } catch (err) {
            console.error(`Error rendering slide ${i}:`, err);
        }
    }

    // 6. Save and Cleanup
    doc.save('MoonHoGyun_Portfolio_2026.pdf');
    document.body.removeChild(pdfContainer);
  };

  return (
    <div className="app">
      <header className="fixed-header">
        <div className="container header-content">
          <div className="logo">Moon Ho-gyun</div>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <button onClick={handleDownloadPDF} className="cta-button" style={{ backgroundColor: 'var(--color-text-primary)', marginLeft: '12px', cursor: 'pointer', border: 'none' }}>
              PDF Download
            </button>
            <a href="mailto:soulty321@gmail.com" className="cta-button" style={{ marginLeft: '12px' }}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <KeyAchievements />
        <Projects />
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default App;
