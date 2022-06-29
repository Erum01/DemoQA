describe("Test suite for different types of locators",()=>{

  it ("first Test",()=>{
     cy.visit('https://demoqa.com/')
     cy.get('svg[stroke="currentColor"]')
     
     //.contains('Forms').click()
     cy.visit('https://demoqa.com/forms')

     cy.get('span[class="text"]')
     
     //contains('Practice Form').click()

     cy.visit('https://demoqa.com/automation-practice-form')

      // by tag
 cy.get('input')

 //id
 cy.get('[id= "userEmail"]')
 //by class name
 cy.get('.mr-sm-2.form-control')

 //by attribute name
 cy.get('[placeholder]')

 //by attribute name and value
 cy.get('[placeholder="name@example.com"]')

 //by class value
 cy.get('.mr-sm-2.form-control')

 //by tag name and attribute with value
 //cy.get('input[placeholder="name@example.com"]')

 //by two different attributes
 //cy.get('[placeholder="name@example.com"][type="text"]')

 //by tag name, Attribute with value. ID and class name
 //cy.get('input[placeholder="name@example.com"]userEmail')


 // the recommended way of cypress
 //cy.get('[data.cy]="inputEmail")

})
})