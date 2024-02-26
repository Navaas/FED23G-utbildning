export interface Post {
  id: string;
  src: string;
  author: string;
}

export const mockedPosts: Post[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1533008093099-e2681382639a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Michaela",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1588250243574-9458c28bc02e?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Moa",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Jessica",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1555485898-0f23a85a607f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Annie",
  },
];
