export async function GET() {

    const equipos = [
        {
            id: 1,
            nombre: "Real Madrid"
        },
        {
            id: 2,
            nombre: "Barcelona"
        }
    ]

    return Response.json(equipos)
}