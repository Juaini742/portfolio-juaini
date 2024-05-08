import { Footer } from "../footer";
import Navbar from "../navbar";

function Template({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Navbar />
      <div className="flex-1 mt-16">{children}</div>
      <Footer />
    </div>
  );
}

export default Template;
