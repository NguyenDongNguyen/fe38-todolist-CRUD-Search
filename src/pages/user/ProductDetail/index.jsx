import { useLocation, useParams } from 'react-router-dom'

function ProductDetailPage() {
  const { pathname } = useLocation()
  const params = useParams()
  console.log('🚀 ~ file: index.jsx:6 ~ ProductDetailPage ~ params:', params)

  return <div>Product Detail Page - {params.id}</div>
}

export default ProductDetailPage
