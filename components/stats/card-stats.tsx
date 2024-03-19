import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimpleLineChart } from "../charts/simple-line-chart";
import { SimpleBarChart } from "../charts/simple-bar-chart";
import { Stats } from "@/types";

type Props = {
  title: string;
  children: any;
};

export function CardsStats({ children, title }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-normal text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row">
        {children}
        {/* <div className="h-[300px] w-[500px]">
          <SimpleLineChart data={data} />
        </div>
        <div className="h-[300px] w-[500px]">
          <SimpleBarChart data={data} />
        </div> */}
      </CardContent>
    </Card>
  );
}
