import React from 'react';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {ThemeColors} from '../../theme/theme';
import useAppTheme from '../../hooks/useAppTheme';

export interface IconBaseProps {
  color?: string;
  size?: number;
}

interface IconProps extends IconBaseProps {
  name: IconsName;
  color?: ThemeColors;
  size?: number;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size = 24,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

export type IconType = typeof iconRegistry;
export type IconsName = keyof IconType;
