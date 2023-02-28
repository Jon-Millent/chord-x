import {BookItemFace, PianoConfig} from "@/pages/config/book";
import nzh from 'nzh'
import {
  AbstractNearType, DiminishedNearType,
  MajorNearType,
  MinorNearType,
  NoteNearFace,
  NoteNearTypeSuper, PerfectNearType,
  UnknownNearType
} from "@/plugins/music-tool/types";

function checkDeg(needDeg: number, noteNumber: number) {
  let nearType = UnknownNearType
  switch (needDeg) {
    case 2:
      if (noteNumber == 1) {
        nearType = MajorNearType
      } else if (noteNumber == 0.5) {
        nearType = MinorNearType
      } else if (noteNumber == 1.5) {
        nearType = AbstractNearType
      } else if (noteNumber == 0) {
        nearType = DiminishedNearType
      }
      break
    case 3:
      if (noteNumber == 1.5) {
        nearType = MinorNearType
      } else if (noteNumber == 2) {
        nearType = MajorNearType
      } else if (noteNumber == 2.5) {
        nearType = AbstractNearType
      } else if (noteNumber == 1) {
        nearType = DiminishedNearType
      }
      break
    case 1:
      if (noteNumber === 0) {
        nearType = PerfectNearType
      } else if (noteNumber === 0.5) {
        nearType = AbstractNearType
      }
      break
    case 4:
      if (noteNumber === 2.5) {
        nearType = PerfectNearType
      } else if (noteNumber === 3) {
        nearType = AbstractNearType
      } else if (noteNumber === 2) {
        nearType = DiminishedNearType
      }
      break
    case 5:
      if (noteNumber === 3.5) {
        nearType = PerfectNearType
      } else if (noteNumber === 3) {
        nearType = DiminishedNearType
      } else if (noteNumber === 4) {
        nearType = AbstractNearType
      }
      break
    case 6:
      if (noteNumber === 4) {
        nearType = MinorNearType
      } else if (noteNumber === 4.5) {
        nearType = MajorNearType
      } else if (noteNumber === 3.5) {
        nearType = DiminishedNearType
      } else if (noteNumber === 5) {
        nearType = AbstractNearType
      }
      break
    case 7:
      if (noteNumber === 5) {
        nearType = MinorNearType
      } else if (noteNumber === 5.5) {
        nearType = MajorNearType
      } else if (noteNumber === 4.5) {
        nearType = DiminishedNearType
      } else if (noteNumber === 6) {
        nearType = AbstractNearType
      }
      break
    case 8:
      if (noteNumber === 6) {
        nearType = PerfectNearType
      } else if (noteNumber === 5.5) {
        nearType = DiminishedNearType
      } else if (noteNumber === 6.5) {
        nearType = AbstractNearType
      }
      break
  }

  return {
    nearType
  }
}

export default function getTowNoteNear (start: BookItemFace, end: BookItemFace): NoteNearFace {
  // 两个音的距离不能超过8度

  let title = ''
  let des = ''
  let nearType: NoteNearTypeSuper = UnknownNearType;

  let needDeg = Math.abs(start.compDeg - end.compDeg) + 1
  let noteNumber = Math.abs(start.compFromA - end.compFromA)

  if (needDeg <= 8) {
    const result = checkDeg(needDeg, noteNumber)
    title = result.nearType.label + nzh.cn.encodeS(needDeg.toString()) + '度'
    nearType = result.nearType
  } else {
    // 把这个音放到start音的八度内，判断
    let inAreaEnd: any = null

    PianoConfig.forEach(item => {
      if (item.group == start.group) {
        if (item.key === end.key && item.up == end.up) {
          inAreaEnd = item
        }
      }
    })

    if (inAreaEnd) {
      let newNeedDeg = Math.abs(start.compDeg - inAreaEnd.compDeg) + 1
      let newNoteNumber = Math.abs(start.compFromA - inAreaEnd.compFromA)

      const result = checkDeg(newNeedDeg, newNoteNumber)
      title = result.nearType.label + nzh.cn.encodeS(needDeg.toString()) + '度'
      nearType = result.nearType
    }
  }

  return {
    title,
    des,
    noteNumber,
    deg: needDeg,
    nearType
  }
}