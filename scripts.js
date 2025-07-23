// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }),
)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    })
})

// Header background change on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
        header.style.background = "rgba(255, 255, 255, 0.95)"
        header.style.backdropFilter = "blur(10px)"
    } else {
        header.style.background = "var(--white)"
        header.style.backdropFilter = "blur(10px)"
    }
})

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
        }
    })
}, observerOptions)

// Observe all cards for animation
document.querySelectorAll(".product-category, .service-card, .additional-card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
})

// Add loading animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1"
})

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in effect to body
    document.body.style.opacity = "0"
    document.body.style.transition = "opacity 0.5s ease"

    // Trigger animations after a short delay
    setTimeout(() => {
        document.body.style.opacity = "1"
    }, 100)
})

// WhatsApp integration
function openWhatsApp() {
    const phoneNumber = "573211234567" // Replace with actual number
    const message = "Hola! Me interesa conocer más sobre sus productos y servicios para celulares 📱"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
}

// Add click event to WhatsApp float button
document.querySelector(".whatsapp-float a").addEventListener("click", (e) => {
    e.preventDefault()
    openWhatsApp()
})

// Service card hover effects
document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)"
    })
})

// Product category hover effects
document.querySelectorAll(".product-category").forEach((category) => {
    category.addEventListener("mouseenter", () => {
        category.style.transform = "translateY(-10px)"
    })

    category.addEventListener("mouseleave", () => {
        category.style.transform = "translateY(0)"
    })
})

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

// Add scroll to top button (optional)
const scrollButton = document.createElement("div")
scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>'
scrollButton.className = "scroll-to-top"
scrollButton.style.cssText = `
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--primary-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 999;
`

document.body.appendChild(scrollButton)

scrollButton.addEventListener("click", scrollToTop)

// Show/hide scroll to top button
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollButton.style.opacity = "1"
    } else {
        scrollButton.style.opacity = "0"
    }
})

// Contact form functionality (if needed)
function handleContactForm() {
    console.log("Contact form functionality can be added here")
}

// Price inquiry functionality
function inquirePrice(product) {
    const message = `Hola! Me interesa conocer el precio de: ${product}`
    const phoneNumber = "573211234567"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
}

// Add price inquiry to product cards
document.querySelectorAll(".product-category").forEach((category, index) => {
    const productTypes = ["Celulares", "Protección", "Accesorios"]
    category.addEventListener("click", () => {
        inquirePrice(productTypes[index])
    })
})