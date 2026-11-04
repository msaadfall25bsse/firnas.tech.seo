import { SubServiceDetail } from "@/data/dedicatedServices";
import { servicesCatalogList } from "./servicesList";

export const allSubServices: SubServiceDetail[] = servicesCatalogList;

export function getServiceBySlug(slug: string): SubServiceDetail | undefined {
  return allSubServices.find((s) => s.slug === slug);
}
