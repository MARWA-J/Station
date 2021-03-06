// Booinkg page config
import { BiDotsVerticalRounded } from "react-icons/bi";

import { Checkbox, Table, Tooltip, Tag, Space, Button, Input } from "antd";
export const CustomersColumns = [
  {
    title: "",
    dataIndex: "",
    render: () => <Checkbox />,
  },
  {
    title: "Full Name",
    dataIndex: "FullName",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Phone Number",
    dataIndex: "PhoneNumber",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },

  {
    title: "Date",
    dataIndex: "Date",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: (Status) => (
      <>
        {Status.map((status) => {
          let color;
          if (status === "Enabled") {
            color = "green";
          } else {
            color = "gold";
          }
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "",
    dataIndex: "",
    render: () => (
      <BiDotsVerticalRounded
        style={{ fontSize: "20px", color: "var(--lighterGray)" }}
      />
    ),
  },
];
