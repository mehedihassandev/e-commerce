import { TextField, TextFieldProps } from '@mui/material';
import {
  Control,
  Controller,
  ControllerProps,
  FieldValues
} from 'react-hook-form';

// Create a generic type for the RhfTextField component
type RhfTextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  trim?: boolean; // Add a trim prop to enable/disable trimming
} & Omit<TextFieldProps, 'onChange' | 'value'> &
  Omit<ControllerProps<T>, 'render' | 'control'>;

export const RhfTextField = <T extends FieldValues>({
  control,
  trim = true, // Default value for trim
  size = 'small',
  ...props
}: RhfTextFieldProps<T>) => {
  return (
    <Controller
      control={control}
      {...props}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const handleBlur = () => {
          if (trim && typeof value === 'string') {
            const trimmedValue = value.trim().replace(/\s+/g, ' ');
            if (trimmedValue !== value) {
              onChange(trimmedValue);
            }
          }
        };

        return (
          <TextField
            helperText={error ? error.message : ''}
            error={!!error}
            onChange={onChange}
            onBlur={handleBlur}
            value={value}
            {...props}
            size={size}
          />
        );
      }}
    />
  );
};

export default RhfTextField;
