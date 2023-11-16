
export const taskQueryKeys = {
    all: ["tasks"] as const,
    lists: () => [...taskQueryKeys.all, "taskLists"] as const,
    list: (searchTxt: string) =>
        [...taskQueryKeys.lists(), { searchTxt }] as const,
    // mutate : ()=>
};

export const cardQueryKeys = {
    all: ["cards"] as const,
    single: (id:string) => [id] as const,
};