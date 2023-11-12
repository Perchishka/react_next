export default function RootLayout({ children }) {
  return (
    <>
      <header>Header for user</header>
      <body>{children}</body>
      <footer>Footer for user</footer>
      </>
  );
};
