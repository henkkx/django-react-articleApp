import React from 'react'
import { List, Avatar, Icon } from 'antd';



const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Articles = (props) => {
    
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: (page) => {
                console.log(page);
            },
            pageSize: 3,
            }}
            dataSource={props.data}
            footer={<div><b>ant design</b> footer part</div>}
            renderItem={item => (
            <List.Item
                key={item.title}
                actions={[<IconText type="star-o" text={item.favorites} />, <IconText type="like-o" text={item.likes} />, <IconText type="message" text={item.n_comments} />]}
                extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
            >
                <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={`/${item.id}`}>{item.title}</a>}
                description={item.description}
                />
                {item.content}
            </List.Item>
            )}
        />
    )
}
  
export default Articles;