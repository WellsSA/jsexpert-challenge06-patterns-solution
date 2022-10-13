import Message from '../../../src/entity/Message';

class MessageDataBuilder {
  constructor() {
    this.message = {};
  }

  static aMessage() {
    return new MessageDataBuilder();
  }

  withValidFrom() {
    this.message.to = 'Wells';
    return this;
  }

  withValidTo() {
    this.message.to = 'Thales';
    return this;
  }

  withValidSubject() {
    this.message.to = 'Important tests to be done';
    return this;
  }

  withValidText() {
    this.message.to = 'Hello there! Testing out some texts';
    return this;
  }

  build() {
    const message = new Message({
      from: this.message.from,
      to: this.message.to,
      subject: this.message.subject,
      text: this.message.text,
    });

    return message;
  }
}

export default MessageDataBuilder;
