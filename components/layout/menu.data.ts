export interface IMenuItem {
    name: string;
    url: string;
    icon: string;
}

export const MENU_DATA: IMenuItem[] = [{
    icon: "radix-icons:dashboard",
    name: 'Home',
    url: '/'
}, {
    name: 'Products',
    url: '/products',
    icon: 'ep:goods'
},
{
    name: 'Payments',
    url: '/payments',
    icon: 'ph:contactless-payment'
},
{
    name: 'Orders',
    url: '/orders',
    icon: 'fluent:receipt-28-regular'
},
{
    name: 'Customers',
    url: '/customers',
    icon: 'mingcute:group-line'
},
{
    name: 'Feedback',
    url: '/feedback',
    icon: 'fluent:person-feedback-48-regular'
},
{
    name: 'Settings',
    url: '/settings',
    icon: 'radix-icons:gear'
},
{
    name: 'Help center',
    url: '/help',
    icon: 'radix-icons:question-mark'
}
]