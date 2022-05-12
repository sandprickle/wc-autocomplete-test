import { html, css, LitElement } from 'lit'

export class MyFooter extends LitElement {
  render() {
    return html`<footer>
      <a href="https://github.com/sandprickle/wc-autocomplete-test">source</a>
    </footer>`
  }

  static styles = css`
    footer {
      text-align: center;
      padding: 1rem;
    }
  `
}

customElements.define('my-footer', MyFooter)
