import { Auth } from '@/modules/auth/entities/auth.entity';
import { Role } from '@/utils/constants';

export interface UserProps {
  id?: string;
  firstName: string;
  middleName: string;
  lastName: string;
  auth: Auth;
}
