package com.example.demo.Controller;

import com.example.demo.Entity.Group;
import com.example.demo.Entity.Isend;
import com.example.demo.Entity.Member;
import com.example.demo.Entity.Task;
import com.example.demo.Service.GroupService;
import com.example.demo.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/add")
public class GroupController {
    public GroupService groupService;
    public TaskService taskService;

    public TaskService getTaskService() {
        return taskService;
    }

    @Autowired
    public void setTaskService(TaskService taskService) {
        this.taskService = taskService;
    }

    public GroupService getGroupService() {
        return groupService;
    }

    @Autowired
    public void setGroupService(GroupService groupService) {
        this.groupService = groupService;
    }

    @ResponseBody
    @GetMapping("/getAddGroup")
    public List<Group> getAddGroup(@RequestParam("id") String id){
        List<Group> result = groupService.getAddGroup(id);
        return result;
    }

    @ResponseBody
    @PostMapping("/delAddGroup")
    public String delAddGroup(@RequestBody Member member){
        int result = groupService.delAddGroup(member.getUserid(),member.getGroupid());
        if (result>0){
            return "success";
        }else {
            return "failed";
        }
    }

    @ResponseBody
    @PostMapping("/addGroup")
    public String addGroup(@RequestBody Member member){
        int result = groupService.addGroup(member.getUserid(),member.getGroupid(),member.getMemname(),1);
        if (result>0){
            return "success";
        }else {
            return "failed";
        }
    }

    @ResponseBody
    @GetMapping("/getName")
    public String getName(@RequestParam("id") int id){
        return groupService.getGroupName(id);
    }

    @ResponseBody
    @GetMapping("/getTask")
    public List<Isend> getTask(@RequestParam("id") int id, @RequestParam("userid") String userid){
        List<Isend> result =  taskService.getTask(id,userid);
        return result;
    }

    @ResponseBody
    @GetMapping("/altername")
    public String getMemName(@RequestParam("id") int id,@RequestParam("userid") String userid){
        String result =  groupService.getMemName(id, userid);
        return result;
    }

    @ResponseBody
    @PostMapping("/alter")
    public String alter(@RequestBody Member member){
        int result = groupService.alterName(member.getMemname(),member.getUserid(),member.getGroupid());
        if(result>0){
            return "success";
        }
        return "failed";
    }



}
