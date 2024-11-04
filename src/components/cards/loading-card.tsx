import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "../ui/card";

export function LoadingCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-2">
          <Skeleton className="w-6 h-6" />
          <Skeleton className="w-1/2 h-5 mb-4" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="w-full h-2 " />
          <Skeleton className="w-full h-2" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Skeleton className="w-full h-6" />
        <Skeleton className="w-full h-6" />
      </CardContent>
    </Card>
  );
}
