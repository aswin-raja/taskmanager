import React from "react";
import { Modal } from "antd";
import { Button, Form, Input, TimePicker, DatePicker  } from "antd";
import ModalStyled from "./ModalStyled";


const Modalcomponent = (props) => {
  return (
    <ModalStyled>
      <Modal
        title={props.edittask ? "Edit Task" : "Add New Task"}
        centered
        open={props.addtask}
        footer={[
          <div style={{ textAlign: "center" }} key="button-container">
            <Button key="submit" type="primary" onClick={props.ModalClose}>
             {props.edittask ? "Save Changes" : "Add Task"}
            </Button>
            
            <Button key="back" type="primary" danger onClick={props.ModalClose}>
              Cancel
            </Button>
          </div>
        ]}
        onCancel={props.ModalClose}
      >
        <Form layout="vertical">
          <Form.Item label="TITLE">
            <Input placeholder="task title"  className="inputfield"/>
          </Form.Item>
          <Form.Item label="DESCRIPTION">
            <Input placeholder="task description" className="inputfield"/>
          </Form.Item>
          <Form.Item label="DUE DATE" className="inputfield">
            <DatePicker style={{ width: "100%" }}/>
          </Form.Item>
          <Form.Item label="DUE TIME">
            <TimePicker style={{ width: "100%" }}/>
          </Form.Item>
        </Form>
      </Modal>
    </ModalStyled>
  );
};
export default Modalcomponent;
