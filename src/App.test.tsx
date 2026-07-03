import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import App from './App'

// Formspree's useForm reads an env id and would attempt network calls; stub it.
vi.mock('@formspree/react', () => ({
  useForm: () => [{ submitting: false, succeeded: false, errors: [] }, vi.fn()],
  ValidationError: () => null,
}))

describe('App', () => {
  it('renders the home page without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // Wordmark is present in the sticky nav on every route.
    expect(screen.getAllByText('Pelle De Ontwikkelaar').length).toBeGreaterThan(
      0
    )
  })
})
