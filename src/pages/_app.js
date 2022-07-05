import PropTypes from 'prop-types'

export default function Payday({ Component, pageProps }) {
  return <Component {...pageProps} />
}

Payday.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
