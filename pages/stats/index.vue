<template lang="html">
  <div class="stats-container container wrap justify-content-center">

    <div class="stats-container--iframe">
      <iframe :src="config.url" width="480" height="520" id="ifrm"></iframe>
      <div class="margin-top-10">
        <button type="button" name="button" class="btn btn-primary" @click="stats()">Generate stat</button>
      </div>
    </div>

    <div class="flex-grow-1">
      <ul class="stats-ul" id="result">
      </ul>
    </div>

  </div>
</template>

<script>
  // import metadataparser from 'html-metadata'
  // const {getMetadata} = require('html-metadata');
  import {
    mapState
  }
  from 'vuex'

  export default {
    components: {},
    computed: {
      ...mapState(['config']),
    },
    methods: {
      stats: function() {
        var ifrm = document.getElementById('ifrm');
        var win = ifrm.contentWindow; // reference to iframe's window
        var doc = ifrm.contentDocument ? ifrm.contentDocument : ifrm.contentWindow.document;
        var x = doc.getElementsByTagName('META');

        for (var i = 0; i < x.length; i++) {
          var txtResult = `${txtResult} <li><strong>${x[i].name}</strong> <span>${x[i].content}</li>`
        }

        var resultDiv = document.getElementById("result")
        document.getElementById("result").innerHTML = txtResult;
        this.statsResult = txtResult

      }
    },
    data() {
      return {
        statsResult: null
      }
    }
  }
</script>

<style lang="scss">
  iframe {
    max-width: 100%;
  }

  * {
    color: #fff;
  }

  .stats-container {
    margin-top: 50px;
    .stats-container--iframe {
      margin: 25px 50px 0 50px;
    }
  }

  .stats-ul {
    li {
      margin-top: 20px;
      list-style: none;
      span {
        color: $grey;
      }
    }
  }
</style>
