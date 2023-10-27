import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignIn, SignedOut } from "@clerk/nextjs";
import { SignUp } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <SignedIn>
            <NavBar />
            {children}
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </body>
      </ClerkProvider>
    </html>
  );
}
