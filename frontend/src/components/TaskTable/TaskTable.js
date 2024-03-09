import React,{useState} from "react";
import { Table } from "antd";
import TaskTableStyled from "./TaskTableStyled";
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Modalcomponent from "../Modal/Modal";




  const datasource = [
    {
      taskid: 1,
      tasktitle: "Sample Task 1",
      taskdescription: "Description for Task 1",
      duedate: "2023-10-01",
      duetime: "10:00 AM",
    },
    {
      taskid: 2,
      tasktitle: "Sample Task 2",
      taskdescription: "Description for Task 2",
      duedate: "2023-10-02",
      duetime: "10:30 AM",
    },
    {
      taskid: 3,
      tasktitle: "Sample Task 3",
      taskdescription: "Description for Task 3",
      duedate: "2023-10-03",
      duetime: "11:00 AM",
    },
    {
      taskid: 4,
      tasktitle: "Sample Task 4",
      taskdescription: "Description for Task 4",
      duedate: "2023-10-04",
      duetime: "11:30 AM",
    },
    {
      taskid: 5,
      tasktitle: "Sample Task 5",
      taskdescription: "Description for Task 5",
      duedate: "2023-10-05",
      duetime: "12:00 PM",
    },
    {
      taskid: 6,
      tasktitle: "Sample Task 6",
      taskdescription: "Description for Task 6",
      duedate: "2023-10-06",
      duetime: "12:30 PM",
    },
    {
      taskid: 7,
      tasktitle: "Sample Task 7",
      taskdescription: "Description for Task 7",
      duedate: "2023-10-07",
      duetime: "1:00 PM",
    },
    {
      taskid: 8,
      tasktitle: "Sample Task 8",
      taskdescription: "Description for Task 8",
      duedate: "2023-10-08",
      duetime: "1:30 PM",
    },
    {
      taskid: 9,
      tasktitle: "Sample Task 9",
      taskdescription: "Description for Task 9",
      duedate: "2023-10-09",
      duetime: "2:00 PM",
    },
    {
      taskid: 10,
      tasktitle: "Sample Task 10",
      taskdescription: "Description for Task 10",
      duedate: "2023-10-10",
      duetime: "2:30 PM",
    },
  ];

function TaskTable() {


    const [addtask, setAddTask] = React.useState(false);
    const [dataSource, setDataSource] = useState(datasource);

    const ModalOpen = () =>{
        setAddTask(true);
      }
      
      const ModalClose = () =>{
        setAddTask(false);
      }

      const handleDeleteTask = (taskid) => {
        
        const updatedDataSource = dataSource.filter((task) => task.taskid !== taskid);
        setDataSource(updatedDataSource);
        alert("Task Deleted Successfully");
      };
  
      const columns = [
        {
          title: "Task ID",
          dataIndex: "taskid",
          key: "taskid",
        },
        {
          title: "Task Title",
          dataIndex: "tasktitle",
          key: "tasktitle",
        },
        {
          title: "Task Description",
          dataIndex: "taskdescription",
          key: "taskdescription",
        },
        {
          title: "Due Date",
          dataIndex: "duedate",
          key: "duedate",
        },
        { title: "Due Time", dataIndex: "duetime", key: "duetime" },
        {
            title: "Edit Task",
            dataIndex: "edit",
            key: "edit",
            render: () => <EditNoteOutlinedIcon onClick={ModalOpen}/>,
          },
          {
            title: "Delete",
            dataIndex: "delete",
            key: "delete",
            render: (text, record) => (
                
                  <DeleteOutlinedIcon onClick={() => handleDeleteTask(record.taskid)}/>
             
              ),
            },
      ];
  
  return (
    <TaskTableStyled>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <Modalcomponent addtask={addtask} ModalClose={ModalClose} edittask={true}/>
    </TaskTableStyled>
  );
}

export default TaskTable;
