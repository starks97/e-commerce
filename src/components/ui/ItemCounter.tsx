import { Flex, Text, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Props {
  children?: React.ReactNode;
}

export default function ItemCounter({}: Props) {
  return (
    <Flex alignItems="center" justifyContent="center">
      <IconButton aria-label={"minow"} icon={<ChevronLeftIcon />} />

      <Text sx={{ width: 30, textAlign: "center" }}>1</Text>
      <IconButton aria-label={"plus"} icon={<ChevronRightIcon />} />
    </Flex>
  );
}
