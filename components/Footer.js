export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container py-8 text-sm text-gray-600">
        © {new Date().getFullYear()} SOSA — All rights reserved.
      </div>
    </footer>
  );
}
