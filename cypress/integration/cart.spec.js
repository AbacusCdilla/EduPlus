describe('Cart Functionality', () => {
  it('should add a lesson to the cart', () => {
    // Visit the lessons page
    cy.visit('/lessons')

    // Click on the "Add to Cart" button for the first lesson
    cy.contains('Add to Cart').first().click()

    // Visit the cart page
    cy.visit('/cart')

    // Check if the lesson is added to the cart
    cy.contains('Math') // Check for lesson name
    cy.contains('100 USD') // Check for price
  })

  it('should remove a lesson from the cart', () => {
    // Add a lesson to the cart
    cy.visit('/lessons')
    cy.contains('Add to Cart').first().click()

    // Visit the cart page and click "Remove"
    cy.visit('/cart')
    cy.contains('Remove').click()

    // Verify the cart is empty
    cy.contains('Your cart is empty')
  })
})
