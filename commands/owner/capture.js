/**
 * @file capture command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

const capture = xrequire('webshot');

exports.exec = async (Bastion, message, args) => {
  if (!args.length) {
    return Bastion.emit('commandUsage', message, this.help);
  }

  if (!/^(http[s]?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(args[0])) {
    return Bastion.emit('error', '', Bastion.i18n.error(message.guild.language, 'invalidInput', 'URL'), message.channel);
  }
  let options = {
    windowSize: {
      width: 1366,
      height: 768
    },
    shotSize: {
      width: 'all',
      height: 'all'
    },
    timeout: 15000,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A'
  };

  await capture(args[0], options, (err, renderStream) => {
    if (err) {
      return Bastion.emit('error', '', Bastion.i18n.error(message.guild.language, 'serverNotFound', args[0]), message.channel);
    }
    let imageBuffers = [];
    renderStream.on('data', (data) => {
      imageBuffers.push(data);
    });
    renderStream.on('end', () => {
      let imageBuffer = Buffer.concat(imageBuffers);
      if (imageBuffer.length > 0) {
        message.channel.send({
          file: {
            attachment: imageBuffer,
            name: 'capture.jpg'
          }
        }).catch(e => {
          Bastion.log.error(e);
        });
      }
    });
  });
};

exports.config = {
  aliases: [],
  enabled: true,
  ownerOnly: true
};

exports.help = {
  name: 'capture',
  description: 'Captures a screenshot of the specified webpage.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'capture <url>',
  example: [ 'capture BastionBot.org' ]
};
