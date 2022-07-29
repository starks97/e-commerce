import { Flex, Text, Button, Grid } from "@chakra-ui/react";

import { ValidSizes } from "@Prisma/client"

interface Props {
  selectedSize: ValidSizes;
  sizes: ValidSizes[];
}

export default function SizeSelector({ selectedSize, sizes }: Props) {
  return (
    <Flex alignItems="center" gap={2} sx={{ my: 10 }}>
      {sizes.map((size) => (
        <Button
          key={size}
          variant={"ghost"}
          color={selectedSize === size ? "primary" : "none"}
        >
          {size}
        </Button>
      ))}
    </Flex>
  );
}
