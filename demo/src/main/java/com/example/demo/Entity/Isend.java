package com.example.demo.Entity;

public class Isend {
    int taskid;
    String title;
    int groupid;
    String userid;
    int ifend;
    int result;
    String memname;
    int picid;

    @Override
    public String toString() {
        return "Isend{" +
                "taskid=" + taskid +
                ", title='" + title + '\'' +
                ", groupid=" + groupid +
                ", userid='" + userid + '\'' +
                ", ifend=" + ifend +
                ", result=" + result +
                ", memname='" + memname + '\'' +
                ", picid=" + picid +
                '}';
    }

    public int getPicid() {
        return picid;
    }

    public void setPicid(int picid) {
        this.picid = picid;
    }

    public String getMemname() {
        return memname;
    }

    public void setMemname(String memname) {
        this.memname = memname;
    }

    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }



    public int getTaskid() {
        return taskid;
    }

    public void setTaskid(int taskid) {
        this.taskid = taskid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getGroupid() {
        return groupid;
    }

    public void setGroupid(int groupid) {
        this.groupid = groupid;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public int getIfend() {
        return ifend;
    }

    public void setIfend(int ifend) {
        this.ifend = ifend;
    }

}
