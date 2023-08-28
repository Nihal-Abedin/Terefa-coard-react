import type { SelectProps } from "antd";

export const priorityOptions: SelectProps["options"] = [
    {
        label: "Low",
        value: "low",
    },
    {
        label: "Medium",
        value: "medium",
    },
    {
        label: "High",
        value: "high",
    },
];
export const statusOptions: SelectProps["options"] = [
    {
        label: 'Not Started',
        value: 'not started'
    },
    {
        label: 'In Progress',
        value: 'in progress'
    },
    {
        label: 'Done',
        value: 'done'
    }
]