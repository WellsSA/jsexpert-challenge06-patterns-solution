// nota: nós também poderíamos implementar uma "Mensagem base" se fosse o caso, e adicionar
// campos customizados em cada contexto. ex: email precisa de subject, sms não precisa

class Message {
  constructor({ from, to, subject, text }) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.text = text;
  }
}

export default Message;
