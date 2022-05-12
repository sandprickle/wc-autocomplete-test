import { html, css, LitElement } from 'lit'

class LoginFormCustomInputs extends LitElement {
  render() {
    return html`
      <form autocomplete="on">
        <my-email-input></my-email-input>
        <my-password-input></my-password-input>
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

customElements.define('login-form-custom-inputs', LoginFormCustomInputs)
