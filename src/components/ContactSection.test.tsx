import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

const mockHandleSubmit = vi.fn()
let mockState = { submitting: false, succeeded: false, errors: [] }

vi.mock('@formspree/react', () => ({
  useForm: () => [mockState, mockHandleSubmit],
  ValidationError: () => null,
}))

import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('renders the contact form', () => {
    mockState = { submitting: false, succeeded: false, errors: [] }
    render(<ContactSection />)
    expect(screen.getByText('Laat van je horen')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /consultatie/i })
    ).toBeInTheDocument()
  })

  it('renders contact info', () => {
    mockState = { submitting: false, succeeded: false, errors: [] }
    render(<ContactSection />)
    expect(screen.getByText('+32 498 65 55 65')).toBeInTheDocument()
    expect(screen.getByText('info@pelledeontwikkelaar.be')).toBeInTheDocument()
  })

  it('disables submit button while submitting', () => {
    mockState = { submitting: true, succeeded: false, errors: [] }
    render(<ContactSection />)
    expect(screen.getByRole('button', { name: /verzenden/i })).toBeDisabled()
  })

  it('shows success message after form is submitted', () => {
    mockState = { submitting: false, succeeded: true, errors: [] }
    render(<ContactSection />)
    expect(screen.getByText(/Bedankt voor je bericht/i)).toBeInTheDocument()
    expect(screen.queryByText('Laat van je horen')).not.toBeInTheDocument()
  })
})
