import { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon: LucideIcon;
};
