import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Kenji Iwatani</Text>
        <Text color="gray.300" fontSize="small">
          kleversonkenji@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Kenji Iwatani"
        src="https://www.github.com/iwatanikenji.png"
      />
    </Flex>
  );
}
