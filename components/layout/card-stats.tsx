import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function CardsStats({ children, title }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-normal text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row">{children}</CardContent>
    </Card>
  );
}
