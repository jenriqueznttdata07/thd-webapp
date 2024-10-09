export interface AccountType {
    id: number;
    name: string;
    accountType: string;
    icons: Icon[]
    benefits: Benefict[];
}

export interface Icon {
    name: string;
    image: string;
}

export interface Benefict {
    name: string;
    icon: Icon;
}