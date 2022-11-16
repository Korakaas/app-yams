export class Pastrie {
    id: string;
    ref: string;
    name: string;
    description: string;
    url?: string;
    quantity: number;
    order: number;
    tags?: string[];
    like?: string;
}

export class List
{
    id: string;
    list: string[];
}
