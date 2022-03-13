export interface SEND_EMAIL {
  subject: string;
  emailAddress: string;
  message: string;
}

export interface FADE_IN {
  scorllElmId: string;
  ref: React.RefObject<HTMLDivElement>;
  translate: { x: number; y: number };
}
