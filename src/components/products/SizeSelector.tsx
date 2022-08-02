import { Flex, Text, Button, Grid } from "@chakra-ui/react";

import { ValidSizes } from "@Prisma/client";

interface Props {
  selectedSize:  ValidSizes | null;
  sizes: ValidSizes[];
  onSelectSize: (size: ValidSizes) => void;
}

export default function SizeSelector({
  selectedSize,
  sizes,
  onSelectSize,
}: Props) {
  return (
    <Flex alignItems="center" gap={2} sx={{ my: 10 }}>
      {sizes.map((size) => (
        <Button
          key={size}
          variant={selectedSize === size ? "solid" : "ghost"}
          onClick={() => onSelectSize(size)}
        >
          {size}
        </Button>
      ))}
    </Flex>
  );
}
