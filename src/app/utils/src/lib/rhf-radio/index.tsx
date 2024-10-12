import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioProps
} from '@mui/material';
import {
  Control,
  Controller,
  ControllerProps,
  FieldValues
} from 'react-hook-form';

// Define a generic type for the form data structure (FormValues)
type FormValues = {
  // Add your form fields here
  // For example: selectedOption: string;
};

// Create a generic type for the RhfRadioField component
type RhfRadioFieldProps<T extends FieldValues> = {
  control: Control<T>;
  options: { value: string; label: string }[];
  label?: string;
  row?: boolean;
} & Omit<RadioProps, 'onChange' | 'value'> &
  Omit<ControllerProps<T>, 'render' | 'control'>;

export const RhfRadio = <T extends FieldValues>({
  control,
  options,
  label,
  size = 'small',
  row = false,
  ...props
}: RhfRadioFieldProps<T>) => {
  return (
    <Controller
      control={control}
      {...props}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl
          variant="outlined"
          component="fieldset"
          error={!!error}
          size={size}
          fullWidth
        >
          <FormLabel>{label}</FormLabel>
          <RadioGroup row={row} value={value} onChange={onChange}>
            {options?.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default RhfRadio;
