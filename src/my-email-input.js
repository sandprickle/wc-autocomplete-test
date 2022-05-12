import { html, LitElement } from "lit";

export class MyEmailInput extends LitElement {
  render() {
    return html`
      <input
        type="email"
        name="email"
        placeholder="Email"
        id="email"
        autocomplete="email"
        required
      />
    `;
  }
}

customElements.define("my-email-input", MyEmailInput);
