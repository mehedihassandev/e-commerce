import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import {
  Control,
  Controller,
  ControllerProps,
  FieldValues
} from 'react-hook-form';

// Create a generic type for the RhfCheckbox component
type RhfCheckboxProps<T extends FieldValues> = {
  control: Control<T>;
  label: string;
} & Omit<CheckboxProps, 'onChange' | 'value'> &
  Omit<ControllerProps<T>, 'render' | 'control'>;

export const RhfCheckbox = <T extends FieldValues>({
  control,
  size = 'small',
  label,
  ...props
}: RhfCheckboxProps<T>) => {
  return (
    <Controller
      control={control}
      {...props}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={!!value}
              onChange={onChange}
              size={size}
              {...props}
            />
          }
          label={label}
        />
      )}
    />
  );
};

export default RhfCheckbox;
