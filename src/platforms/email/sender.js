import MessageHandler from '../_base/MessageHandler';

class EmailHandler extends MessageHandler {
  send() {
    const { from, to, subject, text } = this.message;
    console.log(
      `message from: <${from}> to: <${to}>sending email: ${subject} ${text}`
    );

    return true;
  }
}

export default EmailHandler;
