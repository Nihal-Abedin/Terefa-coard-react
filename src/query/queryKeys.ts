
export const taskQueryKeys = {
    all: ["tasks"] as const,
    lists: () => [...taskQueryKeys.all, "taskLists"] as const,
    list: (searchTxt: string) =>
        [...taskQueryKeys.lists(), { searchTxt }] as const,
};