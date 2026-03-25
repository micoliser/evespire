import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ArticleCard({
  title,
  description,
  className = "",
  delayClass = "",
  titleClassName = "",
}) {
  return (
    <Card className={`gap-1 ${delayClass} ${className}`}>
      <CardHeader className="p-0">
        <CardTitle className={titleClassName}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="mt-1 p-0 leading-relaxed text-slate-600">
        {description}
      </CardContent>
    </Card>
  );
}
