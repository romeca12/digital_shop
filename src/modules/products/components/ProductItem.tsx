import { Card, CardContent, CardHeader } from "@/src/components/ui";
import Image from "next/image";

async function ProductItem(props: { product: any }) {
  const { product } = await props;

  return (
    <Card className="w-[300px] transform transition-transform duration-300 hover:scale-105">
      <CardHeader>
        <div className="relative w-full h-[300px]">
          <Image
            fill
            alt={product?.name}
            src={product?.images[0]?.image || "/mock/0.jpg"}
            className="rounded-t-lg object-cover"
          />
        </div>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}

export default ProductItem;
