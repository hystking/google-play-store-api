const index = require("./index")

index.handler({
  lang: "ja",
  country: "ja",
}, {
  done: function(e, res) {
    console.log(res)
  }
})
