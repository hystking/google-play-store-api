const index = require("./index")

index.handler({
  lang: "ja",
  country: "ja",
  num: 10,
  fullDetail: true,
}, {
  done: function(e, res) {
    console.log(res)
  }
})
