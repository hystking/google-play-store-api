const index = require("./index")

index.handler({
  lang: "ja",
  country: "ja",
  num: 10,
  fullDetail: "0",
}, {
  done: function(e, res) {
    console.log(res)
  }
})
