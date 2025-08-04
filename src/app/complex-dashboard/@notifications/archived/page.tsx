import { Card } from "@/components/card";
import Link from "next/link";

export default function NotificationsArchived() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
