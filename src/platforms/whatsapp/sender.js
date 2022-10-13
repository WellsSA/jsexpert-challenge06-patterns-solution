import MessageHandler from '../_base/MessageHandler';

class WhatsappHandler extends MessageHandler {
  send() {
    const { from, to, subject, text } = this.message;
    console.log(
      `message from: <${from}> to: <${to}>sending whatsapp: ${subject} ${text}`
    );

    return true;
  }
}

export default WhatsappHandler;
