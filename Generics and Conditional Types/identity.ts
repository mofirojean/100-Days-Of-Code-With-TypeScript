// creating a simple function

function identity (x: number): number {
    return x
}

// creating thesame function for a string
function identityString (x: string): string {
    return x
}

// working with generic
function identityG<T> (x : T): T {
    return x
}
