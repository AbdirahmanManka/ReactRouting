import axios from "axios";
import { Table } from "antd";
import { useEffect, useState } from "react";
import "antd/dist/antd.css"

export default function App() {
  let [data, setData] = useState([]);
  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/posts/")
    .then(res => {
      console.log(res.data);
      setData(res.data)
      console.log(res)
    }).catch(e => console.error("an error occurred"));
    
  }, []);
  const cols = [
    {
      title: "User ID",
      index: "userId",
      dataIndex: "userId"
    },
    {
      title: "Title",
      index: "title",
      dataIndex: "title"
    }
  ]
  return (
   <Table dataSource={data} columns={cols} rowKey={record => record.id} />
  );
}