export interface User {
    id?: string;
    email?: string | null;
    password?: string;
    isFirstTime?: boolean;
    accountTypeId?: number;
    phone?: string;
    companyName?: string;
    firstName?: string;
    lastName?: string;
    companyAddress?: string;
    businessOrTrade?: string;
}