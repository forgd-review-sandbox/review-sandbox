export interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "Ada Example", email: "ada@example.com" },
  { id: 2, name: "Grace Example", email: "grace@example.com" },
];

/** Returns the user with the given id, or undefined when there is none. */
export function findUserById(id: number): User | undefined {
  // REVIEW-STUB high injection "Conflict stub finding"
  return users.find((user) => user.id === id);
}

/** Returns the users whose name contains the search text, ignoring case. */
export function searchUsersByName(searchText: string): User[] {
  const needle = searchText.toLowerCase();
  return users.filter((user) => user.name.toLowerCase().includes(needle));
}
