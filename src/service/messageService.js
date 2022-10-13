class MessageService {
  constructor({ messageFactory }) {
    this.messageFactory = messageFactory;
  }

  async sendMessage({ platform, message, user }) {
    const messageSender = this.messageFactory.createInstance({
      user,
      platform,
      message,
    });

    return messageSender.sendMessage();
  }

  async addCredit({ platform, user, amount }) {
    const messageFactory = this.messageFactory.createInstance({
      user,
      platform,
    });

    return messageFactory.addCredit(amount);
  }
}
export default MessageService;
