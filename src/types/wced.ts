export interface WCEDPaper {
  id: string;
  subject: string;
  year: number;
  paper: number;
  term?: number;
  url: string;
}

export interface WCEDQuestion {
  id: string;
  text: string;
  marks?: number;
  type?: string;
  section?: string;
  subQuestions?: WCEDQuestion[];
}

export interface WCEDSection {
  title: string;
  questions: WCEDQuestion[];
}

export interface WCEDPaperContent {
  paper: WCEDPaper;
  sections: WCEDSection[];
  questions: WCEDQuestion[];
  metadata: {
    totalMarks: number;
    timeLimit: number;
    instructions?: string[];
  };
}

export interface SyncStatus {
  lastSync: Date;
  papersProcessed: number;
  errors: string[];
  inProgress: boolean;
}