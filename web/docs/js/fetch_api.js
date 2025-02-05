document.addEventListener("DOMContentLoaded", function () {
    fetch("js/api.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById("api-docs");
            container.innerHTML = "";

            data.functions.forEach(func => {
                const docBlock = `
                    <div class="code-container">
                        <h3>${func.name}</h3>
                        <p>${func.description}</p>
                        <pre><code class="language-python">${func.example}</code></pre>
                    </div>
                `;
                container.innerHTML += docBlock;
            });

            Prism.highlightAll();
        })
        .catch(error => console.error("Błąd ładowania API:", error));
});
