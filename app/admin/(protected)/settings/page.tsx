import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark-900">Settings</h1>
        <p className="text-dark-500">
          Configure admin panel settings and preferences.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-12 text-center text-dark-400">
            <Settings className="mx-auto mb-3 h-12 w-12" />
            <p className="text-lg font-medium">Settings Panel</p>
            <p className="text-sm">
              Configure site settings, user roles, and email preferences here.
              <br />
              This section will be expanded as the application grows.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
