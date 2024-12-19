// api/new-meetup
// POST /api/new-meetup

function handler(request, response) {
    if (request.method === "POST") {
        const data = request.body;
        const { title, image, address, description } = data;
    }
}

export default handler;

