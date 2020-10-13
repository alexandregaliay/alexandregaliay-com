<template>
  <div id="app">
    <h1 class="title">
      {{ $prismic.richTextAsPlain(fields.title) }}
    </h1>
    <div>
      <prismic-rich-text
        :field="fields.subtitle"
        class="subtitle"
      />
    </div>
    <div>
      <prismic-rich-text :field="fields.body" class="description" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: {
        title: null,
        subtitle: null,
        body: null
      }
    };
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('home')
        .then((document) => {
          this.fields.title = document.data.title;
          this.fields.subtitle = document.data.subtitle;
          this.fields.body = document.data.body
        })
    }
  },
  created () {
    this.getContent();
  }
}
</script>
