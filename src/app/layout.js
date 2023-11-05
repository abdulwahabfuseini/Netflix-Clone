import "./globals.css";
import Provider from "@/contexts/Provider";

export const metadata = {
  title: "Netflix Ghana - Watch Tv Shows, Online, Watch Movies",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
