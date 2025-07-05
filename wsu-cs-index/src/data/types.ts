
export interface Course {
  year: number;
  semester: number;
  name: string;
  credits: number;
  category: string;
}

export interface CareerPath {
  title: string;
  description: string;
  companies: string[];
  skills: string[];
}

export interface GraduateStory {
  name: string;
  company: string;
  position: string;
  message: string;
  year: number;
}

export interface Activity {
  title: string;
  description: string;
  category: string;
  imageURL: string;
}
