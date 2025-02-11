export const convertCurrency = (amount: string | number) => {
    return new Intl.NumberFormat('uk-Ua', {
        style: 'currency',
        currency: 'UAH',
    }).format(+amount)
}