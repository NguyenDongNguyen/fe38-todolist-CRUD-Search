import { Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import AdminLayout from 'layouts/AdminLayout'
import UserLayout from 'layouts/UserLayout'

import HomePage from 'pages/user/Home'
import AboutPage from 'pages/user/About'
import ProductDetailPage from 'pages/user/ProductDetail'
import ToDoListPage from 'pages/user/ToDoList'
import TodolistDetailPage from 'pages/user/ToDoListDetail'

import DashboardPage from 'pages/admin/Dashboard'
import ProductManagePage from 'pages/admin/ProductManage'
import CreateProductPage from 'pages/admin/CreateProduct'

import NotFoundPage from 'pages/NotFound'

import { ROUTES } from 'constants/routes'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b6b9',
          borderRadius: 0,
        },
      }}
    >
      <Routes>
        <Route element={<UserLayout />}>
          <Route path={ROUTES.USER.HOME} element={<HomePage />} />
          <Route path={ROUTES.USER.PRODUCT_DETAIL} element={<ProductDetailPage />} />
          <Route path={ROUTES.USER.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.USER.TO_DO_LIST} element={<ToDoListPage />} />
          <Route path={ROUTES.USER.TODOLIST_DETAIL} element={<TodolistDetailPage />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path={ROUTES.ADMIN.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTES.ADMIN.PRODUCT_MANAGE} element={<ProductManagePage />} />
          <Route path={ROUTES.ADMIN.CREATE_PRODUCT} element={<CreateProductPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ConfigProvider>
  )
}

export default App
