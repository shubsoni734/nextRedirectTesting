import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        // Assuming your server is running at http://localhost:3000
        const targetUrl = 'http://localhost:3000/success';
        const url = await req.json();
        // Set the appropriate response headers for redirection
        const headers = new Headers();
        headers.set('Location', targetUrl);
            
        // Return a 302 Found status code with the target URL
        return new Response(null, {
            status: 302,
            headers,
        });
    } catch (error) {
        console.error('Something went wrong:', error);
        // Handle the error gracefully (e.g., log it or return an error response)
        return new Response('Internal Server Error', { status: 500 });
    }
};
