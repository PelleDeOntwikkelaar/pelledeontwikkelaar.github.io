import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import { LangProvider } from './LangProvider'

const mockHandleSubmit = vi.fn()
let mockState = { submitting: false, succeeded: false, errors: [] }

vi.mock('@formspree/react', () => ({
  useForm: () => [mockState, mockHandleSubmit],
  ValidationError: () => null,
}))

import { ContactSection } from './ContactSection'

function renderContact() {
  return render(
    <BrowserRouter>
      <LangProvider>
        <ContactSection />
      </LangProvider>
    </BrowserRouter>
  )
}

describe('ContactSection', () => {
  it('renders the contact form', () => {
    mockState = { submitting: false, succeeded: false, errors: [] }
    renderContact()
    expect(
      screen.getByRole('button', { name: /request a consultation/i })
    ).toBeInTheDocument()
  })

  it('renders contact info', () => {
    mockState = { submitting: false, succeeded: false, errors: [] }
    renderContact()
    expect(screen.getByText('+32 498 65 55 65')).toBeInTheDocument()
    expect(screen.getByText('info@pelledeontwikkelaar.be')).toBeInTheDocument()
  })

  it('disables submit button while submitting', () => {
    mockState = { submitting: true, succeeded: false, errors: [] }
    renderContact()
    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled()
  })

  it('shows success message after form is submitted', () => {
    mockState = { submitting: false, succeeded: true, errors: [] }
    renderContact()
    expect(screen.getByText(/thanks for your message/i)).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /request a consultation/i })
    ).not.toBeInTheDocument()
  })
})
