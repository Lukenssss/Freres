import { config } from '@/extra/config'
import mercadopago from 'mercadopago'

mercadopago.configure({
    access_token: process.env.MP_TOKEN as string,
})

export async function POST(req: Request) {
    const { precio, nombre, cantidad } = await req.json()

    const portal = await mercadopago.preferences.create({
        items: [
            {
                title: nombre,
                quantity: cantidad,
                currency_id: 'ARS',
                unit_price: precio,
            },
        ],
        back_urls: {
            success: `${config.base}`,
        },
        auto_return: 'approved',
    })

    return Response.json({
        url: portal.body.init_point
    }, {
        status: 200,
    })
}