var goTo = function(handle){
  console.log('URL',handle)

  const links = {
      'linkedIn': 'https://www.linkedin.com/in/swapnilnakate7/',
      'twitter':'https://twitter.com/swapnilnakate7',
      'instagram':'https://www.instagram.com/swapnilnakate7/',
      'github':'https://github.com/swapnilnakate7',
      'youtube':'https://www.youtube.com/channel/UCEaNo3HDjynb4PUFHlcibTw',
      'donate':'https://www.buymeacoffee.com/SwapnilNakate7',
      'email':'mailto:nakate.swapnil7@gmail.com'
  }

  window.open(links[handle],'_blank');


}

module.exports = {goTo}