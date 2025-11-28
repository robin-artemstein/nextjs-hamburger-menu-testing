// app/page.tsx
// This is the Home page (accessed at "/"). It just shows placeholder text.
// All pages follow a similar structure.

export default function Home() {
  return (
    <div className="text-center">  {/* Center the text using Tailwind */}
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>  {/* Big heading */}
      {/* 10 lines of Lorem Ipsum as placeholder content */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
      <p>Cillum dolore eu fugiat nulla pariatur.</p>
      <p>Excepteur sint occaecat cupidatat non proident.</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Another line of placeholder text here.</p>
      <p>Yet another one to make it 10 lines.</p>
      <p>Last line of Lorem Ipsum.</p>
    </div>
  );
}