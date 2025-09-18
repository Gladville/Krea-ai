import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-4xl font-bold mb-6">Dark Mode Toggle</h1>
      <ThemeToggle />
    </main>
  );
}
