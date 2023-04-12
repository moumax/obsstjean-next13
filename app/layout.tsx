import Modal from "./components/modals/Modal";
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
        {/* <Modal isOpen title="Créer un nouvel évènement" actionLabel="Envoyer le formulaire" /> */}
        {children}</body>
    </html>
  );
}
