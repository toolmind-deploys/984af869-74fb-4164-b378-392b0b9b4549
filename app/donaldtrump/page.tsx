import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Server component
export default async function DonaldTrumpPage() {
  console.log("[DonaldTrumpPage] Fetching Donald Trump info...");
  const res = await fetch("http://localhost:3000/api/donaldtrump", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("[DonaldTrumpPage] Failed to fetch info.");
    return <div className="p-4 text-red-500">Failed to load data</div>;
  }

  const data = await res.json();
  console.log("[DonaldTrumpPage] Data fetched:", data);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white to-gray-100 p-8">
      <h1 className="text-center text-4xl font-bold mb-6">Donald Trump</h1>
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-md border rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">{data.name}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{data.title}</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="space-y-4 p-4">
            <p className="leading-relaxed text-justify">{data.description}</p>
            <Badge variant="outline">ID: {data.id}</Badge>
            <p className="text-sm text-muted-foreground">Fun Fact: {data.fact}</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
