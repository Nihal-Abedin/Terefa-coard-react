export interface TaskTypes {
    name: string;
    id: string;
    createdBy: string;
    cards: Cards[];
    data: TaskTypes[]
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
    endDate: string;
    status: string
}

export interface CardPayload {
    name: string;
    endDate?: string;
    taskOf?: string;
    priority?: string;
}
export interface CardMovePayload {
    taskOf: string;
    cardId: string
}
export interface CardUpdatePayload {
    [name: string]: string
}
export interface CardUpdatePayloadV2 {
    cardId: string;
    data?: {
        name?: string;
        priority?: 'high' | "medium" | "low";
        taskOf?: string;
        endDate?: string;
        status?: string
    }
}
