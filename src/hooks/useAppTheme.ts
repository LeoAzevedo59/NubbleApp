import {useTheme} from '@shopify/restyle';
import {Theme} from '../theme/theme';

export default function useAppTheme() {
  return useTheme<Theme>();
}
