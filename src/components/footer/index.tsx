import { Link } from "@nextui-org/react";

export function Footer() {
  return (
    <footer className="py-4 mt-8 text-center border-t border-gray-200 dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Need help? Contact support at{" "}
        <Link 
          href="http://melonges.t.me" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          @melonges
        </Link>
      </p>
    </footer>
  );
}