export const ROUTES = {
    LOGIN: "/login",
    REGISTER: "/register",
    USER: {
        HOME: "/",
        ABOUT: "/about",
        CONTACT: "/contact",
        PRODUCT_LIST: "/products",
        PRODUCT_DETAIL: "/products/:id",
        CART: "/cart",
        CHECKOUT: "/checkout",
        TO_DO_LIST: "/to-do-list",
        TODOLIST_DETAIL: "/to-do-list/:id",
    },
    ADMIN: {
        DASHBOARD: "/admin/dashboard",
        PRODUCT_MANAGE: "/admin/products",
        CREATE_PRODUCT: "/admin/products/create",
        UPDATE_PRODUCT: "/admin/products/:id/update",
        USER_MANAGE: "/admin/users",
    },
};
