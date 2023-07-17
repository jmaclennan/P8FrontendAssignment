import {
  Radio,
  RadioGroup,
  RadioGroupProps,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";

type RadioGroupInputProps = Partial<RadioGroupProps> & {
  name: string;
  periodValues: number[];
};

export const RadioGroupInput: React.FC<RadioGroupInputProps> = ({
  name,
  periodValues,
  ...props
}) => {
  const { field } = useController({
    name,
  });

  return (
    <Stack color="text-light" spacing={4}>
      <Text fontWeight="semibold" fontSize="xs">
        {props["aria-label"]}
      </Text>
      <RadioGroup {...field} value={String(field.value)}>
        <Stack spacing={2}>
          {periodValues.map((v) => (
            <Radio value={String(v)} key={v} colorScheme="purple" size="xl">
              {v} Years
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Stack>
  );
};
