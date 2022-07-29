import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  IconButton,
  useDisclosure,
  ModalBody,
} from "@chakra-ui/react";
import React, { useState, SetStateAction } from "react";

import { useRouter } from "next/router";

export interface BaseProps {
  url: T;
}
type T = string;

export default function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayEffect = () => <ModalOverlay bg="rgb(0, 0, 0, 0.7)" />;
  const [overlay, setOverlay] = useState(<OverlayEffect />);

  function onSearch() {
    if (value.trim().length === 0) return;
    Navigate(`/?q=${value}`);
  }

  const Navigate = (url: T) => {
    router.push(url);
    onClose();
    setValue("");
  };
  return (
    <>
      <IconButton
        icon={<SearchIcon />}
        fontSize={"xl"}
        aria-label="Search"
        variant={"none"}
        onClick={() => {
          onOpen();
          setOverlay(<OverlayEffect />);
        }}
      />
      <Modal onClose={onClose} isOpen={isOpen}>
        {overlay}
        <ModalContent bg="blackAlpha.500" maxW="35rem" marginTop="5rem">
          <ModalBody>
            <Stack spacing={3}>
              <Input
                variant="outline"
                placeholder="Search for products"
                size="lg"
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setValue(e.target.value)
                }
                value={value}
                onBlur={onClose}
                bg="blackAlpha.500"
                color="white"
                sx={{ width: { base: "20rem", sm: "25rem", md: "32rem" } }}
                onKeyPress={(e: React.KeyboardEvent) =>
                  e.key === "Enter" ? onSearch() : null
                }
              />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
