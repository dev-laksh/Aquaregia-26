document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {

        const btn = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        btn.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");

            /* close all first */
            items.forEach(i => {
                i.classList.remove("active");
                i.querySelector(".faq-answer").style.maxHeight = null;
            });

            /* open clicked one */
            if (!isOpen) {
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }

        });

    });

});
