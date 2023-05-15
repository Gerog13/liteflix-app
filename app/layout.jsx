import { Bebas_Neue } from "next/font/google";
import "@styles/globals.css";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Liteflix",
  description:
    "Discover and stream the latest films, including user-added favorites, on Liteflix - your go-to destination for cinematic entertainment.",
    keywords:
    'web development, web design, javascript, reactjs, nextjs, tailwindcss, mobile, responsive, liteflix, movies',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={bebasNeue.className}>
      <main className="container">{children}</main>
    </body>
  </html>
);

export default RootLayout;
