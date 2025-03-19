document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form validation
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
        this.reset();
    });

    // Change navbar color on scroll
    window.addEventListener("scroll", function() {
        document.querySelector("header").style.background = window.scrollY > 50 ? "#111" : "#222";
    });
});
