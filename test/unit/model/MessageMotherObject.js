import MessageDataBuilder from './MessageDataBuilder';

class MessageMotherObject {
  static valid() {
    return MessageDataBuilder.aMessage()
      .withValidFrom()
      .withValidTo()
      .withValidSubject()
      .withValidText()
      .build();
  }

  static withValidFrom() {
    return MessageDataBuilder.aMessage().withValidFrom().build();
  }

  static withValidTo() {
    return MessageDataBuilder.aMessage().withValidTo().build();
  }
  static withValidSubject() {
    return MessageDataBuilder.aMessage().withValidSubject().build();
  }

  static withValidText() {
    return MessageDataBuilder.aMessage().withValidText().build();
  }
}

export default MessageMotherObject;
