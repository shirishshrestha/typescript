interface User {
  email: string;
  userId: number;
  googleId?: number;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const shirish: Admin = {
  email: "shirish@shirish.com",
  role: "admin",
  userId: 1,
  githubToken: "shirish",
  startTrail: () => {
    return "Welcome to the trail";
  },
  getCoupon: (name: "shirish50", value: 10) => {
    return 10;
  },
};
