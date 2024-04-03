import { Month } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Icons } from "@/components/common/icons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const months: Month[] = [
  { label: "Jan", value: "01", title: "January" },
  { label: "Feb", value: "02", title: "February" },
  { label: "Mar", value: "03", title: "March" },
  { label: "Apr", value: "04", title: "April" },
  { label: "May", value: "05", title: "May" },
  { label: "Jun", value: "06", title: "June" },
  { label: "Jul", value: "07", title: "July" },
  { label: "Aug", value: "08", title: "August" },
  { label: "Sep", value: "09", title: "September" },
  { label: "Oct", value: "10", title: "October" },
  { label: "Nov", value: "11", title: "November" },
  { label: "Dec", value: "12", title: "December" },
];

function generateYearsArray() {
  const yearsArray = [];
  for (let year = 2020; year <= 2030; year++) {
    yearsArray.push(year.toString());
  }
  return yearsArray;
}

export const years = generateYearsArray();

export const categories = [
  {
    label: "Groceries",
    budget: 6000,
    icon: Icons.grocery,
    tooltip: "Food Supplies, Home Supplies",
  },
  {
    label: "Restaurants",
    budget: 2000,

    icon: Icons.restaurant,
    tooltip: "Coffee Shops, Fast Food, Restaurants, Alcohol & Bars",
  },

  {
    label: "Home",
    budget: 1000,
    icon: Icons.home,
    tooltip: "Furnitures, Home Appliances, Electronic Devices",
  },
  {
    label: "Bills",
    budget: 10500,
    icon: Icons.bill,
    tooltip: "Rent, Utilities, Internet, Mobile Phone",
  },

  {
    label: "Health & Fitness",
    budget: 1200,
    icon: Icons.health,
    tooltip: "Doctor, Dentist, Pharmacy, Therapist, Gym, Sports, Medicine",
  },

  {
    label: "Personal Care",
    budget: 2400,

    icon: Icons.personal,
    tooltip: "Clothing, Sportswear, Hobbies, Cosmetic , Perfumes, Hair Salon",
  },
  {
    label: "Transportation",
    budget: 300,
    icon: Icons.transportation,
    tooltip: "Public Transportation, Taxi, Scooter, Train",
  },
  {
    label: "Travel",
    budget: 4000,
    icon: Icons.travel,
    tooltip:
      "Flight, Hotel, Transportaions, Food & Restaurant, Souvenirs , Tourism Attractions, Outdoords Hobbies",
  },

  {
    label: "Subscriptions",
    budget: 400,
    icon: Icons.subscription,
    tooltip: "Music, Television, Cloud, Other",
  },
  {
    label: "Education",
    budget: 200,
    icon: Icons.education,
    tooltip: "Tuition, Books & Supplies, Online Courses, Softwares",
  },

  {
    label: "Business expenses",
    budget: 1500,
    icon: Icons.business,
    tooltip: "Electronic devices, Office supplies, Taxes, Service fees",
  },

  {
    label: "Miscellaneous",
    budget: 500,
    icon: Icons.misc,
    tooltip: "Fees & Charges, Gifts & Donations, Other",
  },
];

export const incomeSources = [
  { label: "Company" },
  { label: "Freelance" },
  { label: "Store" },
];

export const annualBudgets = [
  {
    name: "Groceries",
    target: 6000,
    icon: Icons.grocery,
    tooltip: "Food Supplies, Home Supplies",
  },
  {
    name: "Restaurants",
    target: 2000,

    icon: Icons.restaurant,
    tooltip: "Coffee Shops, Fast Food, Restaurants, Alcohol & Bars",
  },

  {
    name: "Home",
    target: 1000,
    icon: Icons.home,
    tooltip: "Furnitures, Home Appliances, Electronic Devices",
  },
  {
    name: "Bills",
    target: 10500,
    icon: Icons.bill,
    tooltip: "Rent, Utilities, Internet, Mobile Phone",
  },

  {
    name: "Health & Fitness",
    target: 1200,
    icon: Icons.health,
    tooltip: "Doctor, Dentist, Pharmacy, Therapist, Gym, Sports, Medicine",
  },

  {
    name: "Personal Care",
    target: 2400,

    icon: Icons.personal,
    tooltip: "Clothing, Sportswear, Hobbies, Cosmetic , Perfumes, Hair Salon",
  },
  {
    name: "Transportation",
    target: 300,
    icon: Icons.transportation,
    tooltip: "Public Transportation, Taxi, Scooter, Train",
  },
  {
    name: "Travel",
    target: 4000,
    icon: Icons.travel,
    tooltip:
      "Flight, Hotel, Transportaions, Food & Restaurant, Souvenirs , Tourism Attractions, Outdoords Hobbies",
  },

  {
    name: "Subscriptions",
    target: 400,
    icon: Icons.subscription,
    tooltip: "Music, Television, Cloud, Other",
  },
  {
    name: "Education",
    target: 200,
    icon: Icons.education,
    tooltip: "Tuition, Books & Supplies, Online Courses, Softwares",
  },

  {
    name: "Business expenses",
    target: 1500,
    icon: Icons.business,
    tooltip: "Electronic devices, Office supplies, Taxes, Service fees",
  },

  {
    name: "Miscellaneous",
    target: 500,
    icon: Icons.misc,
    tooltip: "Fees & Charges, Gifts & Donations, Other",
  },
];

export const accounts = [
  {
    accountNo: "SA2362186404656935127",
    accountName: "Company Account",
  },
  {
    accountNo: "TR736918640040966092800056",
    accountName: "Personal Account",
  },
  {
    accountNo: "FR2080082330898474S3Z620224",
    accountName: "Loan Account",
  },
  { accountNo: "DE84102270750900117001", accountName: "Join Account" },
];
