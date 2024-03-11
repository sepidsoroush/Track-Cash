export default {};
// import Link from "next/link";
// import { CreditCard, LayoutDashboard, LogOut, Settings } from "lucide-react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Icons } from "../icons";

// export function ProfileMenu() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger>
//         <Avatar>
//           <AvatarImage
//             alt="Picture"
//             src="https://github.com/sepidsoroush.png"
//             referrerPolicy="no-referrer"
//           />
//           <AvatarFallback>
//             <span className="sr-only">me@example.com</span>
//             <Icons.user className="h-4 w-4" />
//           </AvatarFallback>
//         </Avatar>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <div className="flex items-center justify-start gap-2 p-2">
//           <div className="flex flex-col space-y-1 leading-none">
//             <p className="font-medium">John Doe</p>
//             <p className="w-[200px] truncate text-sm text-muted-foreground">
//               me@example.com
//             </p>
//           </div>
//         </div>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem asChild>
//           <Link href="/dashboard" className="flex items-center space-x-2.5">
//             <LayoutDashboard className="h-4 w-4" />
//             <p className="text-sm">Dashboard</p>
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuItem asChild>
//           <Link
//             href="/dashboard/settings"
//             className="flex items-center space-x-2.5"
//           >
//             <Settings className="h-4 w-4" />
//             <p className="text-sm">Settings</p>
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuItem
//           className="cursor-pointer"
//           onSelect={(event) => {
//             event.preventDefault();
//             console.log("Log out");
//           }}
//         >
//           <div className="flex items-center space-x-2.5">
//             <LogOut className="h-4 w-4" />
//             <p className="text-sm">Log out</p>
//           </div>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
