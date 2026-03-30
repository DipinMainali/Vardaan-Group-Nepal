import {
  Users,
  MessageSquare,
  FileText,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Leads",
    value: "0",
    change: "+0%",
    icon: MessageSquare,
    description: "This month",
  },
  {
    title: "New Queries",
    value: "0",
    change: "+0%",
    icon: TrendingUp,
    description: "Unread",
  },
  {
    title: "Team Members",
    value: "0",
    change: "",
    icon: Users,
    description: "Active",
  },
  {
    title: "Content Pages",
    value: "0",
    change: "",
    icon: FileText,
    description: "Published",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-dark-900">Dashboard</h1>
        <p className="text-dark-500">
          Welcome to the Vardaan Group admin panel. Manage your leads, content,
          and team from here.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-dark-500">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-dark-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-dark-900">
                {stat.value}
              </div>
              <p className="text-xs text-dark-500">
                {stat.change && (
                  <span className="mr-1 inline-flex items-center text-accent">
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.change}
                  </span>
                )}
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-8 text-center text-dark-400">
            <MessageSquare className="mx-auto mb-2 h-12 w-12" />
            <p className="text-lg font-medium">No leads yet</p>
            <p className="text-sm">
              Connect your database to start receiving and managing leads.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="card-hover cursor-pointer">
          <CardContent className="p-6 text-center">
            <MessageSquare className="mx-auto mb-3 h-8 w-8 text-primary" />
            <h3 className="font-semibold text-dark-900">Manage Leads</h3>
            <p className="mt-1 text-sm text-dark-500">
              View and respond to customer inquiries
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover cursor-pointer">
          <CardContent className="p-6 text-center">
            <FileText className="mx-auto mb-3 h-8 w-8 text-secondary" />
            <h3 className="font-semibold text-dark-900">Edit Content</h3>
            <p className="mt-1 text-sm text-dark-500">
              Update website content and pages
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover cursor-pointer">
          <CardContent className="p-6 text-center">
            <Users className="mx-auto mb-3 h-8 w-8 text-accent" />
            <h3 className="font-semibold text-dark-900">Manage Team</h3>
            <p className="mt-1 text-sm text-dark-500">
              Add or update team member profiles
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
