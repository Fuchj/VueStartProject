<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>附件正文1……</span>
  </div>
</template>

<script>

export default {
  name: 'Asd',
  data () {
    return {
      msg: '附加信息1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>