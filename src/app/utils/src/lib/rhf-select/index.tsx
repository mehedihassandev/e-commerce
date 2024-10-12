import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  Typography
} from '@mui/material';
import {
  Control,
  Controller,
  ControllerProps,
  FieldValues
} from 'react-hook-form';

type FormValues = {
  // Add your form fields here
};

type RhfSelectFieldProps<T extends FieldValues> = {
  control: Control<T>;
  options: { value: string; label: string }[];
  label?: string;
  variant?: 'standard' | 'outlined' | 'filled'; // Add variant prop
} & Omit<SelectProps, 'onChange' | 'value'> &
  Omit<ControllerProps<T>, 'render' | 'control'>;

export const RhfSelect = <T extends FieldValues>({
  control,
  options,
  label,
  size = 'small',
  variant = 'outlined', // Default variant to outlined, change as needed
  ...props
}: RhfSelectFieldProps<T>) => {
  return (
    <Controller
      control={control}
      {...props}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl variant={variant} size={size} fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select
            label={label}
            onChange={onChange}
            value={value}
            error={!!error}
            {...props}
          >
            {options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {error && (
            <Typography
              variant="caption"
              color="error"
              fontWeight={900}
              sx={{ mt: 0.5, pl: 1 }}
            >
              {error.message}
            </Typography>
          )}
        </FormControl>
      )}
    />
  );
};

export default RhfSelect;
