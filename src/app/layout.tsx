import type { Metadata } from "next";
import { FavoritesProvider } from '../context/FavouritesContext';
import "./globals.css";


export const metadata: Metadata = {
  title: "Star Wars",
  description: "Find your favourite Star Wars charaters",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  );
}