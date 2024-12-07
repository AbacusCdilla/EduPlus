import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCartStore } from './cartStore'

describe('Pinia Cart Store', () => {
  // Set up a fresh Pinia instance before each test
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should add an item to the cart', () => {
    const cart = useCartStore()
    const lesson = { id: 1, topic: 'Math', price: 100 }

    cart.addToCart(lesson)

    // Ensure the cart contains the expected item
    expect(cart.cartItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          topic: 'Math',
          price: 100,
        }),
      ])
    )
  })

  it('should remove an item from the cart', () => {
    const cart = useCartStore()
    const lesson = { id: 1, topic: 'Math', price: 100 }

    cart.addToCart(lesson)
    cart.removeFromCart(lesson.id)

    // Ensure the cart is empty after removing the item
    expect(cart.cartItems).not.toContain(lesson)
    expect(cart.cartItems.length).toBe(0)
  })

  it('should not add the same item twice', () => {
    const cart = useCartStore()
    const lesson = { id: 1, topic: 'Math', price: 100 }

    cart.addToCart(lesson)
    cart.addToCart(lesson)

    // Ensure the cart only has one instance of the item
    expect(cart.cartItems.length).toBe(1)
  })

  it('should clear the cart', () => {
    const cart = useCartStore()
    const lesson1 = { id: 1, topic: 'Math', price: 100 }
    const lesson2 = { id: 2, topic: 'Science', price: 120 }

    cart.addToCart(lesson1)
    cart.addToCart(lesson2)

    // Clear the cart
    cart.clearCart()

    // Ensure the cart is empty
    expect(cart.cartItems.length).toBe(0)
  })
})
