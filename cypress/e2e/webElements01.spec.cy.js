const { data } = require("cypress/types/jquery")

describe("Test suite for the concept of finding web elements",()=>{

  it ("first Test",()=>{

    
     cy.visit('https://demoqa.com/')
    
     //click on elements buttons
     cy.get('[class="card-up"]')
     
     cy.visit('https://demoqa.com/elements')
     
     //click on text box  tab
     cy.get('[class="btn.btn-light.active"')
     
     cy.visit('https://demoqa.com/text-box')

     cy.get('[data-cy="submit"]').click()
      

})
})