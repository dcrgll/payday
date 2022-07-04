import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

it('renders a heading', () => {
  const { container } = render(<Home />)

  const heading = screen.getByRole('heading', {
    name: 'hello'
  })

  expect(heading).toBeInTheDocument()

  expect(container).toMatchSnapshot()
})
