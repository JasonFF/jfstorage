var storage = {
  set: function() {
    console.log('set')
  },
  get: function() {
    console.log('get')
  },
  download: function() {
    console.log('download')
  },
  upload: function() {
    console.log('upload')
  }
}
module.exports = storage