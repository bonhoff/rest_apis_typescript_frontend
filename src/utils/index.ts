export function formatCurrency(amount : number){
    return new Intl.NumberFormat("es-EU",{
        style:"currency",
        currency:"EUR"
    }).format(amount)
}

export function toBoolean(string: string){
    return string.toLowerCase() === "true"
}