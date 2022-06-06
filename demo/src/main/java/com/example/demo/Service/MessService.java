package com.example.demo.Service;

import com.example.demo.Dao.MessageDao;
import com.example.demo.Dao.TaskDao;
import com.example.demo.Entity.Message;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class MessService {
    private MessageDao messageDao;

    public MessageDao getMessageDao() {
        return messageDao;
    }

    @Autowired
    public List<Message> getMess(String userid) {
        return messageDao.getMessage(userid);
    }

    public void messenday() {
        messageDao.messenday();
    }

    public void sendMess(int tid) {
        messageDao.messend(tid);
    }
}
