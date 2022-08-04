import { Flex, Text, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  children?: React.ReactNode;
  currentValue: number;
  maxValue: number;
  updateQuantity: (newValue: number) => void;
}

export default function ItemCounter({
  currentValue,
  maxValue,
  updateQuantity,
}: Props) {
  const add_Remove = (value: number) => {
    if (value === -1) {
      if (currentValue === 1) return;
      return updateQuantity(currentValue - 1);
    }

    if (currentValue >= maxValue) return;
    return updateQuantity(currentValue + 1);
  };
  return (
    <Flex alignItems="center" justifyContent="center">
      <IconButton
        aria-label={"minow"}
        icon={<ChevronLeftIcon />}
        onClick={() => add_Remove(-1)}
      />
      <Text sx={{ width: 30, textAlign: "center" }}>{currentValue}</Text>
      <IconButton
        aria-label={"plus"}
        icon={<ChevronRightIcon />}
        onClick={() => add_Remove(+1)}
      />
    </Flex>
  );
}
