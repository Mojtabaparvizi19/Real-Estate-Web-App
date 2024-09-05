import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack padding={2}>
        <Switch
          colorScheme="green"
          onChange={toggleColorMode}
          isChecked={colorMode === "dark"}
        />
        <Text marginTop={"10px"} whiteSpace={"nowrap"}>
          Dark Mode
        </Text>
      </HStack>
    </>
  );
}

export default ColorModeSwitch;
