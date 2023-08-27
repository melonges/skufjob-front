import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { Vacancy } from "../../../store/services/type";

export function VacancyListItem({ vacancy }: { vacancy: Vacancy }) {
  return (
    <Card classNames={{ base: "mb-3" }}>
      <CardHeader className="flex gap-3" />
      <Divider />
      <CardBody>
        <pre>{vacancy.text}</pre>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={vacancy.link}>
          Link
        </Link>
      </CardFooter>
    </Card>
  );
}
