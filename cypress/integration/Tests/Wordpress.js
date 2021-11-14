/// <reference types="Cypress"  />
/// <reference types="cypress-iframe"  />
import 'cypress-iframe'
import { wrap } from 'lodash'

describe('Create Blog in WordPress', () => {
    it('Create a blog and verify in wordpress', () => {
        
        cy.visit("https://wordpress.com")
        cy.get('#lpc-header-nav > div > div > div.masterbar-menu > div > nav > ul.x-nav-list.x-nav-list--right > li:nth-child(1) > a').click()
        cy.get('#usernameOrEmail').type("selva01604")
        cy.get("button[type='submit']").click()
        cy.get('#password').type("selva1234")
        cy.get('#primary > div > main > div > div > form > div.card.login__form > div.login__form-action > button').click()
        cy.wait(10000)
        cy.get('#header > div.masterbar__publish').click()
        cy.wait(10000)
        cy.frameLoaded('iframe.is-loaded')
        cy.iframe().get('#editor > div > div.edit-post-layout.is-mode-visual.is-sidebar-opened.interface-interface-skeleton.has-footer > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > div.edit-post-visual-editor > div.edit-post-visual-editor__content-area > div > div.editor-styles-wrapper.block-editor-writing-flow > div.edit-post-visual-editor__post-title-wrapper > h1').click().type("Bangalore is Smart")
        cy.iframe().get('body').click(664,30).type('Bangalore is smart because of planning')
        cy.iframe().get('button.components-button.editor-post-publish-panel__toggle.editor-post-publish-button__button.is-primary').click()
        cy.iframe().get(' div.editor-post-publish-panel__header-publish-button > button').click()
        cy.wait(5000)
        cy.iframe().get('#editor > div > div.edit-post-layout.is-mode-visual.is-sidebar-opened.interface-interface-skeleton.has-footer > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__actions > div:nth-child(2) > div > div > div.editor-post-publish-panel__content > div > div.components-panel__body.post-publish-panel__postpublish-header.is-opened').should('be.visible')
        
    })
  })