import { render, screen } from '@testing-library/react'
import HomePageContent from '@/components/home_page_content'

it('renders a heading', () => {
  const { container } = render(<HomePageContent />)

  const heading = screen.getByRole('heading', {
    name: 'hello'
  })

  expect(heading).toBeInTheDocument()
})
