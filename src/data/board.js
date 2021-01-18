const boardDummyData = {
  id: 1,
  name: 'trollers_clone',
  lists: [
    {
      id: 1,
      title: '기획',
      card: [
        {
          id: 1,
          title: '주제선정',
          description: '',
          cover: 'tomato',
          label: ['#000000', '#000080'],
        },
        {
          id: 2,
          title: '기능정의',
          description: '트렐로 기능 정리 후, 구현 가능한 기능 추리기',
          label: ['#000000', '#ADFF2F'],
        },
        {
          id: 2,
          title: 'UI설계',
          description: 'Figma by 승일',
          label: ['#000000', '#20B2AA'],
        },
      ]
    },
    {
      id: 2,
      title: '구현 및 테스트',
      card: [
        {
          id: 1,
          title: '로그인 UI, 기능 구현',
          description: 'redux로 간단하게 (검증X)',
          cover: 'green',
          label: ['#FFFF00'],
        },
        {
          id: 2,
          title: '보드, 리스트, 카드 UI 구현',
          description: '가데이터로 하드코딩',
          label: ['#6ADBFF'],
        },
        {
          id: 3,
          title: 'DnD 테스트 및 적용',
          description: 'react-beautiful-dnd 라이브러리 사용',
          label: ['#FFFF00', '#000080']
        },
      ]
    }
  ]
}

export default boardDummyData;