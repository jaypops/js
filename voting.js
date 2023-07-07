//if statements for voting

function vote(vot) {
  for (const re of vot) {
      console.log("You can only vote for one canditate (a,b,c):");
    if (re === "a" || re === "b" || re === "c") {
      console.log(`you voted for ${re}`);
    } else {
      console.log(`try again`);
    }
  }
}
vote(["a", "b", "c", "d"]);
