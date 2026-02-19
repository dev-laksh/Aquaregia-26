 // Simple Accordion Logic
        const acc = document.getElementsByClassName("faq-question");
        
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                // Toggle active class on parent item
                this.parentElement.classList.toggle("active");
                
                // Toggle max-height for slide effect
                const panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }