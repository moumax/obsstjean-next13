import RegisterModal from "./components/modals/RegisterModal";
import "./globals.css";

export const metadata = {
  title: "Observatoire astronomique de Saint Jean Le Blanc",
  description: "Site de l'observatoire astro de Saint Jean Le Blanc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <RegisterModal />
        {children}</body>
    </html>
  );
}
