"use strict";
import { LitElement, html } from "@polymer/lit-element";

class HTLayoutRow extends LitElement {
  render({ card }) {
    return html`
      <style>
        :host {
          display: flex;
          justify-content:center;
          padding:16px;
          overflow:hidden;
          min-height: calc(100vh - 64px);
          box-sizing: border-box;
        }

        #container {
          display:flex;
          flex-wrap:wrap;
          flex-grow:1;
          max-width: 1440px;
          position:relative;
          padding:16px;
          background:#fff;
        }

        @media (max-width:600px) {
          :host {
            padding:0;
          }
        }
      </style>
      ${
        card
          ? html`<style>
      :host {
        background:#eceff1;
      }
      #container {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      </style>`
          : html``
      }
      <div id="container">
        <slot></slot>
      </div>
  `;
  }

  static get is() {
    return "ht-layout-row";
  }

  static get properties() {
    return {
      card: Boolean
    };
  }

  constructor() {
    super();
    this.card = false;
  }
}

customElements.define(HTLayoutRow.is, HTLayoutRow);
