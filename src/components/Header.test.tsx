import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders all navigation links', () => {
    render(<Header />)
    expect(screen.getAllByText('Services')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Over mij')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Waarom Ubiquiti')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Contact')[0]).toBeInTheDocument()
  })

  it('mobile menu is hidden by default', () => {
    render(<Header />)
    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument()
  })

  it('opens mobile menu when hamburger button is clicked', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', {
      name: /toggle navigatiemenu/i,
    })
    fireEvent.click(toggle)
    expect(document.getElementById('mobile-menu')).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', {
      name: /toggle navigatiemenu/i,
    })
    fireEvent.click(toggle)
    expect(document.getElementById('mobile-menu')).toBeInTheDocument()

    const mobileMenu = document.getElementById('mobile-menu')!
    const servicesLink = mobileMenu.querySelector('a[href="#services"]')!
    fireEvent.click(servicesLink)
    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument()
  })

  it('toggles aria-expanded on the hamburger button', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', {
      name: /toggle navigatiemenu/i,
    })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })
})
