
 type Todos={
    id:number;
    title:string;
    status:string;
  }

  type AuthData = {
    todos: Todos[] | null;
    OnSubmit: (e: React.FormEvent) => Promise<void>;
    tasktitle: string;
    OnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

  export type{Todos, AuthData}