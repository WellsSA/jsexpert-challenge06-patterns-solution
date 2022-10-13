class MessageHandler {
  constructor({ message }) {
    this.message = message;
  }

  send() {
    throw new NotImplementedException(this.send.name);
  }
}

export default MessageHandler;
