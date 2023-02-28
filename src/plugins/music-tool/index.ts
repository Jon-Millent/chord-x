import {BookItemFace} from "@/pages/config/book";
import {
  AbstractNearType, DiminishedNearType,
  MajorNearType,
  MinorNearType,
  NoteNearFace,
  NoteNearTypeSuper, PerfectNearType,
  UnknownNearType
} from "@/plugins/music-tool/types";

export default function getTowNoteNear (start: BookItemFace, end: BookItemFace): NoteNearFace {
  // 两个音的距离不能超过8度

  let title = ''
  let des = ''
  let nearType: NoteNearTypeSuper = UnknownNearType;

  let needDeg = Math.abs(start.compDeg - end.compDeg) + 1
  let noteNumber = Math.abs(start.compFromA - end.compFromA)

  switch (needDeg) {
    case 2:
      if (noteNumber == 1) {
        nearType = MajorNearType
        title = '大二度'
      } else if (noteNumber == 0.5) {
        nearType = MinorNearType
        title = '小二度'
      } else if (noteNumber == 1.5) {
        nearType = AbstractNearType
        title = '增二度'
      } else if (noteNumber == 0) {
        nearType = DiminishedNearType
        title = '减二度'
      }
      break
    case 3:
      if (noteNumber == 1.5) {
        nearType = AbstractNearType
        title = '小三度'
      } else if (noteNumber == 2) {
        nearType = MajorNearType
        title = '大三度'
      } else if (noteNumber == 2.5) {
        nearType = AbstractNearType
        title = '增三度'
      } else if (noteNumber == 1) {
        nearType = DiminishedNearType
        title = '减三度'
      }
      break
    case 1:
      if (noteNumber === 0) {
        nearType = PerfectNearType
        title = '纯一度'
      } else if (noteNumber === 0.5) {
        nearType = AbstractNearType
        title = '增一度'
      }
      break
    case 4:
      if (noteNumber === 2.5) {
        nearType = PerfectNearType
        title = '纯四度'
      } else if (noteNumber === 3) {
        nearType = AbstractNearType
        title = '增四度'
      } else if (noteNumber === 25) {
        nearType = DiminishedNearType
        title = '减四度'
      }
      break
    case 5:
      if (noteNumber === 3.5) {
        nearType = PerfectNearType
        title = '纯五度'
      } else if (noteNumber === 3) {
        nearType = DiminishedNearType
        title = '减五度'
      } else if (noteNumber === 4) {
        nearType = AbstractNearType
        title = '增五度'
      }
      break
    case 6:
      if (noteNumber === 4) {
        nearType = MinorNearType
        title = '小六度'
      } else if (noteNumber === 4.5) {
        nearType = MajorNearType
        title = '大六度'
      } else if (noteNumber === 3.5) {
        nearType = DiminishedNearType
        title = '减六度'
      } else if (noteNumber === 5) {
        nearType = AbstractNearType
        title = '增六度'
      }
      break
    case 7:
      if (noteNumber === 5) {
        nearType = MinorNearType
        title = '小七度'
      } else if (noteNumber === 5.5) {
        nearType = MajorNearType
        title = '大七度'
      } else if (noteNumber === 4.5) {
        nearType = DiminishedNearType
        title = '减七度'
      } else if (noteNumber === 6) {
        nearType = AbstractNearType
        title = '增七度'
      }
      break
    case 8:
      if (noteNumber === 6) {
        nearType = PerfectNearType
        title = '纯八度'
      } else if (noteNumber === 5.5) {
        nearType = DiminishedNearType
        title = '减八度'
      } else if (noteNumber === 6.5) {
        nearType = AbstractNearType
        title = '增八度'
      }
      break
  }

  return {
    title,
    des,
    noteNumber,
    deg: needDeg,
    nearType
  }
}