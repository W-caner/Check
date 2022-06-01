package com.example.demo.Dao;

import com.example.demo.Entity.Isend;
import com.example.demo.Entity.Task;
import org.apache.ibatis.annotations.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Repository;
import java.util.Date;
//import java.sql.Date;
import java.util.List;

@Mapper
@Repository
public interface TaskDao {
    @Select("select * from isend where groupid=#{id} and userid=#{userid}")
    public List<Isend> getTask(int id, String userid);

//    @Select("select isend.taskid,isend.title from isend where groupid=#{id} and userid=#{userid}")
//    public List<Isend> getTask3(int id, String userid);

    @Select("select taskid,title from task where groupid=#{id}")
    public List<Task> getTask2(int id);

    @Insert("insert into task(title,photo,description,recognition,groupid,publishtime) values(#{title},#{photo},#{des},#{recognition},#{groupid},#{publishtime})")
    public int insertTask(String title, String photo,String des, String recognition, int groupid, Date publishtime);

    @Insert("insert into task(title,groupid,description,publishtime,endtime) values(#{title},#{groupid},#{description},#{publishtime},#{endtime})")
    @Options(useGeneratedKeys=true, keyProperty="taskid", keyColumn="taskid")
    public Task insertTaskJKM(String title, int groupid,String description, Date publishtime,Date endtime);

    @Update("update task set endtime = #{endtime} where taskid=#{taskid}")
    public int endTask(Date endtime,int taskid);

    @Delete("delete from task where taskid = #{taskid}")
    public int deleteTask(int taskid);

    @Select("select * from task where taskid=#{id}")
    public Task getTaskInfo(int id);

    @Select("select title,description from task where taskid=#{id}")
    public String getTaskTitle(int id);
}
