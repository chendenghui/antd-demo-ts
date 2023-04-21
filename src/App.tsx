import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import VvTable from "./compontents/vvTable";
import "./App.less";

const App: React.FC = () => (
  <div className="wrap">
    <VvTable />
  </div>
);

export default App;
