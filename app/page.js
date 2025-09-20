// If default export in ThemeToggleButton file
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <header className="p-4">
        <ThemeToggleButton
          theme="system"
          variant="polygon"
          start="top-left"
        />
      </header>
      <main className="p-4">
        <h1>Hello world</h1>
      </main>
    </div>
  );
}
