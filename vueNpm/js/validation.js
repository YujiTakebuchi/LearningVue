
var app2 = new Vue({
  el: '#app-2',
  watch: {
    message: function(newVal, oldVal) {
      this.error.require = (newVal.length < 1) ? true : false;
      this.error.tooLong = (newVal.length > 5) ? true : false;
    }
  },
  data: {
    message: 'Hello',
    error: {
      require: false,
      tooLong: false
    }
  }
})

