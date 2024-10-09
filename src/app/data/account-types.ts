import { AccountType } from "@/domain/models/AccountType";

export const ACCOUNT_TYPES: AccountType[] = [
    {
        id: 1,
        name: "MySelf",
        accountType: "Personal Account",
        icons: [
            {
                image: "thd-myself.svg",
                name: "TheHomeDepotMySelf"
            },
            {
                image: "myself-icon.png",
                name: "TheHomeDepotMySelfIcon"
            }
        ],
        benefits: [
            {
                name: "Enjoy Fash Checkout",
                icon: {
                    name: "enjoy-fast-checkout",
                    image: "enjoy-fast-checkout.png"
                }
            },
            {
                name: "Receive Exclusive Offers",
                icon: {
                    name: "receive-exclusive-offers",
                    image: "receive-exclusive-offers.png"
                }
            },
            {
                name: "Track Your Orders",
                icon: {
                    name: "track-your-orders",
                    image: "track-your-orders.png"
                }
            }
        ]
    },
    {
        id: 2,
        name: "My Business",
        accountType: "Pro Xtra Account",
        icons: [
            {
                image: "thd-myself.svg",
                name: "TheHomeDepotMySelf"
            }
        ],
        benefits: [
            {
                name: "Pro Account Perks",
                icon: {
                    name: "pro-account-perks",
                    image: "pro-account-perks.png"
                }
            },
            {
                name: "Receive Exclusive Offers",
                icon: {
                    name: "receive-exclusive-offers",
                    image: "receive-exclusive-offers.png"
                }
            },
            {
                name: "Track Your Orders",
                icon: {
                    name: "track-your-orders",
                    image: "track-your-orders.png"
                }
            },
            {
                name: "Volume Pricing Program",
                icon: {
                    name: "volume-pricing-program",
                    image: "volume-pricing-program.png"
                }
            },
            {
                name: "Pro Xtra Paint Rewards",
                icon: {
                    name: "pro-xtra-paint-rewards",
                    image: "pro-xtra-paint-rewards.png"
                }
            },
            {
                name: "Text to Confirm Purchase Authorization",
                icon: {
                    name: "text-to-confirm-purchase-authorization",
                    image: "text-to-confirm-purchase-authorization.png"
                }
            }
        ]
    }
];