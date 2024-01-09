import { Role } from '@/utils/constants';
import { Profile } from 'passport';

export interface UserProps {
  id?: string;
  email: string;
  password: string;
  isVerified: boolean;
  role: Role;
  // createdAt: Date;
  // updatedAt: Date;
}
