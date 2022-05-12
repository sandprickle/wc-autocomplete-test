import { html, css, LitElement } from 'lit'

export class NavBar extends LitElement {
  render() {
    return html`
      <nav>
        <ul>
          <li><a href="/">Normal form</a></li>
          <li><a href="/shadow-form/">Form inside shadow root</a></li>
          <li><a href="/shadow-inputs/">Inputs inside shadow roots</a></li>
          <li>
            <a href="/shadow-form-inputs/"
              >Inputs inside shadow roots inside form inside shadow root</a
            >
          </li>
        </ul>
      </nav>
    `
  }

  static styles = css`
    nav {
      padding: 1rem;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  `
}

customElements.define('nav-bar', NavBar)
