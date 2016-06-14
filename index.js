const gp = require("google-play-scraper")

exports.handler = function(event, context) {
  gp.list({
      collection: event.collection && gp.collection[event.collection.toUpperCase()],
      category: event.category && gp.category[event.category.toUpperCase()],
      age: event.age && gp.age[event.age.toUpperCase()],
      num: event.num && parseInt(event.num),
      start: event.start && parseInt(event.start),
      lang: event.lang && event.lang.toLowerCase(),
      country: event.country && event.country.toLowerCase(),
      fullDetail: event.fullDetail && parseInt(event.fullDetail),
  })
  .then(function(apps){
    context.done(null, apps)
  })
  .catch(function(e){
    context.done(e)
  })
}
