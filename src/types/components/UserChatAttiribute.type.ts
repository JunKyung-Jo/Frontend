export interface UserChatAttribute {
  isMyChat: boolean;
  text: string;
  index: number;
  message: any[];
  setMessage: React.Dispatch<React.SetStateAction<any[]>>;
}
