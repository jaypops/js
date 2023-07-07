//if statements for voting

function vote(vot) {
  console.log("You can only vote for one canditate (a,b,c):");
  for (const re of vot) {
    if (re === "a" || re === "b" || re === "c") {
      console.log(`you voted for ${re}`);
    } else {
      console.log(`try again`);
    }
  }
}
vote(["a", "b", "c", "d"]);
