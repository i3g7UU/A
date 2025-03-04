(function() {
    // Select all <a> elements with class "Johnny"
    let elements = document.querySelectorAll('a.folderclick');
    
    elements.forEach((element) => {
        // Check if the element's innerHTML contains the escaped <script> tag
        let textContent = element.innerHTML;
        
        // If the text content includes the escaped <script> tag
        if (textContent.includes('&lt;script&gt;') && textContent.includes('&lt;/script&gt;')) {
            // Remove the entire <a> tag from the DOM
            element.remove();  // This completely removes the <a> element and its content from the page
        }
    });
})();
