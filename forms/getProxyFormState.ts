import type { FieldValues } from '@specfocus/spec-focus/fields';
import type { FormState, ReadFormState } from '.';
import { VALIDATION_MODE } from '../validations/modes';

export default <TFieldValues extends FieldValues>(
  formState: FormState<TFieldValues>,
  _proxyFormState: ReadFormState,
  localProxyFormState?: ReadFormState,
  isRoot = true,
) => {
  const result = {} as typeof formState;

  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key as keyof FormState<TFieldValues> & keyof ReadFormState;

        if (_proxyFormState[_key] !== VALIDATION_MODE.all) {
          _proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }

        localProxyFormState && (localProxyFormState[_key] = true);
        return formState[_key];
      },
    });
  }

  return result;
};
