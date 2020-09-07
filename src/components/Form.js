import { useForm, Controller } from 'react-hook-form';

export default function Form(defaultValues) {
  const form = useForm({
    mode: 'onBlur',
    defaultValues,
  });

  return form;
}
