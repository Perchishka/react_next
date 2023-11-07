export default function RootLayout({ children }) {
  return (
    <>
      <header>Header for user</header>
      {children}
      <footer>Footer for user</footer>
    </>
  );
};
