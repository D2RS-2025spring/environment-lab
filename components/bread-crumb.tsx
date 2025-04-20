import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

export function BreadcrumbBar({
  items,
}: {
  items: { title: string; href: string }[];
}) {
  return (
    <section>
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item: { title: string; href: string }, index: number) => (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
}
