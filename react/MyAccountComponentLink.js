import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'

const MyAccountComponentLink = ({ render, intl }) => {
  return render([
    {
      name: 'Componte Teste',
      path: '/my-account-component',
    },
  ])
}

MyAccountComponentLink.propTypes = {
  render: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(MyAccountComponentLink)
