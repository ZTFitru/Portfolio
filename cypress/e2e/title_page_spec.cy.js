describe('template spec', () => {
  it('displays website', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.nav-bar').should('be.visible')
    cy.get('.nav-links > :nth-child(1) > a').should('contain', 'Home')
    cy.get('.nav-links > :nth-child(2) > a').should('contain', 'Projects')
    cy.get('.nav-links > :nth-child(3) > a').should('contain', 'About')

    cy.get('h1').should('contain', "Hi, i'm Z")
    
  })

  it('should display my projects', ()=> {
    cy.visit('http://localhost:5173/')
    cy.get('h2').should('contain', 'My Projects')
    cy.get('.project-cont').should('have.length', 1)
    cy.get('.project-cont > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > h3').should('contain', 'Popcorn Score')
    cy.get(':nth-child(2) > h3').should('be.visible')
    cy.get(':nth-child(5) > h3').should('contain', 'Lennon-Lawn-Care')
  })

  it('should display about me', ()=> {
    cy.visit('http://localhost:5173/')
    cy.get('h4').should('contain', 'About me')
    cy.get('.about-cont').should('be.visible')
    cy.get('.about-cont > :nth-child(6)').should('contain', 'Get my resume')
    cy.get('.contact-btn > button').should('be.visible')
    cy.get('.footer-out').should('be.visible')
    cy.get('.footer-text > p').should('contain', 'By: Zelalem Fitru')
  })

  it('should display footer', ()=> {
    cy.visit('http://localhost:5173/')
    cy.get('.footer-out').should('be.visible')
    cy.get('.footer-text > p').should('contain', 'By: Zelalem Fitru')
  })
})