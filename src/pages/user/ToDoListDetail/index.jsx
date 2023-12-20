import { useLocation, useParams } from 'react-router-dom'

function TodolistDetailPage() {
  const location = useLocation()
  console.log("🚀 ~ file: index.jsx:5 ~ TodolistDetailPage ~ location:", location)
  const params = useParams()

  return (
    <>
      {/* <div>Product Detail Page - {params.id}</div> */}
      <div>Title ToDoList - {location.state.title}</div>
      <div>Content ToDoList - {location.state.content}</div>
    </>
  )
}

export default TodolistDetailPage
