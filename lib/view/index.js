'use babel';

export default class JgripView {

  constructor() {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('jgrip');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The Jgrip package is Alive! It\'s ALIVE for the day!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  // serialize() { }

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}