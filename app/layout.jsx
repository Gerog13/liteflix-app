import "@styles/globals.css";

import Nav from "@components/Nav";

export const metadata = {
  title: "Liteflix",
  description:
    "Discover and stream the latest films, including user-added favorites, on Liteflix - your go-to destination for cinematic entertainment.",
  keywords:
    "web development, web design, javascript, reactjs, nextjs, tailwindcss, mobile, responsive, liteflix, movies",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="font-bebas-neue">
      <main className="relative flex justify-center">
        <Nav />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
