import { html, css, LitElement } from 'lit'

class LoginFormNormalInputs extends LitElement {
  render() {
    return html`
      <form autocomplete="on">
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          autocomplete="email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          autocomplete="current-password"
          required
        />
        <button type="submit">Login</button>
        <my-submit-button></my-submit-button>
      </form>
    `
  }

  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `
}

customElements.define('login-form-normal-inputs', LoginFormNormalInputs)
