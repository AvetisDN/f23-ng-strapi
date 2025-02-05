import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Lock,
  Home,
  User,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronsRight,
  LogIn,
  LogOut,
  UserPlus,
  Settings,
  Sliders,
  Sun,
  Moon,
  Monitor,
  Cpu,
} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Lock,
  Home,
  User,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronsRight,
  LogIn,
  LogOut,
  UserPlus,
  Settings,
  Sliders,
  Sun,
  Moon,
  Monitor,
  Cpu,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
