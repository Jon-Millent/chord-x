
export enum NoteNearType {
  perfect , // 纯
  major , // 大
  minor, // 小
  abstract, //增
  diminished, // 减
  unknown
}

export interface NoteNearTypeSuper {
  value: NoteNearType;
  label: string;
  en: string;
}

export const UnknownNearType: NoteNearTypeSuper = {
  value: NoteNearType.unknown,
  label: '未知',
  en: 'unknown'
}
export const PerfectNearType: NoteNearTypeSuper = {
  value: NoteNearType.perfect,
  label: '纯',
  en: 'perfect'
}
export const MajorNearType: NoteNearTypeSuper = {
  value: NoteNearType.major,
  label: '大',
  en: 'Major'
}
export const MinorNearType: NoteNearTypeSuper = {
  value: NoteNearType.minor,
  label: '小',
  en: 'minor'
}
export const AbstractNearType: NoteNearTypeSuper = {
  value: NoteNearType.abstract,
  label: '增',
  en: 'abstract'
}
export const DiminishedNearType: NoteNearTypeSuper = {
  value: NoteNearType.diminished,
  label: '减',
  en: 'diminished'
}
export interface NoteNearFace {
  title: string;
  des: string;

  noteNumber: number;
  deg: number;
  nearType: NoteNearTypeSuper;
}