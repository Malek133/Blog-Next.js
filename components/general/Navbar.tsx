"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggel } from "../ModeToggel";


export function Navbar() {
  

  return (
    <nav className="py-5 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog<span className="text-blue-500">Alphazero</span>
          </h1>
        </Link>
        <ModeToggel />

        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </div>

     
          <Button>Login</Button>
        
      
       
      
    </nav>
  );
}