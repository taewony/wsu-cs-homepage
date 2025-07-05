import { Course, CareerPath, GraduateStory, Activity } from './types';

export const curriculumData: Course[] = [
  { year: 1, semester: 1, name: '컴퓨터 프로그래밍', credits: 3, category: '전공필수' },
  { year: 1, semester: 2, name: '자료구조', credits: 3, category: '전공필수' },
  { year: 2, semester: 1, name: '알고리즘', credits: 3, category: '전공필수' },
  { year: 2, semester: 2, name: '운영체제', credits: 3, category: '전공필수' },
  { year: 3, semester: 1, name: '데이터베이스', credits: 3, category: '전공선택' },
  { year: 3, semester: 2, name: '네트워크', credits: 3, category: '전공선택' },
  { year: 4, semester: 1, name: '인공지능', credits: 3, category: '전공선택' },
  { year: 4, semester: 2, name: '캡스톤디자인', credits: 3, category: '전공필수' },
];

export const careerPathData: CareerPath[] = [
  {
    title: '웹 개발자',
    description: '웹사이트와 웹 애플리케이션을 만듭니다.',
    companies: ['네이버', '카카오', '쿠팡'],
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: '앱 개발자',
    description: '모바일 앱을 만듭니다.',
    companies: ['삼성전자', 'LG전자', 'SKT'],
    skills: ['Java', 'Kotlin', 'Swift', 'Flutter'],
  },
  {
    title: '데이터 사이언티스트',
    description: '데이터를 분석하고 인사이트를 도출합니다.',
    companies: ['Google', 'Microsoft', 'Amazon'],
    skills: ['Python', 'R', 'SQL', 'TensorFlow'],
  },
  {
    title: '정보보안 전문가',
    description: '해킹과 바이러스로부터 정보를 보호합니다.',
    companies: ['안랩', '이글루시큐리티', 'SK인포섹'],
    skills: ['네트워크', '시스템', '암호학', '리버싱'],
  },
];

export const graduateStoriesData: GraduateStory[] = [
  {
    name: '김선배',
    company: '네이버',
    position: '프론트엔드 개발자',
    message: '우송대에서 배운 탄탄한 기본기 덕분에 빠르게 성장할 수 있었습니다.',
    year: 2022,
  },
  {
    name: '이선배',
    company: '카카오',
    position: '백엔드 개발자',
    message: '다양한 프로젝트 경험이 실무에 큰 도움이 되었습니다.',
    year: 2021,
  },
];

export const activitiesData: Activity[] = [
  {
    title: 'SW 경진대회',
    description: '소프트웨어 개발 능력을 겨루고, 창의적인 아이디어를 구현하는 대회입니다.',
    imageURL: '/images/activity01.svg',
    category: '경진대회',
  },
  {
    title: '캡스톤 디자인 프로젝트',
    description: '4년간 배운 전공 지식을 바탕으로 학생들이 스스로 주제를 선정하고, 기획부터 개발까지 전 과정을 수행하는 종합설계 프로젝트입니다.',
    imageURL: '/images/activity02.svg',
    category: '프로젝트',
  },
  {
    title: 'IT 기업 전문가 초청 특강',
    description: '현업에 종사하는 IT 전문가들을 초청하여 최신 기술 트렌드와 생생한 현장 경험을 듣는 시간입니다.',
    imageURL: '/images/activity03.svg',
    category: '세미나',
  },
];