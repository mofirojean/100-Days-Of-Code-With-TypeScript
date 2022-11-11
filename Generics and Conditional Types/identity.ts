interface FetchResponse<T> {
    status: number;
    headers: Headers;
    data: T;
}

export async function fetchJson<T>(url: string): Promise<FetchResponse<T>> {
    const response = await fetch(url);

    return {
        headers: response.headers,
        status: response.status,
        data: await response.json()
    };
}
