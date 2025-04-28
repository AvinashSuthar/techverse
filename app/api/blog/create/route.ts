export async function POST() {

    console.log("hewre");
    return new Response("Hello");
}

export async function GET() {
    console.log("get");
    return new Response("Hello");
}
