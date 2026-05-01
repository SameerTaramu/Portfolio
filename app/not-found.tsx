import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">

      <h1 className="text-6xl font-bold">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link href="/" className="mt-8">
        <Button>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>

    </section>
  );
}