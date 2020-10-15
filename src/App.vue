<template>
  <div id="app">
    <h1>Hello I'm {{ name }}</h1>
    <h2>I'm a {{ position }} currently based in {{ location }}</h2>
    <p>I'm really passionate about my work. I love discovering new tech, tricks &amp; tools.</p>
    <p>At this time I've got strong skills in Drupal and CSS but I'm learning everyday.</p>
    <p class="links">
      <a href="#">Email</a>
      <span>/</span>
      <a href="#">LinkedIn</a>
      <span>/</span>
      <a href="#">GitHub</a>
      <span>/</span>
      <a href="#">Codepen</a>
    </p>
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
  h1 {
    font-family: "Alegreya";
    font-weight: 400;
    font-size: 2em;
    line-height: 1.3em;
    margin:1em 0;
    color: var(--primary-color);

    &:before {
      content: "Λ";
      font-family:"Volkorn";
      font-weight: 400;
      background: var(--primary-color);
      color: var(--background-color);
      margin: 0 0.4em 0 0;
      padding:0 0.1984em;
    }

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
</style>
