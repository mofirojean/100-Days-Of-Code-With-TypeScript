interface FetchResponse {
    status: number;
    headers: Headers;
    data: any;
}

async function fetchJson<T>(url: string): Promise<FetchResponse> {
    const response = await fetch(url);

    return {
        headers: response.headers,
        status: response.status,
        data: await response.json()
    };
}
