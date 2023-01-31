export default async function nitroType(client) {
    let nitro = "";
    let type = await client.billing.fetchCurrentSubscription(); 
    
    if (type.first() == null || undefined) {
        return nitro += "Sem nitro."
    } else if (type.type == 1 && type.payment_gateway_plan_id == "premium_tier_2_monthly") {
        return nitro += "Nitro + 2 Boosters"
    } else if (type.type == 1 && type.payment_gateway_plan_id == null || undefined) {
        return nitro += "Nitro Basic"
    }
}