
# Ecommerce-App

This Next-js ecommerce app connects to an API, displaying a wide range of products. 


# Tech Stack:
  - **Next-js**
  - **Tailwind css**
  - **Redux**
  - **JavaScript**

# Features :

### Catalog Page:

- **Dual Navigation Bars**: Features two navigation bars, with the ability to toggle visibility from the settings page.
- **Dynamic Catalog Display**: Users can view products in a carousel or a grid layout (view_all). The carousel fetches the first screen of products initially, with navigation buttons for scrolling. 
- **Product Cards**: Offers two variants of product cards, switchable from the settings page.

### Settings Page:

- **Customization Options**: Allows users to switch between navigation bars (NavBar1, NavBar2) , product card styles (ProductCard1, ProductCard2)  .
- **Display Mode Selection**: Users can choose how the catalog is displayed, either as a carousel or a view_all grid.

### Additional Features:

- **Responsive Design**: Ensures a mobile-first approach, adapting smoothly to various devices and screen sizes.

### Cart Functionality:
 
 - Includes the ability to add and remove items from the cart. A bag icon on the navigation bar opens a modal displaying current cart contents.

### Checkout Functionality:

- Enables users to proceed to checkout, accessible via a dedicated checkout button in the cart page.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
