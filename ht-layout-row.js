"use strict";
import { LitElement, html } from "@polymer/lit-element";

class HTLayoutRow extends LitElement {
  _render({ card, containerWidth }) {
    return html`
      <style>
        :host {
          display:block;
          box-sizing: border-box;
          overflow:hidden;
          position:relative;
          padding:16px;
        }

        #container {
          display:flex;
          position:relative;
          box-sizing: border-box;
          padding:16px;
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
      <div id="container" style=${this.getContainerStyles()}>
        <slot></slot>
      </div>
  `;
  }

  static get is() {
    return "ht-layout-row";
  }

  static get properties() {
    return {
      card: Boolean,
      containerWidth: String
    };
  }

  constructor() {
    super();
    this.card = false;
  }

  getContainerStyles() {
    let styles = `max-width: ${this.containerWidth};`;
    if (this.card) styles += "background:#fff;";
    return styles;
  }
}

customElements.define(HTLayoutRow.is, HTLayoutRow);
