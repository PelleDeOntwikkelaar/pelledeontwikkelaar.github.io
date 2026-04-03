import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ImageWithFallback } from './ImageWithFallback'

describe('ImageWithFallback', () => {
  it('renders the image when src loads successfully', () => {
    const { getByAltText } = render(
      <ImageWithFallback src="test.jpg" alt="test image" />
    )
    expect(getByAltText('test image')).toBeInTheDocument()
  })

  it('renders the fallback placeholder when the image fails to load', () => {
    const { getByAltText } = render(
      <ImageWithFallback src="broken.jpg" alt="test image" />
    )
    fireEvent.error(getByAltText('test image'))
    expect(getByAltText('Error loading image')).toBeInTheDocument()
  })

  it('stores the original src as a data attribute on the fallback', () => {
    const { getByAltText } = render(
      <ImageWithFallback src="broken.jpg" alt="test image" />
    )
    fireEvent.error(getByAltText('test image'))
    const fallback = getByAltText('Error loading image')
    expect(fallback).toHaveAttribute('data-original-url', 'broken.jpg')
  })

  it('passes extra props (e.g. loading) through to the img element', () => {
    const { getByAltText } = render(
      <ImageWithFallback src="test.jpg" alt="test image" loading="lazy" />
    )
    expect(getByAltText('test image')).toHaveAttribute('loading', 'lazy')
  })
})
