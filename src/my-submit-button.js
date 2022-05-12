import { html, LitElement } from 'lit'

export class MySubmitButton extends LitElement {
  render() {
    return html`<button type="submit">Login (inside shadow root)</button>`
  }
}

customElements.define('my-submit-button', MySubmitButton)
