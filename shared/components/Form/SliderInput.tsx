import {
  Box,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderProps,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useController } from "react-hook-form";

type SliderInputProps = SliderProps & {
  minLabel: string;
  maxLabel: string;
  name: string;
  labelValue: string | ReactNode;
};

export const SliderInput: React.FC<SliderInputProps> = ({
  minLabel,
  maxLabel,
  name,
  labelValue,
  ...props
}) => {
  const { field } = useController({
    name,
  });
  if (!props.min || !props.max) {
    return null;
  }
  return (
    <Box color="text-light">
      <Text fontWeight="semibold" fontSize="xs">
        {props["aria-label"]}
      </Text>
      {labelValue}
      <Slider mb={8} {...field} {...props}>
        <SliderTrack bg="gray.300">
          <SliderFilledTrack bg="blue.600" />
        </SliderTrack>
        <SliderThumb w={[6, 3]} h={[6, 3]} />
        <Flex
          position="relative"
          top={[8, 5]}
          justifyContent="space-between"
          fontSize="xs"
        >
          <Text>{minLabel}</Text>
          <Text>{maxLabel}</Text>
        </Flex>
      </Slider>
    </Box>
  );
};
