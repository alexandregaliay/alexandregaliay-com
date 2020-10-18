<template>
  <div id="app">
    <div id="wrapper">
      <header>
        <svg id="logo" data-name="Λ" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
          <rect x="0" y="0" width="100%" height="100%" fill="#E06D06" />
          <path
            fill="#282C34"
            d="M72 520.23v-11.75q24.45-3.81 37.47-15.88t27.31-46.36L287 79.77h11.75l160 368.37q16.2 37.49 28 48.43T528 508.48v11.75H352.4v-11.75q30.17-2.53 38.9-10.16a24.92 24.92 0 008.7-19.69q0-14.92-14.61-48.59L275.87 177.58 174.25 426.87Q160 461.48 160 477.68q0 13.33 8.89 21.11t35.88 9.69v11.75z"/>
        </svg>
        <h1>Hello I'm {{ name }}</h1>
      </header>
      <main>
        <h2>I'm a {{ position }} currently based in {{ location }}</h2>
        <p>I'm really passionate about my work. I love discovering new tech, tricks &amp; tools.</p>
        <p>At this time I've got strong skills in Drupal and CSS but I'm learning everyday.</p>
        <p class="links">
          <a href="#">Email</a>
          <span>/</span>
          <a target="_blank" href="https://twitter.com/alexandregaliay">Twitter</a>
          <span>/</span>
          <a target="_blank" href="https://www.linkedin.com/in/alexandre-galiay/">LinkedIn</a>
          <span>/</span>
          <a target="_blank" href="https://codepen.io/alexandregaliay">Codepen</a>
          <span>/</span>
          <a target="_blank" href="https://github.com/alexandregaliay">GitHub</a>
        </p>
      </main>
    </div>
    <footer>
      <p>This website is my playground to try new stuff. &copy; AG</p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        name: "Alexandre Galiay",
        position: "full stack developer",
        location: "south of France"
      };
    },
  };
</script>

<style lang="scss" scoped>
  #wrapper {
    padding: 10%;
  }

  #logo {
    width: 50px;
  }
  h1 {
    font-family: "Vollkorn";
    font-weight: 400;
    font-size: 2em;
    line-height: 1.3em;
    margin:0.25em 0 0.5em 0;
    color: var(--primary-color);
  }

  h2 {
    margin: 0.5em 0;
    font-weight: 300;
  }

  p {
    line-height: 1.4em;
  }

  .links {
    margin: 0.5em 0 0 0;

    span {
      font-weight: 100;
    }
  }

  footer {
    padding: 0 10%;
    font-size: 0.6em;
    font-style: italic;
  }
</style>
