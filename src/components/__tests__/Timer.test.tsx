import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import Timer from '../Timer'

describe('Timer', () => {
  it('should display 25:00 by default', () => {
    render(<Timer />)
    expect(screen.getByText('25:00')).toBeInTheDocument()
  })

  describe('Timer countdown', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('should countdown by 1 second when Start button is clicked', () => {
      render(<Timer />)

      const startButton = screen.getByRole('button', { name: /start/i })
      act(() => {
        fireEvent.click(startButton)
      })

      act(() => {
        vi.advanceTimersByTime(1000)
      })

      expect(screen.getByText('24:59')).toBeInTheDocument()
    })
  })
})
