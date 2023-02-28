
import './index.less'
import {Button} from "antd";
import {history} from "umi";

export default function HomePage () {

  const openPath = (path: string) => {
    history.push(path)
  }

  return (
    <div className="page-home">
      <ul>
        <li>
          <Button type="primary" onClick={() => openPath('/tools/interval')}>
            音程计算器
          </Button>
        </li>
        <li>
          <Button type="primary" onClick={() => openPath('/tools/chord')}>
            和弦计算器
          </Button>
        </li>
      </ul>
    </div>
  )
}