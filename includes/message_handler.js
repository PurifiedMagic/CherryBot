cherry.on("message", function(message) {
  if(message.content.match(/hello/i)) {
    message.channel.send('Hi');
  }
  else if(message.content.match(/Hello Cherry/i)) {
    message.channel.send('Hi, + @"userid"')
  }
})