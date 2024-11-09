import type { Metadata } from "next";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import localFont from "next/font/local";
import "./globals.css";
import NavbarWrapper from "./NavbarWrapper";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add your meta tags or additional head elements here */}
      </head>
      <body>
        <UserProvider>
          <NavbarWrapper />
          {/* The children will render here */}
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
