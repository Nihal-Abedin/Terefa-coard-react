export interface TaskTypes {
    data: [{
        name: string;
        id: string;
        createdBy: string;
        cards: Cards[]
    }]
}
export interface TaskDataTypes {
    name: string;
    id: string;
    createdBy: string;
    cards: Cards[]
}
export interface Cards {
    createdAt: string;
    name: string;
    priority: 'high' | "medium" | "low";
    taskOf: string;
    _id: string;
}