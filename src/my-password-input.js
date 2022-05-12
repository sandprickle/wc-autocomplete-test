import { html, LitElement } from "lit";

export class MyPasswordInput extends LitElement {
  render() {
    return html`
      <input
        type="password"
        name="password"
        placeholder="Password"
        id="password"
        autocomplete="current-password"
        required
      />
    `;
  }
}

customElements.define("my-password-input", MyPasswordInput);
