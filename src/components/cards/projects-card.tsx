import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Briefcase } from "lucide-react";
export function ProjectsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2">
          <Briefcase />
          Projects
        </CardTitle>
        <CardDescription>Check out some of my projects.</CardDescription>
      </CardHeader>
      <CardContent>To be Added</CardContent>
    </Card>
  );
}
