export const UP = '#'
export const DOWN = 'b'

export const Rule = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

export function getRuleLength (from: string, to: string) {
  return Math.abs(Rule.indexOf(from) - Rule.indexOf(to))
}

export interface BookItemFace {
  name: string;
  key: string;
  value: number;
  fromA: number;
  deg: number;
  roma: string;
  number: string;
  up: boolean;
  group: number;
  uniKey: string;
  compDeg: number;
  compFromA: number;
  sing: string;
}

function getGroupConfig (group: number): BookItemFace[] {
  const map: BookItemFace[] = [
    {
      name: 'C',
      key: 'C',
      value: 0.5,
      fromA: 0,
      deg: 1,
      roma: 'Ⅰ',
      number: '1',
      up: false,
      group,
      uniKey: '',
      compDeg: 0,
      compFromA: 0,
      sing: 'do'
    },
    {
      name: 'C',
      key: 'C',
      value: 0.5,
      fromA: 0.5,
      deg: 1,
      roma: 'Ⅰ',
      number: '1',
      up: true,
      group,
      uniKey: '',
      compDeg: 0,
      compFromA: 0,
      sing: 'do'
    },
    {
      name: 'D',
      key: 'D',
      value: 0.5,
      fromA: 1,
      deg: 2,
      roma: 'Ⅱ',
      number: '2',
      up: false,
      group,
      uniKey: '',
      compDeg: 0,
      compFromA: 0,
      sing: 're'
    },
    {
      name: 'D',
      key: 'D',
      value: 0.5,
      fromA: 1.5,
      deg: 2,
      roma: 'Ⅱ',
      number: '2',
      up: true,
      group,
      uniKey: '',
      compDeg: 0,
      compFromA: 0,
      sing: 're'
    },
    {
      name: 'E',
      key: 'E',
      value: 0.5,
      fromA: 2,
      deg: 3,
      roma: 'Ⅲ',
      number: '3',
      up: false,
      group,
      uniKey: '',
      compDeg: 0,
      compFromA: 0,
      sing: 'mi'
    },
    {
      name: 'F',
      key: 'F',
      value: 0.5,
      fromA: 2.5,
      deg: 4,
      roma: 'Ⅳ',
      number: '4',
      up: false,
      group,
      uniKey: '',
      compDeg: 0,
      compFromA: 0,
      sing: 'fa'
    },
    {
      name: 'F',
      key: 'F',
      value: 0.5,
      fromA: 3,
      deg: 4,
      roma: 'Ⅳ',
      number: '4',
      up: true,
      group,
      uniKey: '',
      compDeg: 0,
      compFromA: 0,
      sing: 'fa'
    },
    {
      name: 'G',
      key: 'G',
      value: 0.5,
      fromA: 3.5,
      deg: 5,
      roma: 'Ⅴ',
      number: '5',
      up: false,
      group,
      uniKey: '',
      compDeg: 0,
      compFromA: 0,
      sing: 'so'
    },
    {
      name: 'G',
      key: 'G',
      value: 0.5,
      fromA: 4,
      deg: 5,
      roma: 'Ⅴ',
      number: '5',
      up: true,
      group,
      uniKey: '',
      compDeg: 0,
      compFromA: 0,
      sing: 'so'
    },
    {
      name: 'A',
      key: 'A',
      value: 0.5,
      fromA: 4.5,
      deg: 6,
      roma: 'Ⅵ',
      number: '6',
      up: false,
      group,
      uniKey: '',
      compDeg: 0,
      compFromA: 0,
      sing: 'la'
    },
    {
      name: 'A',
      key: 'A',
      value: 0.5,
      fromA: 5,
      deg: 6,
      roma: 'Ⅵ',
      number: '6',
      up: true,
      group,
      uniKey: '',
      compDeg: 0,
      compFromA: 0,
      sing: 'la'
    },
    {
      name: 'B',
      key: 'B',
      value: 0.5,
      fromA: 5.5,
      deg: 7,
      roma: 'Ⅶ',
      number: '7',
      up: false,
      group,
      uniKey: '',
      compDeg: 0,
      compFromA: 0,
      sing: 'xi'
    }
  ]

  map.forEach(item => {
    item.group = group
    item.name = item.name + (item.up ? UP : '')
    item.uniKey = item.name + group
    item.compDeg = item.deg + group * 7
  })
  return map
}


function getPianoConfig() {
  let fromA = 0
  const PianoConfig = [
    ...getGroupConfig(0),
    ...getGroupConfig(1),
    ...getGroupConfig(2),
    ...getGroupConfig(3),
    ...getGroupConfig(4),
  ]
  PianoConfig.forEach(item => {
    item.compFromA = fromA
    fromA += 0.5
  })
  return PianoConfig
}
export const PianoConfig = getPianoConfig()