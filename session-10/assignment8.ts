function buildUrl(path:string, queryParams?: Record<string, string>): string{
    const hasParams = Object.keys(queryParams ?? {}).length > 0;
    if (!hasParams) return path;

    const search = Object.entries(queryParams!).map(([k, v])=> `${encodeURIComponent(k)} = ${encodeURIComponent(v)}`)
    .join("&")

    return `${path}?${search}`;

}

const u1: string = buildUrl("/api/users");
const u2: string = buildUrl("api/users", {page:"2", q: "someName"});

// buildUrl(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// buildUrl('/api', { page: 2 }); // Error: Type 'number' is not assignable to type 'string'.


// Calling buildApiUrl() with no arguments
// error TS2554: Expected 1-2 arguments, but got 0.
