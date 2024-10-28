import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { User } from "lucide-react";

export function ContactCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2">
          <User />
          Contact
        </CardTitle>
        <CardDescription>Get in touch with me.</CardDescription>
      </CardHeader>
      <CardContent>To be Added</CardContent>
    </Card>
  );
}
