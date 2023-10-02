import React from "react";
import Layout from "./../components/Layout";
import { message, notification, Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NotificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  //   handle read notification
  const handleMarkAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/get-all-notification",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("somthing went wrong");
    }
  };

  // delete notifications
  const handleDeleteAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/delete-all-notification",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
        
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrong In Ntifications");
    }
  };
  return (
    <Layout>
    
      <h1 className="text-center text-bg-primary p-3">Notification Page</h1>
      <Tabs >
        <Tabs.TabPane  tab="unread" key={0} >
       
        {/* <nav className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button" >Main button</button>
          <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
        </form>
      </nav> */}
          <div className="d-flex justify-content-end ">
          <h4
              className="alert alert-primary" 
              style={{ cursor: "pointer" }}
              onClick={handleMarkAllRead}
            >
              Mark All Read
            </h4>
          </div>
          {user?.notifcation.map((notificationMgs) => (
            <div className="card alert alert-primary" style={{ cursor: "pointer" }}>
              <div
                className="card-text"
                onClick={() => navigate(notificationMgs.onClickPath)}
              >
                
                <ul class="list-group list-group-flush">
                <li class="list-group-item">{notificationMgs.message}</li>
               
              </ul>
              </div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Read" key={1}>
          <div className="d-flex justify-content-end">
            <h4
              className="alert alert-primary" 
              style={{ cursor: "pointer" }}
              onClick={handleDeleteAllRead}
            >
              Delete All Read
            </h4>
          </div>
          {user?.seennotification.map((notificationMgs) => (
            <div className="card alert alert-primary" style={{ cursor: "pointer" }}>
              <div
                className="card-text"
                onClick={() => navigate(notificationMgs.onClickPath)}
              >
                <ul class="list-group list-group-flush">
                <li class="list-group-item">{notificationMgs.message}</li>
               
              </ul>
               
              </div>
            </div>
          ))}
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
};

export default NotificationPage;
