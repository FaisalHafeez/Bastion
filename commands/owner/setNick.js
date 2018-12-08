/**
 * @file setNick command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

exports.exec = async (Bastion, message, args) => {
  if (args.length > 0) {
    await message.guild.me.setNickname(args.join(' '));

    await message.channel.send({
      embed: {
        color: Bastion.colors.GREEN,
        description: `${Bastion.user.username}'s nick is now set to **${args.join(' ')}** on this guild.`
      }
    }).catch(e => {
      Bastion.log.error(e);
    });
  }
  else {
    await message.guild.me.setNickname('');

    await message.channel.send({
      embed: {
        color: Bastion.colors.GREEN,
        description: `${Bastion.user.username}'s nick has been reset on this guild.`
      }
    }).catch(e => {
      Bastion.log.error(e);
    });
  }
};

exports.config = {
  aliases: [ 'setn' ],
  enabled: true,
  ownerOnly: true
};

exports.help = {
  name: 'setNick',
  description: 'Sets the nickname of Bastion in the current Discord server.',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'setNick [text]',
  example: [ 'setNick NewNick', 'setNick' ]
};
