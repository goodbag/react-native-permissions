import { ANDROID, IOS, PERMISSIONS, RESULTS } from './constants';
import { Rationale } from 'react-native';
export { Rationale } from 'react-native';
declare type Values<T extends object> = T[keyof T];
export declare type AndroidPermission = Values<typeof ANDROID>;
export declare type IOSPermission = Values<typeof IOS>;
export declare type Permission = AndroidPermission | IOSPermission;
export declare type PermissionStatus = Values<typeof RESULTS>;
export interface FullAccuracyOptionsIOS {
    temporaryPurposeKey: string;
}
export declare type RequestOptions<T extends Permission = Permission> = T extends typeof PERMISSIONS.IOS.LOCATION_FULL_ACCURACY ? FullAccuracyOptionsIOS : Rationale;
export declare type NotificationOption = 'alert' | 'badge' | 'sound' | 'carPlay' | 'criticalAlert' | 'provisional';
export interface NotificationSettings {
    alert?: boolean;
    badge?: boolean;
    sound?: boolean;
    carPlay?: boolean;
    criticalAlert?: boolean;
    lockScreen?: boolean;
    notificationCenter?: boolean;
}
export interface NotificationsResponse {
    status: PermissionStatus;
    settings: NotificationSettings;
}
