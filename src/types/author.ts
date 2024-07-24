export enum AuthorRoleEnum {
  editor = 'Editor',
  author = 'Author',
}

export type AuthorRole = keyof typeof AuthorRoleEnum;

export type Author = {
  name: string;
  description: string;
  avatarUrl: string;
  linkedInUrl: string;
  aboutMe?: string;
  role: AuthorRole;
};
