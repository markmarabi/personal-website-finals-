<script setup>
</script>

<template>
  <div id="app">
    <header>
      <h1>Resources</h1>
    </header>

    <main>
      <p>Here are the resources I used to create my personal profile website:</p>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=Jq_Zebxa-YI&t=416s" target="_blank">
            YouTube Tutorial 1
          </a>
        </li>
        <li>
          <a href="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2" target="_blank">
            GitHub Repository
          </a>
        </li>
        <li>
          <a href="https://tangerine-hummingbird-1479b6.netlify.app/" target="_blank">
            Netlify Example
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=ldwlOzRvYOU&t=339s" target="_blank">
            YouTube Tutorial 2
          </a>
        </li>
        <li>
          <a href="https://fonts.google.com/selection/embed" target="_blank">
            Google Fonts
          </a>
        </li>
      </ul>

      <!-- 📨 Connect with Me Form -->
      <section style="margin-top: 2rem; text-align: center;">
        <h2>Connect with Me</h2>
        <form>
          <label>Email:</label><br />
          <input
            type="email"
            placeholder="Enter your email"
            style="width: 250px; padding: 8px; margin-top: 5px;"
          /><br /><br />
          <label>Message:</label><br />
          <textarea
            placeholder="Write your message here"
            rows="4"
            style="width: 250px; padding: 8px; margin-top: 5px;"
          ></textarea><br /><br />
          <button
            type="submit"
            style="
              padding: 8px 16px;
              background-color: #007bff;
              color: white;
              border: none;
              cursor: pointer;
              border-radius: 4px;
            "
          >
            Send Message
          </button>
        </form>
      </section>
    </main>

    <footer style="margin-top: 3rem;">
      <p>&copy; 2025 Mark Lyster Marabi</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #fafafa;
  color: #333;
}

header {
  background-color: #007bff;
  color: white;
  padding: 1rem;
}

main {
  margin: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin: 0.5rem 0;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
