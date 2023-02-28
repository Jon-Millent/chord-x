import {useEffect, useState} from "react";
import {Form, message, Select} from "antd";
import {BookItemFace, PianoConfig, UP} from "@/pages/config/book";
import './index.less'
import getTowNoteNear from "@/plugins/music-tool";
import {NoteNearFace, UnknownNearType} from "@/plugins/music-tool/types";

export default function IntervalPage () {
  const [form] = Form.useForm()

  const [result, setResult] = useState<NoteNearFace>({
    deg: 0,
    des: "",
    noteNumber: 0,
    title: "",
    nearType: UnknownNearType
  })

  const submit = async ()=> {
    const formData = form.getFieldsValue()

    const start: BookItemFace | undefined = PianoConfig.find(item => item.uniKey === formData.start)
    const end: BookItemFace | undefined = PianoConfig.find(item => item.uniKey === formData.end)

    if (start && end) {
      const result = await getTowNoteNear(start, end)
      setResult(result)
    }
  }

  useEffect(()=> {
    // console.log(PianoConfig, 'PianoConfig')
  }, [])

  return (
    <div className={'interval-page'}>
      <h1>音程计算器</h1>
      <div className={'console'}>
        <h1>结果：{result.title}</h1>
        <h2>间隔度数：{result.deg}</h2>
        <h2>间隔半音：{result.noteNumber}</h2>
        <h2>关系：{result.nearType.label} {result.nearType.en}</h2>
        <h2>备注：{result.des}</h2>
      </div>
      <div style={{width: '600px'}}>
        <Form
          form={form}
          labelCol={{ span: 6 }}
          size={'large'}
          initialValues={{
          }}
          onFinish={submit}>
          <Form.Item
            label="开始音"
            name={'start'}
            rules={[{ required: true, message: '请选择开始音' }]}
          >
            <Select onChange={submit}>
              {
                PianoConfig.map(item => {
                  return (
                    <Select.Option key={item.uniKey} value={item.uniKey}>
                      <div className="interval-cell" style={{display: 'flex', height: '100%'}}>
                        <div className="interval-cell-item" style={{flex: '0 0 10px'}}>
                          {item.group}
                        </div>
                        <div className="interval-cell-item" style={{flex: '0 0 10px'}}>
                          {item.up ? UP : ' '}
                        </div>

                        <div className="interval-cell-item" style={{flex: 1}}>
                          {item.key}
                        </div>

                        <div className="interval-cell-item" style={{flex: 1}}>
                          {item.sing}
                        </div>
                        <div className="interval-cell-item" style={{flex: 1}}>
                          {item.number}
                        </div>
                        <div className="interval-cell-item" style={{flex: 1}}>
                          {item.roma}
                        </div>
                      </div>
                    </Select.Option>
                  )
                })
              }
            </Select>
          </Form.Item>

          <Form.Item
            label="结束音"
            name={'end'}
            rules={[{ required: true, message: '请选择结束音' }]}
          >
            <Select onChange={submit}>
              {
                PianoConfig.map(item => {
                  return (
                    <Select.Option key={item.uniKey} value={item.uniKey}>
                      <div className="interval-cell" style={{display: 'flex'}}>
                        <div className="interval-cell-item" style={{flex: '0 0 10px'}}>
                          {item.group}
                        </div>
                        <div className="interval-cell-item" style={{flex: '0 0 10px'}}>
                          {item.up ? UP : ''}
                        </div>
                        <div className="interval-cell-item" style={{flex: 1}}>
                          {item.key}
                        </div>
                        <div className="interval-cell-item" style={{flex: 1}}>
                          {item.sing}
                        </div>
                        <div className="interval-cell-item" style={{flex: 1}}>
                          {item.number}
                        </div>
                        <div className="interval-cell-item" style={{flex: 1}}>
                          {item.roma}
                        </div>
                      </div>
                    </Select.Option>
                  )
                })
              }
            </Select>
          </Form.Item>
        </Form>
      </div>

    </div>
  )
}