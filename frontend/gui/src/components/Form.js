import React from 'react'
import {
    Form, Input, Button, Radio,
} from 'antd';

const FormItem = Form.item



class CustomForm extends React.Component {


    render() {

        return (
            <div>
                <Form >
                    <Form.Item
                        label="Field A"

                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        label="Field B"

                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CustomForm
