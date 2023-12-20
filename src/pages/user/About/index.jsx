import { Link, useNavigate } from 'react-router-dom'
import { Button, notification } from 'antd'

import { ROUTES } from 'constants/routes'

function AboutPage() {
  const navigate = useNavigate()

  const isUserLoggedIn = true

  const handleGoToCart = () => {
    if (isUserLoggedIn) {
      navigate(ROUTES.USER.CART)
    } else {
      notification.warning({ message: 'Please login to continue' })
    }
  }

  return (
    <div>
      <h2>About Page</h2>
      <Link to={ROUTES.USER.HOME}>Go to Home</Link>
      <Button onClick={() => handleGoToCart()}>Go to cart</Button>
      <Button onClick={() => navigate('/')}>Click to Home</Button>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  )
}

export default AboutPage
