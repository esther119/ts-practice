interface User {
  id: number;
  name: string;
  greet(): string;
}
const user: User = {
  id: 1,
  name: "happy",
  greet() {
    return `hello ${this.name}`;
  },
};

class ClassName implements User {
  id = 1;
  name = "no";
  greet() {
    return `love you ${this.name}`;
  }
}

interface LoadingState {
  state: "loading";
  user_state: "loading";
}
interface FailureState {
  state: "failure";
}

type NetworkState = LoadingState | FailureState;
const test = (networkState: NetworkState) => {
  if ("user_state" in networkState) {
    // NetworkState is a LoadingState
    console.log("Loading state");
  } else if ("computer_state" in networkState) {
    // NetworkState is a FailureState
    console.log("Failure state");
  }
};

const test2 = (networkState: NetworkState) => {
  if (networkState.state === "loading") {
    return networkState.state;
  } else {
    return "failure";
  }
};

console.log(user.greet());
const user1 = new ClassName();
console.log(user1.greet());
