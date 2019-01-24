export interface Contact {
  id?: number; // ? = il y a peut etre un id
  pseudo?: string;
  name: {
    first: string;
    last: string;
  };
  infos?: ContactInfos;
}

interface ContactInfos {
  email: string;
  city: string;
  phone: string;
  ig: string;
}
