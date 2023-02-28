import {BookItemFace} from "@/pages/config/book";

export interface NoteNearFace {
  title: string;
  des: string;

  noteNumber: number;
  deg: number;
}

export default function getTowNoteNear (start: BookItemFace, end: BookItemFace): NoteNearFace {
  // 两个音的距离不能超过8度

  let title = ''
  let des = ''

  let needDeg = Math.abs(start.compDeg - end.compDeg) + 1
  let noteNumber = Math.abs(start.compFromA - end.compFromA)

  switch (needDeg) {
    case 2:
      if (noteNumber == 1) {
        title = '大二度'
      } else if (noteNumber == 0.5) {
        title = '小二度'
      } else if (noteNumber == 1.5) {
        title = '增二度'
      } else if (noteNumber == 0) {
        title = '减二度'
      }
      break
    case 3:
      if (noteNumber == 1.5) {
        title = '小三度'
      } else if (noteNumber == 2) {
        title = '大三度'
      } else if (noteNumber == 2.5) {
        title = '增三度'
      } else if (noteNumber == 1) {
        title = '减三度'
      }
      break
    case 1:
      if (noteNumber === 0) {
        title = '纯一度'
      } else if (noteNumber === 0.5) {
        title = '增一度'
      }
      break
    case 4:
      if (noteNumber === 2.5) {
        title = '纯四度'
      } else if (noteNumber === 3) {
        title = '增四度'
      } else if (noteNumber === 25) {
        title = '减四度'
      }
      break
    case 5:
      if (noteNumber === 3.5) {
        title = '纯五度'
      } else if (noteNumber === 3) {
        title = '减五度'
      } else if (noteNumber === 4) {
        title = '增五度'
      }
      break
    case 6:
      if (noteNumber === 4) {
        title = '小六度'
      } else if (noteNumber === 4.5) {
        title = '大六度'
      } else if (noteNumber === 3.5) {
        title = '减六度'
      } else if (noteNumber === 5) {
        title = '增六度'
      }
      break
    case 7:
      if (noteNumber === 5) {
        title = '小七度'
      } else if (noteNumber === 5.5) {
        title = '大七度'
      } else if (noteNumber === 4.5) {
        title = '减七度'
      } else if (noteNumber === 6) {
        title = '增七度'
      }
      break
    case 8:
      if (noteNumber === 6) {
        title = '纯八度'
      } else if (noteNumber === 5.5) {
        title = '减八度'
      } else if (noteNumber === 6.5) {
        title = '增八度'
      }
      break
  }
  // console.log(start, end)
  console.log({
    start,
    end,
    noteNumber,
    needDeg,
  })

  return {
    title,
    des,
    noteNumber,
    deg: needDeg
  }
}