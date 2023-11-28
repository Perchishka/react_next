export default function AuthorizedLayout({ children }) {
  return (
    <>
      <header>Header for user
        {children}
      </header>
      
      <footer>Footer for user</footer>
    </>
  );
};
