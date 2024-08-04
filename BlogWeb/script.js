// script.js

document.addEventListener('DOMContentLoaded', function() {
    const yearRadios = document.querySelectorAll('input[name="year"]');
    const articlesContainer = document.querySelector('.home-articles');
    const articles = Array.from(document.querySelectorAll('.home-article'));

    yearRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            const selectedYear = this.value;
            filterArticles(selectedYear);
        });
    });

    function filterArticles(year) {
        // Clear the container
        articlesContainer.innerHTML = '<h2>Featured Articles</h2>';

        // Filter articles by selected year
        const filteredArticles = articles.filter(article => article.getAttribute('data-year') === year);
        const otherArticles = articles.filter(article => article.getAttribute('data-year') !== year);

        // Append filtered articles first
        filteredArticles.forEach(article => articlesContainer.appendChild(article.cloneNode(true)));
        // Append other articles
        otherArticles.forEach(article => articlesContainer.appendChild(article.cloneNode(true)));
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addBlogForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const blogPost = {
        title: form.title.value,
        author: form.author.value,
        date: form.date.value,
        content: form.content.value
      };
  
      let blogPosts = localStorage.getItem('blogPosts');
      blogPosts = blogPosts ? JSON.parse(blogPosts) : [];
      blogPosts.push(blogPost);
      localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  
      window.location.href = 'myBlog.html';
    });
  });
  
  