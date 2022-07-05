import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

it('renders a heading', () => {
  render(<Home />)

  const heading = screen.getByRole('heading', {
    name: 'hello'
  })

  expect(heading).toBeInTheDocument()
})
