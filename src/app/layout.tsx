import Header from "./_components/Header";
import AuthModal from "./_components/modals/AuthModal";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <Header />
        <main className="flex-1 min-w-full mx-auto px-6 py-8 w-full">
          {children}
        </main>
        <footer className="w-full border-t border-neutral-200 dark:border-neutral-800">
          <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-neutral-600">
            © {new Date().getFullYear()} My Novel Realm — Built with Next.js
          </div>
        </footer>
        <AuthModal /> 
      </body>
    </html>
  );
}
