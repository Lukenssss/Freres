type Message = {
    role: 'user' | 'system',
    content: string,
}

type CardProps = {
    item: string;
    price: number;
    id: number;
}