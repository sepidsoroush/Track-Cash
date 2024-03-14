import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimpleLineChart } from "./simple-line-chart";
import { Stats } from "@/types";

type Props = {
  title: string;
  data: Stats[];
};

export function CardsStats({ data, title }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-normal text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-[500px]">
          <SimpleLineChart data={data} />
        </div>
      </CardContent>
    </Card>
  );
}
