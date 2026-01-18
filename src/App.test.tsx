import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    // Basic smoke test - just checking if the app renders.
    // Since we don't know the exact content that will always stay,
    // checking for something generic or just ensuring render doesn't throw is good.
    // However, looking at App.tsx, it renders a bunch of sections.
    // Let's check for "Ubiquiti" which seems central to the content based on file names.
    // Or just check if the main container exists.
    const mainContainer = document.querySelector('.min-h-screen')
    expect(mainContainer).toBeInTheDocument()
  })
})
